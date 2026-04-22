#!/bin/bash

set -e

# Деплой Priboy-hotel4 (priboy-spa.ru).
# Запускать из директории проекта. Секреты — в ./.env.deploy
# или через переменные окружения — в git их не коммитим.
#
# Требуются:
#   DEPLOY_HOST      — IP/hostname сервера
#   DEPLOY_SSH_KEY   — путь к приватному ключу (например ~/.ssh/myunion_vds)
#   DEPLOY_USER      — опционально, по умолчанию root

for env_file in "./.env.deploy"; do
    if [ -f "$env_file" ]; then
        # shellcheck disable=SC1090
        set -a; . "$env_file"; set +a
        break
    fi
done

USER="${DEPLOY_USER:-root}"
HOST="${DEPLOY_HOST:-}"
SSH_KEY="${DEPLOY_SSH_KEY:-}"
REMOTE_DIR="${DEPLOY_REMOTE_DIR:-/var/www/priboy-spa.ru-nextjs}"
LOCAL_DIR="${DEPLOY_LOCAL_DIR:-.}"
DOMAIN="${DEPLOY_DOMAIN:-priboy-spa.ru}"
PORT="${DEPLOY_PORT:-3002}"

if [ ! -f "package.json" ]; then
    echo "❌ Запустите скрипт из директории проекта (где лежит package.json)"
    exit 1
fi

if [ -z "$HOST" ]; then
    echo "❌ Не задан DEPLOY_HOST. Положите его в .env.deploy или экспортируйте перед запуском."
    exit 1
fi

if [ -z "$SSH_KEY" ]; then
    echo "❌ Не задан DEPLOY_SSH_KEY (путь к приватному ключу)."
    exit 1
fi

if [ ! -f "$SSH_KEY" ]; then
    echo "❌ Ключ не найден: $SSH_KEY"
    exit 1
fi

SSH_OPTS=(-i "$SSH_KEY" -o StrictHostKeyChecking=accept-new -o ConnectTimeout=15 -o IdentitiesOnly=yes)

SSH_CMD() {
    ssh "${SSH_OPTS[@]}" "$USER@$HOST" "$@"
}

RSYNC_CMD() {
    rsync -avz --timeout=60 -e "ssh ${SSH_OPTS[*]}" "$@"
}

echo "🚀 Деплой $DOMAIN на $USER@$HOST"
echo "📂 Локально:  $(pwd)"
echo "📁 На сервере: $REMOTE_DIR"

echo ""
echo "📁 [1/7] Создаю директорию на сервере..."
SSH_CMD "mkdir -p $REMOTE_DIR"

echo "📤 [2/7] Синхронизирую файлы (--delete: старые удаляются)..."
RSYNC_CMD --delete \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.git' \
  --exclude '.DS_Store' \
  --exclude 'Menu_2025' \
  --exclude 'Меню осень 2024' \
  --exclude '*.log' \
  --exclude '.env' \
  --exclude '.env.local' \
  "$LOCAL_DIR/" "$USER@$HOST:$REMOTE_DIR/"

echo "🔨 [3/7] pnpm install --frozen-lockfile..."
SSH_CMD "cd $REMOTE_DIR && pnpm install --frozen-lockfile"

echo "🏗️ [4/7] pnpm build..."
SSH_CMD "cd $REMOTE_DIR && pnpm build"

echo "🕐 [4.5/7] Таймзона Europe/Moscow..."
SSH_CMD "timedatectl set-timezone Europe/Moscow" || true

echo "⚙️ [5/7] systemd unit..."
SSH_CMD "cat > /etc/systemd/system/priboy-spa-ru.service" <<SERVICE_EOF
[Unit]
Description=Next.js App for ${DOMAIN}
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=${REMOTE_DIR}
Environment=NODE_ENV=production
Environment=PORT=${PORT}
Environment=TZ=Europe/Moscow
ExecStart=/usr/bin/pnpm start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
SERVICE_EOF

echo "🔐 [6/7] Права на файлы..."
SSH_CMD "chown -R www-data:www-data $REMOTE_DIR && chmod -R 755 $REMOTE_DIR"

echo "🔄 [7/7] Перезапуск сервиса..."
SSH_CMD "systemctl daemon-reload && systemctl enable priboy-spa-ru.service && systemctl restart priboy-spa-ru.service"

echo "🌐 Каталоги кэша nginx (иначе nginx -t: client_temp failed)…"
SSH_CMD "mkdir -p /var/cache/nginx/client_temp /var/cache/nginx/client_body_temp /var/cache/nginx/proxy_temp /var/cache/nginx/fastcgi_temp /var/cache/nginx/uwsgi_temp /var/cache/nginx/scgi_temp && chown -R www-data:www-data /var/cache/nginx" || true

echo "🌐 Nginx для $DOMAIN..."
SSH_CMD "cat > /etc/nginx/sites-available/$DOMAIN" <<NGINX_EOF
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} www.${DOMAIN};
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name ${DOMAIN};

    ssl_certificate /etc/letsencrypt/live/${DOMAIN}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${DOMAIN}/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    access_log /var/log/nginx/${DOMAIN}-access.log;
    error_log  /var/log/nginx/${DOMAIN}-error.log;

    location / {
        proxy_pass http://127.0.0.1:${PORT};
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$remote_addr;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "";
        proxy_buffering on;
        proxy_buffer_size 256k;
        proxy_buffers 32 256k;
        proxy_busy_buffers_size 512k;
        proxy_read_timeout 300s;
        proxy_send_timeout 300s;
    }

    location /_next/static {
        proxy_pass http://127.0.0.1:${PORT};
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2|ttf|eot|css|js)\$ {
        proxy_pass http://127.0.0.1:${PORT};
        add_header Cache-Control "public, max-age=31536000, immutable";
        expires 1y;
        access_log off;
    }

    location ~* \.(pdf|zip)\$ {
        proxy_pass http://127.0.0.1:${PORT};
        add_header Cache-Control "public, max-age=2592000";
        expires 30d;
    }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.${DOMAIN};

    ssl_certificate /etc/letsencrypt/live/${DOMAIN}/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/${DOMAIN}/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    return 301 https://${DOMAIN}\$request_uri;
}
NGINX_EOF

SSH_CMD "ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/$DOMAIN && \
         if nginx -t 2>/dev/null; then systemctl reload nginx && echo '✅ Nginx перезагружен'; \
         else echo '⚠️  nginx -t вернул ошибки — конфиг $DOMAIN обновлён, reload пропущен.'; fi" || true

echo ""
echo "════════════════════════════════════════════════════════"
echo "✅ Деплой завершён."
echo "🌐 Сайт: https://${DOMAIN}"
echo "════════════════════════════════════════════════════════"
