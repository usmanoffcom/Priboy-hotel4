import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingBenefits } from "@/components/booking-benefits"
import { TravellineBooking } from "@/components/travelline-booking"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSchema } from "@/components/faq-schema"
import { Phone, Mail, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Онлайн бронирование номеров | Гранд Отель & SPA Прибой",
  description: "Забронируйте номер в Гранд Отель & SPA Прибой в Лазаревском. Гарантия лучшей цены при бронировании напрямую. Выберите даты, тип номера и вариант питания.",
  alternates: {
    canonical: "https://priboy-spa.ru/booking",
  },
  openGraph: {
    title: "Онлайн бронирование номеров | Гранд Отель & SPA Прибой",
    description: "Забронируйте номер в Гранд Отель & SPA Прибой в Лазаревском. Гарантия лучшей цены при бронировании напрямую.",
    url: "https://priboy-spa.ru/booking",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Онлайн бронирование номеров в Гранд Отель & SPA Прибой",
      },
    ],
    type: "website",
  },
}

const bookingFAQs = [
  {
    question: "Как забронировать номер в отеле Прибой?",
    answer: "Вы можете забронировать номер онлайн через форму бронирования на сайте, позвонить по телефону +7 (988) 344-33-33, написать на email booking@priboy-spa.ru или связаться через WhatsApp.",
  },
  {
    question: "Какие условия заезда и выезда?",
    answer: "Заезд с 14:00, выезд до 12:00. Ранний заезд и поздний выезд доступны по запросу при наличии свободных номеров.",
  },
  {
    question: "Какие способы оплаты принимаются?",
    answer: "Предоплата вносится по счету за первые сутки проживания в течение трех дней после бронирования.",
  },
  {
    question: "Можно ли отменить бронирование?",
    answer: "В случае отмены бронирования менее 10 дней залог не возвратный, более 10 дней от суммы возвращается 50 %",
  },
  {
    question: "Есть ли скидки для детей?",
    answer: "Дети до 3-х лет размещаются бесплатно.",
  },
  {
    question: "Гарантирована ли лучшая цена при прямом бронировании?",
    answer: "Да, мы гарантируем лучшую цену при бронировании напрямую через наш сайт или по телефону. Если вы найдете более низкую цену на другом сайте, мы предоставим скидку.",
  },
]

export default function BookingPage() {
  return (
    <>
      <FAQSchema faqs={bookingFAQs} />
      <Header />
      <Breadcrumbs items={[{ label: "Бронирование" }]} />
      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">Онлайн бронирование</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Забронировать номер</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Выберите даты, тип номера и вариант питания. Гарантия лучшей цены при бронировании напрямую.
            </p>
          </div>
        </section>

        {/* Booking Widget Area */}
        <section className="py-12 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div id="tl-booking-form"></div>
            <TravellineBooking />
          </div>
        </section>

        {/* Benefits */}
        <BookingBenefits />

        {/* Contact Options */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-foreground mb-4">Нужна помощь с бронированием?</h2>
              <p className="text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <a
                href="tel:+79883443333"
                className="flex flex-col items-center p-8 bg-cream hover:bg-cream-dark transition-colors text-center group"
              >
                <div className="w-14 h-14 bg-terracotta/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-terracotta/20 transition-colors">
                  <Phone className="h-6 w-6 text-terracotta" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">Позвонить</h3>
                <p className="text-terracotta font-semibold">+7 (988) 344-33-33</p>
                <p className="text-sm text-muted-foreground mt-1">Круглосуточно</p>
              </a>

              <a
                href="mailto:booking@priboy-spa.ru"
                className="flex flex-col items-center p-8 bg-cream hover:bg-cream-dark transition-colors text-center group"
              >
                <div className="w-14 h-14 bg-terracotta/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-terracotta/20 transition-colors">
                  <Mail className="h-6 w-6 text-terracotta" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">Email</h3>
                <p className="text-terracotta font-semibold">booking@priboy-spa.ru</p>
                <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
              </a>

              <a
                href="https://wa.me/79883443333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 bg-cream hover:bg-cream-dark transition-colors text-center group"
              >
                <div className="w-14 h-14 bg-terracotta/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-terracotta/20 transition-colors">
                  <MessageCircle className="h-6 w-6 text-terracotta" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">WhatsApp</h3>
                <p className="text-terracotta font-semibold">Написать в чат</p>
                <p className="text-sm text-muted-foreground mt-1">Быстрые ответы</p>
              </a>
            </div>
          </div>
        </section>

        {/* Booking Terms */}
        <section className="py-16 bg-cream-dark">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-light text-foreground mb-8 text-center">Условия бронирования</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 border border-border">
                <h3 className="font-medium text-foreground mb-4">Заезд и выезд</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Заезд с 14:00</li>
                  <li>• Выезд до 12:00</li>
                  <li>• Ранний заезд / поздний выезд — по запросу</li>
                </ul>
              </div>
              <div className="bg-white p-6 border border-border">
                <h3 className="font-medium text-foreground mb-4">Оплата</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Предоплата вносится по счету за первые сутки проживания в течение трех дней после бронирования.</li>
                </ul>
              </div>
              <div className="bg-white p-6 border border-border">
                <h3 className="font-medium text-foreground mb-4">Отмена бронирования</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• В случае отмены бронирования менее 10 дней залог не возвратный, более 10 дней от суммы возвращается 50 %</li>
                </ul>
              </div>
              <div className="bg-white p-6 border border-border">
                <h3 className="font-medium text-foreground mb-4">Дополнительно</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Дети до 3-х лет бесплатно</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
