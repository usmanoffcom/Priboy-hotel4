import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Гранд Отель & SPA Прибой",
  description: "Политика конфиденциальности Гранд Отель & SPA Прибой. Защита персональных данных, условия обработки информации, права пользователей.",
  alternates: {
    canonical: "https://priboy-spa.ru/privacy",
  },
  openGraph: {
    title: "Политика конфиденциальности | Гранд Отель & SPA Прибой",
    description: "Политика конфиденциальности Гранд Отель & SPA Прибой. Защита персональных данных, условия обработки информации, права пользователей.",
    url: "https://priboy-spa.ru/privacy",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Политика конфиденциальности Гранд Отель & SPA Прибой",
      },
    ],
    type: "website",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">Информация</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Политика конфиденциальности
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Защита персональных данных в Гранд Отель & SPA Прибой
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
                <p>
                  Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей веб-сайта Гранд Отель & SPA Прибой (далее — "Отель").
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">1. Общие положения</h2>
                <p>
                  Используя наш веб-сайт и услуги отеля, вы соглашаетесь с условиями настоящей Политики конфиденциальности. Мы обязуемся защищать ваши персональные данные в соответствии с требованиями законодательства Российской Федерации.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">2. Собираемые данные</h2>
                <p>Мы собираем следующие персональные данные:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Фамилия, имя, отчество</li>
                  <li>Контактные данные (телефон, email)</li>
                  <li>Паспортные данные (при бронировании)</li>
                  <li>Данные о бронировании (даты заезда/выезда, категория номера)</li>
                  <li>Технические данные (IP-адрес, cookies, данные браузера)</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">3. Цели обработки данных</h2>
                <p>Персональные данные обрабатываются для следующих целей:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Обработка бронирований и предоставление гостиничных услуг</li>
                  <li>Связь с клиентами по вопросам бронирования и обслуживания</li>
                  <li>Улучшение качества обслуживания</li>
                  <li>Отправка информационных материалов (с согласия клиента)</li>
                  <li>Соблюдение требований законодательства</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">4. Защита данных</h2>
                <p>
                  Мы применяем современные технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">5. Передача данных третьим лицам</h2>
                <p>
                  Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством, или когда это необходимо для предоставления услуг (например, платежным системам, системам бронирования).
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">6. Cookies</h2>
                <p>
                  Наш веб-сайт использует cookies для улучшения пользовательского опыта и сбора статистики. Вы можете отключить cookies в настройках вашего браузера, однако это может повлиять на функциональность сайта.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">7. Права пользователей</h2>
                <p>Вы имеете право:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Получать информацию о ваших персональных данных</li>
                  <li>Требовать исправления неточных данных</li>
                  <li>Требовать удаления ваших персональных данных</li>
                  <li>Отозвать согласие на обработку персональных данных</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">8. Контакты</h2>
                <p>
                  По всем вопросам, связанным с обработкой персональных данных, вы можете обращаться:
                </p>
                <ul className="list-none pl-0 space-y-2 mt-2">
                  <li>Email: <a href="mailto:booking@priboy-spa.ru" className="text-terracotta hover:underline font-medium">booking@priboy-spa.ru</a></li>
                  <li>Телефон: <a href="tel:+79883443333" className="text-terracotta hover:underline font-medium">+7 (988) 344-33-33</a></li>
                </ul>

                <p className="mt-8 text-sm text-muted-foreground">
                  Дата последнего обновления: {new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

