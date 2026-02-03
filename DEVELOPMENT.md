# 🛠️ Руководство по разработке - Priboy Hotel 4★

## 📋 Быстрый старт

### 1. Клонирование репозитория

```bash
git clone git@github.com:usmanoffcom/Priboy-hotel4.git
cd Priboy-hotel4
```

### 2. Установка зависимостей

**Требования:**
- Node.js 20+ 
- pnpm 9+

```bash
# Установка pnpm (если не установлен)
npm install -g pnpm

# Установка зависимостей проекта
pnpm install
```

### 3. Запуск в режиме разработки

```bash
pnpm dev
```

Сайт будет доступен по адресу: http://localhost:3000

### 4. Сборка для продакшена

```bash
pnpm build
pnpm start
```

---

## 🚀 Деплой на сервер

### Переменные окружения для деплоя

```bash
export DEPLOY_PASSWORD='wR_DUF3Ays3kVu'
```

### Скрипт деплоя

Скрипт `deploy.sh` автоматически:
1. Синхронизирует файлы на сервер через rsync
2. Устанавливает зависимости (pnpm install)
3. Собирает проект (pnpm build)
4. Настраивает systemd сервис
5. Настраивает Nginx
6. Перезапускает сервис

```bash
# Из директории проекта
export DEPLOY_PASSWORD='wR_DUF3Ays3kVu'
bash deploy.sh
```

### Информация о сервере

| Параметр | Значение |
|----------|----------|
| **IP** | `89.23.102.48` |
| **Домен** | `priboy-spa.ru` |
| **Порт** | `3002` |
| **Директория** | `/var/www/priboy-spa.ru` |
| **Systemd сервис** | `priboy-spa-ru.service` |
| **Пользователь** | `www-data` |

### SSH доступ

```bash
# Подключение к серверу
sshpass -p 'wR_DUF3Ays3kVu' ssh root@89.23.102.48

# Или с ключами (рекомендуется настроить)
ssh root@89.23.102.48
```

---

## 🔧 Отладка на сервере

### Проверка статуса сервиса

```bash
ssh root@89.23.102.48 "systemctl status priboy-spa-ru.service"
```

### Просмотр логов

```bash
# Последние 100 записей логов
ssh root@89.23.102.48 "journalctl -u priboy-spa-ru.service -n 100"

# Логи в реальном времени
ssh root@89.23.102.48 "journalctl -u priboy-spa-ru.service -f"
```

### Перезапуск сервиса

```bash
ssh root@89.23.102.48 "systemctl restart priboy-spa-ru.service"
```

### Проверка Nginx

```bash
ssh root@89.23.102.48 "nginx -t && systemctl reload nginx"
```

### Проверка сайта

```bash
curl -I https://priboy-spa.ru/
```

---

## 📁 Структура проекта

```
Priboy-hotel4/
├── app/                      # Next.js App Router
│   ├── page.tsx              # Главная страница
│   ├── layout.tsx            # Корневой layout (метаданные, скрипты)
│   ├── not-found.tsx         # Страница 404
│   ├── sitemap.ts            # Динамический sitemap
│   ├── booking/              # Страница бронирования
│   ├── rooms/                # Страницы номеров
│   │   ├── page.tsx          # Список номеров
│   │   └── [slug]/page.tsx   # Страница конкретного номера
│   ├── spa/                  # SPA услуги
│   ├── blog/                 # Блог
│   │   ├── page.tsx          # Список статей
│   │   └── [slug]/page.tsx   # Страница статьи
│   ├── restaurant/           # Ресторан
│   ├── contacts/             # Контакты
│   └── ...                   # Другие страницы
├── components/               # React компоненты
│   ├── header.tsx            # Шапка сайта
│   ├── footer.tsx            # Подвал сайта
│   ├── hero-section.tsx      # Главный баннер
│   ├── room-card.tsx         # Карточка номера
│   ├── room-amenities.tsx    # Список удобств
│   └── ui/                   # UI компоненты (shadcn/ui)
├── lib/                      # Данные и утилиты
│   ├── rooms-data.ts         # Данные номеров
│   ├── blog-data.ts          # Данные блога
│   ├── spa-data.ts           # Данные SPA
│   ├── menu-data.ts          # Данные меню ресторана
│   └── utils.ts              # Утилиты
├── public/                   # Статические файлы
│   ├── rooms/                # Фотографии номеров
│   ├── spa/                  # Фотографии SPA
│   └── ...                   # Другие изображения
├── styles/                   # Стили
│   └── globals.css           # Глобальные стили
├── deploy.sh                 # Скрипт деплоя
├── package.json              # Зависимости
├── next.config.mjs           # Конфигурация Next.js
├── tailwind.config.ts        # Конфигурация Tailwind CSS
└── tsconfig.json             # Конфигурация TypeScript
```

