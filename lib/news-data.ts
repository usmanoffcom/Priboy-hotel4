export interface NewsPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  author?: string
  featured?: boolean
}

export const newsPosts: NewsPost[] = [
  {
    id: "3",
    slug: "spetsialnoe-predlozhenie-rannee-bronirovanie-2026",
    title: "Специальное предложение: раннее бронирование на летний сезон 2026",
    excerpt: "Акция завершилась 1 февраля 2026. Забронируйте номер заранее и получите выгодные цены на отдых в Гранд Отель & SPA Прибой.",
    content: `<p><strong>Акция завершилась 1 февраля 2026.</strong></p>
<p>Гранд Отель & SPA Прибой подготовил для вас специальное предложение на раннее бронирование летнего сезона 2026 года!</p>
<p>Забронируйте номер заранее и получите выгодные цены на отдых в одном из лучших отелей Лазаревского. Это отличная возможность спланировать свой отпуск заранее и сэкономить.</p>
<div class="my-8">
<div class="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-xl">
<img src="/pool2.jpg" alt="Раннее бронирование — скидки на летний сезон" class="w-full h-auto object-cover" />
<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
<div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white text-center">
<p class="text-xs sm:text-sm tracking-widest uppercase mb-2 text-white/80">Специальное предложение</p>
<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">РАННЕЕ БРОНИРОВАНИЕ</h2>
<p class="text-sm sm:text-base md:text-lg font-light tracking-wide mb-4">на летний сезон 2026</p>
<p class="text-xs sm:text-sm text-white/90 mb-4 leading-relaxed">Забронируйте номер заранее и получите выгодные цены на отдых!<br /><span class="text-gold font-medium">Время предложения ограничено</span></p>
<div class="flex flex-col sm:flex-row gap-3 justify-center">
<a href="https://t.me/grandpriboy/82" target="_blank" rel="noopener noreferrer" class="inline-block bg-terracotta hover:bg-terracotta-light text-white rounded-none px-6 py-3 text-sm sm:text-base font-medium transition-colors text-center">Условия акции</a>
<a href="tel:+79883443333" class="inline-block border border-white text-white hover:bg-white hover:text-foreground rounded-none px-6 py-3 text-sm sm:text-base font-medium transition-colors text-center bg-white/10">Позвонить</a>
</div>
</div>
</div>
</div>
<h2>Преимущества раннего бронирования:</h2>
<ul>
<li><strong>Выгодные цены</strong> — забронируйте номер заранее и получите лучшую цену на летний сезон</li>
<li><strong>Гарантия места</strong> — зафиксируйте даты отдыха заранее и не беспокойтесь о наличии свободных номеров</li>
<li><strong>Гибкие условия</strong> — возможность изменения или отмены бронирования</li>
<li><strong>Лучший выбор</strong> — больше вариантов номеров и дат заезда</li>
</ul>
<h2>Как забронировать:</h2>
<p>Вы можете забронировать номер несколькими способами:</p>
<ul>
<li>Онлайн через форму бронирования на нашем сайте</li>
<li>По телефону: <a href="tel:+79883443333">+7 (988) 344-33-33</a> или <a href="tel:+79853443333">+7 (985) 344-33-33</a></li>
<li>По email: <a href="mailto:booking@priboy-spa.ru">booking@priboy-spa.ru</a></li>
<li>Через Telegram: <a href="https://t.me/grandpriboy/82" target="_blank" rel="noopener noreferrer">подробности акции</a></li>
</ul>
<p><strong>Не упустите возможность забронировать номер по выгодной цене!</strong> Время специального предложения ограничено.</p>
<p>С уважением,<br>
Служба бронирования Гранд Отеля & SPA «Прибой»<br>
Россия, г. Сочи, п. Лазаревское, ул. Калараша, д. 131<br>
Телефоны службы бронирования:<br>
<a href="tel:+79883443333">+7 (988) 344-33-33</a><br>
<a href="tel:+79853443333">+7 (985) 344-33-33</a><br>
<a href="https://www.priboy-spa.ru">www.priboy-spa.ru</a></p>`,
    image: "/pool2.jpg",
    date: "10 января 2026",
    featured: true,
  },
  {
    id: "2",
    slug: "gastronomicheskiy-uzhin-14-fevralya",
    title: "Гастрономический ужин в ресторане «Прибой» | 14 февраля",
    excerpt: "Приглашаем вас провести День всех влюбленных в особенной атмосфере! Шеф-повар Бадма Очиров и его команда создали гастрономический сет из 4-х курсов с идеально подобранными напитками.",
    content: `<p>Приглашаем вас провести День всех влюбленных в особенной атмосфере!</p>
<p>Шеф-повар Бадма Очиров и его команда создали гастрономический сет из 4-х курсов, в котором каждый вкус тщательно продуман, а блюда и напитки дополняют друг друга, раскрывая новые оттенки гастрономического удовольствия.</p>
<div class="my-8">
<video controls class="w-full rounded-sm" poster="/news/Screenshot 2026-01-15 at 17.08.51.png">
<source src="/news/vkclips_20260115050950.mp4" type="video/mp4">
Ваш браузер не поддерживает видео.
</video>
</div>
<h2>Программа вечера:</h2>
<ul>
<li>Гастроужин из 4-х курсов блюд с идеально подобранными напитками</li>
<li>Живая музыка от кавер-группы "ALEX & ASYA"</li>
<li>DJ-сет</li>
<li>Welcome - комплимент — бокал шампанского</li>
</ul>
<h2>14 ФЕВРАЛЯ (пятница)</h2>
<p><strong>Сбор гостей:</strong> 19:30<br>
<strong>Начало:</strong> 20:00</p>
<p><strong>Депозит:</strong> 4000₽</p>
<p><strong>Бронирование столов:</strong><br>
<a href="tel:+79890305555">+7 (989) 030 5555</a><br>
п. Лазаревское, ул. Калараша 127</p>
<p>Подарите себе и своим близким вечер вкуса, музыки и романтики!</p>`,
    image: "/news/Screenshot 2026-01-15 at 17.08.51.png",
    date: "3 февраля 2025",
    featured: true,
  },
  {
    id: "1",
    slug: "krytyy-aerariy-s-lezhakami-otkryt",
    title: "Крытый аэрарий с удобными лежаками открыт для гостей",
    excerpt: "Крытый аэрарий с нашими удобными лежаками открыт для наших гостей и ждет Вас для отдыха на берегу моря. Простор, тень и свежий морской воздух — идеальное сочетание для вашего расслабления.",
    content: `<p>Крытый аэрарий с нашими удобными лежаками открыт для наших гостей и ждет Вас для отдыха на берегу моря.</p>
<p>Простор, тень и свежий морской воздух — идеальное сочетание для вашего расслабления.</p>
<div class="my-8">
<iframe src="https://vk.com/video_ext.php?oid=-202379709&id=456239062&autoplay=1" width="100%" height="480" style="background-color: #000; max-width: 853px; aspect-ratio: 16/9;" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
</div>
<p>Приглашаем вас насладиться комфортным отдыхом в нашем крытом аэрарии, где вы сможете отдохнуть в тени, наслаждаясь свежим морским бризом и прекрасным видом на море.</p>
<p>С уважением,<br>
Служба бронирования Гранд Отеля & SPA «Прибой»<br>
Россия, г. Сочи, п. Лазаревское, ул. Калараша, д. 131<br>
Телефоны службы бронирования:<br>
<a href="tel:+79883443333">+7 (988) 344-33-33</a><br>
<a href="tel:+79853443333">+7 (985) 344-33-33</a><br>
<a href="https://www.priboy-spa.ru">www.priboy-spa.ru</a></p>`,
    image: "/news/Screenshot 2026-01-15 at 17.06.22.png",
    date: "2 июня 2025",
    featured: true,
  },
]

export function getNewsBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find((post) => post.slug === slug)
}

export function getFeaturedNews(): NewsPost[] {
  return newsPosts.filter((post) => post.featured).slice(0, 3)
}

export function getRecentNews(limit: number = 10): NewsPost[] {
  return newsPosts
    .sort((a, b) => {
      // Парсим русские даты
      const parseDate = (dateStr: string): number => {
        const dateParts = dateStr.split(' ')
        const months: { [key: string]: string } = {
          'января': '01', 'февраля': '02', 'марта': '03', 'апреля': '04',
          'мая': '05', 'июня': '06', 'июля': '07', 'августа': '08',
          'сентября': '09', 'октября': '10', 'ноября': '11', 'декабря': '12'
        }
        if (dateParts.length === 3 && months[dateParts[1]]) {
          const day = dateParts[0].padStart(2, '0')
          const month = months[dateParts[1]]
          const year = dateParts[2]
          return new Date(`${year}-${month}-${day}`).getTime()
        }
        return 0
      }
      return parseDate(b.date) - parseDate(a.date)
    })
    .slice(0, limit)
}
