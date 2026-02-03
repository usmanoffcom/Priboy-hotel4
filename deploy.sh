#!/bin/bash

set -e

# Скрипт для деплоя Next.js проекта на priboy-spa.ru
# Запускать из директории проекта Priboy-hotel4

USER="${DEPLOY_USER:-root}"
HOST="${DEPLOY_HOST:-89.23.102.48}"
REMOTE_DIR="${DEPLOY_REMOTE_DIR:-/var/www/priboy-spa.ru}"
LOCAL_DIR="${DEPLOY_LOCAL_DIR:-.}"
PASSWORD="${DEPLOY_PASSWORD}"
DOMAIN="${DEPLOY_DOMAIN:-priboy-spa.ru}"
PORT="${DEPLOY_PORT:-3002}"

# Проверяем что мы в правильной директории
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: запустите скрипт из директории проекта (где находится package.json)"
    exit 1
fi

# Проверяем наличие обязательных переменных окружения
if [ -z "$PASSWORD" ]; then
    echo "❌ Ошибка: переменная окружения DEPLOY_PASSWORD не установлена"
    echo "Используйте: export DEPLOY_PASSWORD='your_password'"
    exit 1
fi

# Проверяем наличие sshpass
if ! command -v sshpass &> /dev/null; then
    echo "❌ sshpass не найден."
    echo "Установите на macOS: brew install hudochenkov/sshpass/sshpass"
    echo "Установите на Ubuntu: sudo apt install sshpass"
    exit 1
fi

SSH_CMD() {
    sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 "$USER@$HOST" "$@"
}

RSYNC_CMD() {
    sshpass -p "$PASSWORD" rsync -avz --timeout=60 -e "ssh -o StrictHostKeyChecking=no" "$@"
}

echo "🚀 Начинаю деплой на $DOMAIN..."
echo "📂 Локальная директория: $(pwd)"
echo "🖥️ Сервер: $HOST"
echo "📁 Удаленная директория: $REMOTE_DIR"

# Создаем директорию на сервере
echo ""
echo "📁 [1/7] Создаю директорию на сервере..."
SSH_CMD "mkdir -p $REMOTE_DIR" || exit 1

# Синхронизируем файлы
echo "📤 [2/7] Синхронизирую файлы..."
RSYNC_CMD --delete \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.git' \
  --exclude '.DS_Store' \
  --exclude 'Menu_2025' \
  --exclude 'Меню осень 2024' \
  --exclude '*.log' \
  "$LOCAL_DIR/" "$USER@$HOST:$REMOTE_DIR/" || exit 1

# Устанавливаем зависимости
echo "🔨 [3/7] Устанавливаю зависимости..."
SSH_CMD "cd $REMOTE_DIR && pnpm install --frozen-lockfile" || exit 1

# Собираем проект
echo "🏗️ [4/7] Собираю проект..."
SSH_CMD "cd $REMOTE_DIR && pnpm build" || exit 1

# Устанавливаем московское время
echo "🕐 [4.5/7] Устанавливаю московское время..."
SSH_CMD "timedatectl set-timezone Europe/Moscow" || exit 1

# Создаем systemd service
echo "⚙️ [5/7] Настраиваю systemd service..."
SSH_CMD "cat > /tmp/priboy-spa-ru.service << 'SERVICE_EOF'
[Unit]
Description=Next.js App for $DOMAIN
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=$REMOTE_DIR
Environment=NODE_ENV=production
Environment=PORT=$PORT
Environment=TZ=Europe/Moscow
ExecStart=/usr/bin/pnpm start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
SERVICE_EOF
mv /tmp/priboy-spa-ru.service /etc/systemd/system/priboy-spa-ru.service" || exit 1

# Устанавливаем права
echo "🔐 [6/7] Устанавливаю права..."
SSH_CMD "chown -R www-data:www-data $REMOTE_DIR && chmod -R 755 $REMOTE_DIR" || exit 1

# Перезапускаем сервис
echo "🔄 [7/7] Перезапускаю сервис..."
SSH_CMD "systemctl daemon-reload && systemctl enable priboy-spa-ru.service && systemctl restart priboy-spa-ru.service" || exit 1

# Обновляем только конфиг priboy-spa.ru — другие сайты не трогаем
echo "🌐 Обновляю конфиг Nginx для $DOMAIN..."
SSH_CMD "cat > /tmp/nginx-config << 'NGINX_EOF'
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name $DOMAIN;

    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    access_log /var/log/nginx/$DOMAIN-access.log;
    error_log /var/log/nginx/$DOMAIN-error.log;

    location / {
        proxy_pass http://127.0.0.1:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection \"upgrade\";
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$remote_addr;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    # Кеширование статических файлов Next.js
    location /_next/static {
        proxy_pass http://localhost:$PORT;
        proxy_cache_valid 200 365d;
        add_header Cache-Control \"public, max-age=31536000, immutable\";
    }

    # Кеширование изображений и других статических файлов
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2|ttf|eot|css|js)$ {
        proxy_pass http://localhost:$PORT;
        proxy_cache_valid 200 365d;
        add_header Cache-Control \"public, max-age=31536000, immutable\";
        expires 1y;
        access_log off;
    }

    # Кеширование для PDF и других документов
    location ~* \.(pdf|zip)$ {
        proxy_pass http://localhost:$PORT;
        proxy_cache_valid 200 30d;
        add_header Cache-Control \"public, max-age=2592000\";
        expires 30d;
    }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.$DOMAIN;

    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    return 301 https://$DOMAIN\$request_uri;
}
NGINX_EOF
mv /tmp/nginx-config /etc/nginx/sites-available/$DOMAIN
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/$DOMAIN
if nginx -t 2>/dev/null; then systemctl reload nginx && echo '✅ Nginx перезагружен'; else echo '⚠️ nginx -t: ошибки в других конфигах. Конфиг $DOMAIN обновлён.'; fi" || true

echo ""
echo "════════════════════════════════════════════════════════"
echo "✅ Деплой успешно завершен!"
echo "🌐 Сайт доступен: https://$DOMAIN"
echo "════════════════════════════════════════════════════════"