---

## 📝 Основные файлы данных

### `lib/rooms-data.ts` - Номера отеля

```typescript
export const rooms = [
  {
    id: "standard",
    name: "Стандартный номер",
    slug: "standard",
    size: "25 м²",
    price: "от 5 500 ₽",
    capacity: "2 + 1",
    beds: "1 большая кровать",
    amenities: ["Wi-Fi", "Кондиционер", "TV", ...],
    images: [...],
    fullDescription: "...",
  },
  // ...
]
```

### `lib/blog-data.ts` - Статьи блога

```typescript
export const blogPosts = [
  {
    id: 1,
    slug: "novyj-god-...",
    title: "...",
    excerpt: "...",
    content: "...",
    image: "/blog/...",
    category: "Отдых",
    author: "Гранд Отель Прибой",
    date: "2024-12-30",
    readTime: "5 мин",
  },
  // ...
]
```

### `lib/spa-data.ts` - SPA услуги

```typescript
export const spaServices = [...]
export const spaInfo = {
  schedule: "17:00 – 20:00",
  technicalHour: "с 16:00 до 17:00",
  // ...
}
```

---

## 🎨 Стилизация

Проект использует **Tailwind CSS** с кастомной цветовой схемой:

| Цвет | Значение | Использование |
|------|----------|---------------|
| Терракотовый | `#C17F5A` | Акценты, кнопки |
| Кремовый | `#F5F5DC` | Фон, текст |
| Золотой | `#D4AF37` | Премиум элементы |

**Компоненты UI**: используется [shadcn/ui](https://ui.shadcn.com/) - находятся в `components/ui/`

---

## 🔗 Интеграции

### TravelLine (бронирование)

Настроено в `app/layout.tsx`:

```typescript
<Script
  id="travelline-init"
  strategy="lazyOnload"
  dangerouslySetInnerHTML={{
    __html: `(function(w){...})('TL-INT-priboy-spa-ru_2025-06-23', w.TL);`
  }}
/>
```

### Яндекс.Метрика

ID: `99041885` - настроено в `app/layout.tsx`

---

## 📊 SEO

### Sitemap

Генерируется автоматически в `app/sitemap.ts`:
- Статические страницы
- Динамические страницы номеров
- Страницы блога
- SPA услуги

URL: https://priboy-spa.ru/sitemap.xml

### Метаданные

Каждая страница имеет:
- `title` и `description`
- Open Graph теги
- Twitter Card теги
- Canonical URL

### Страница 404

Кастомная страница: `app/not-found.tsx`

---

## ⚠️ Важно

### НЕ делать:
- ❌ Не использовать кастомные формы бронирования (используется TravelLine)
- ❌ Не менять домен или порт
- ❌ Не удалять интеграцию TravelLine
- ❌ Не пушить node_modules и .next

### Помнить:
- ✅ Проверять статус деплоя после изменений
- ✅ Обновлять sitemap при добавлении страниц
- ✅ Использовать оптимизированные изображения
- ✅ Тестировать на мобильных устройствах

---

## 🐞 Типичные проблемы

### Сайт не открывается после деплоя

```bash
# Проверить статус сервиса
ssh root@89.23.102.48 "systemctl status priboy-spa-ru.service"

# Перезапустить
ssh root@89.23.102.48 "systemctl restart priboy-spa-ru.service"
```

### Ошибка сборки

```bash
# Очистить кеш и пересобрать
rm -rf .next node_modules
pnpm install
pnpm build
```

### Права доступа на сервере

```bash
ssh root@89.23.102.48 "chown -R www-data:www-data /var/www/priboy-spa.ru && chmod -R 755 /var/www/priboy-spa.ru"
```

---

## 📞 Контакты

- **Домен**: https://priboy-spa.ru
- **Email**: booking@priboy-spa.ru
- **Телефон**: +7 (862) 270-89-89

