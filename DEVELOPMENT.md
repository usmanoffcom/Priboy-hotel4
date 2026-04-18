# Руководство по разработке — Прибой 4★

## Быстрый старт

**Требования:** Node.js 20+, pnpm 9+

```bash
git clone git@github.com:usmanoffcom/Priboy-hotel4.git
cd Priboy-hotel4
pnpm install
pnpm dev
```

Локально: `http://localhost:3000`

**Сборка:**

```bash
pnpm build
pnpm start
```

## Деплой

Скрипт `deploy.sh` в корне проекта. Для работы ожидает приватный SSH-ключ и адрес сервера — задавайте их **локально** в `.env.deploy` (см. `.env.deploy.example`). IP, ключи, пароли и прочие серверные данные в git не коммитим.

```bash
# один раз: cp ../.env.deploy.example ../.env.deploy и заполнить
./deploy.sh
```

## Структура проекта (кратко)

- `app/` — App Router: страницы номеров, SPA, блог, бронирование, `sitemap.ts`, `layout.tsx`
- `components/` — UI, превью SPA, шапка/подвал
- `lib/` — данные номеров, блога, SPA и др.
- `public/` — статика

## Интеграции

- **TravelLine** — виджет бронирования; подключение в `app/layout.tsx`
- **Яндекс.Метрика** — счётчик в `app/layout.tsx`

Идентификаторы не дублируйте в открытых заметках — они уже задаются в коде приложения.

## Стили

Tailwind CSS, палитра: терракотовый / кремовый / золотой. UI: [shadcn/ui](https://ui.shadcn.com/).

## SEO

Публичный сайт: [priboy-spa.ru](https://priboy-spa.ru). Sitemap и метаданные — в `app/sitemap.ts` и страницах. После добавления страниц проверяйте sitemap и robots.

## Важно

- Не заменять TravelLine кастомной формой бронирования без отдельного решения.
- Не коммить `node_modules`, `.next`, локальные файлы с секретами деплоя.

## Контакты (публичные)

- Сайт: https://priboy-spa.ru  
- См. страницу «Контакты» на сайте для актуальных телефона и почты.
