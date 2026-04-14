import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/ui/page-hero"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { Phone, Waves, Leaf, Users, Star, ShieldCheck, ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import { HOTEL_REGISTRY } from "@/lib/hotel-registry"
import { HotelDocumentsDownload } from "@/components/hotel-documents-download"

export const metadata: Metadata = {
  title: "О комплексе | Гранд Отель & SPA Прибой — Лазаревское",
  description: "Гранд Отель и SPA Прибой в Лазаревском — лучший отель для семейного отдыха. Комфортабельные номера, SPA-комплекс, 2 бассейна, ресторан. Узнайте больше о нашем отеле.",
  alternates: {
    canonical: "https://priboy-spa.ru/o-komplekse",
  },
  openGraph: {
    title: "О комплексе | Гранд Отель & SPA Прибой",
    description: "Гранд Отель и SPA Прибой в Лазаревском — лучший отель для семейного отдыха с SPA-комплексом и бассейнами.",
    url: "https://priboy-spa.ru/o-komplekse",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "О комплексе Гранд Отель & SPA Прибой",
      },
    ],
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="О комплексе"
          title="Гранд Отель и SPA Прибой"
          description="Лучший отель в Лазаревском для семейного отдыха и комфортного отпуска"
        />

        {/* Main Content */}
        <Section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Добро пожаловать в <strong>Гранд Отель и SPA Прибой</strong> — лучший отель в Лазаревском, который идеально подходит для семейного отдыха, парного релакса и людей со средним достатком, ищущих комфорт за доступные цены. Расположенный в живописном курортном поселке Лазаревское (Большой Сочи), наш отель сочетает в себе современную инфраструктуру, высокий уровень сервиса и уникальные возможности для оздоровления и отдыха.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">Почему Гранд Отель Прибой — лучший отель в Лазаревском?</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Лазаревское — это жемчужина Черноморского побережья, известная своими чистыми пляжами, теплым климатом и потрясающими видами на Кавказские горы. Среди множества отелей в Лазаревском "Гранд Отель и SPA Прибой" заслуженно считается лучшим благодаря сочетанию комфорта, доступных цен и широкого спектра услуг. Мы предлагаем всё, что нужно для идеального отдыха: от стандартных бюджетных номеров до SPA-комплекса. На территории 2 открытых бассейна.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-10">Комфортабельные номера</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Мы гордимся нашими просторными и современными номерами, каждый из которых оснащен всем необходимым для комфортного пребывания. Минимальная площадь номера составляет от 28 м², что обеспечивает достаточно пространства для отдыха и релаксации. Балконы номеров предлагают захватывающие виды на горы или природу, позволяя нашим гостям наслаждаться красотой природы прямо из своего номера.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-10">Комплекс с 2-мя открытыми бассейнами</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                "Прибой SPA" — это отель в Лазаревском с собственным SPA-комплексом, который включает открытые бассейны с видом на город, идеально подходящие для плавания и релаксации.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-10">Идеально для семейного отдыха</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                "Гранд Отель и SPA Прибой" создан для семейного отдыха. Мы позаботились о том, чтобы и взрослые, и дети чувствовали себя комфортно:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground mb-6">
                <li>Детская анимация с 01.06 по 21.09, где проводятся ежедневные мероприятия для детей от 3 до 12 лет</li>
                <li>Безопасный пляж в 5 минутах ходьбы от отеля — мелкая галька, пологий вход в море и чистая вода</li>
                <li>Семейные номера с дополнительными спальными местами и возможностью установки детской кроватки</li>
                <li>Специальное детское меню в ресторане отеля</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-10">Свой SPA-комплекс в Лазаревском</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Одно из главных преимуществ "Гранд Отель и SPA Прибой" — это собственный SPA-комплекс, который делает нас лидером среди отелей Лазаревского. Наш SPA-центр предлагает релакс-зоны, сауны, хаммам и джакузи для полного расслабления.
              </p>
            </div>
          </div>
        </Section>

        {/* Features Grid */}
        <Section muted className="py-16">
          <SectionHeader title="Наши преимущества" centered className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Семейный отдых", description: "Идеально для семей с детьми" },
                { icon: Star, title: "Качество", description: "Высокий уровень сервиса" },
                { icon: Waves, title: "2 бассейна", description: "Для всей семьи" },
                { icon: Leaf, title: "SPA-комплекс", description: "5 видов бань и процедуры" },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 border border-border text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-cream-dark rounded-full">
                    <feature.icon className="h-6 w-6 text-terracotta" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
        </Section>

        <Section id="dokumenty" className="py-16 md:py-20 bg-white scroll-mt-28">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="h-8 w-8 text-terracotta flex-shrink-0" aria-hidden />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Классификация и официальные документы
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              В соответствии с законодательством РФ о туристской деятельности средство размещения прошло
              классификацию и включено в единый перечень классифицированных объектов туристской индустрии.
              Ниже — ключевые реквизиты из выписки и ссылки на подтверждающие документы (PDF).
            </p>
            <div className="bg-cream border border-border p-6 sm:p-8 mb-10 space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                <strong className="text-foreground">Объект:</strong> {HOTEL_REGISTRY.objectFullName}
              </p>
              <p>
                <strong className="text-foreground">Адрес:</strong> {HOTEL_REGISTRY.address}
              </p>
              <p>
                <strong className="text-foreground">Категория:</strong> {HOTEL_REGISTRY.categoryLabel} (★★★)
              </p>
              <p>
                <strong className="text-foreground">Регистрационный номер свидетельства:</strong>{" "}
                {HOTEL_REGISTRY.certificateRegNumber}
              </p>
              <p>
                <strong className="text-foreground">Дата выдачи свидетельства:</strong>{" "}
                {HOTEL_REGISTRY.certificateIssued}
              </p>
              <p>
                <strong className="text-foreground">Срок действия свидетельства:</strong> до{" "}
                {HOTEL_REGISTRY.certificateValidUntil}
              </p>
              <p>
                <strong className="text-foreground">Выписка из перечня:</strong> по состоянию на{" "}
                {HOTEL_REGISTRY.registryExcerptDate}
              </p>
              <p>
                <strong className="text-foreground">Лицо, оказывающее услуги:</strong> ИП{" "}
                {HOTEL_REGISTRY.providerName}
              </p>
              <p>
                <strong className="text-foreground">ИНН / ОГРНИП:</strong> {HOTEL_REGISTRY.inn} /{" "}
                {HOTEL_REGISTRY.ogrnip}
              </p>
              <p>
                <strong className="text-foreground">Аккредитованная организация:</strong>{" "}
                {HOTEL_REGISTRY.accreditorName}
              </p>
              <p>
                <a
                  href={HOTEL_REGISTRY.fsaCardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-terracotta font-medium hover:underline mt-2"
                >
                  Открыть карточку в ЕФИС Ростуризма
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </p>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Документы для скачивания</h3>
            <HotelDocumentsDownload variant="white" />
          </div>
        </Section>

        {/* CTA Section */}
        <section className="py-16 bg-terracotta">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Готовы забронировать номер?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для бронирования или получите консультацию по телефону
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="xl" variant="inverse" className="border-white bg-white text-terracotta hover:bg-cream hover:text-terracotta">
                <Link href="/booking">Забронировать номер</Link>
              </Button>
              <a
                href="tel:+79883443333"
                className="flex items-center gap-2 text-white hover:text-cream transition-colors text-lg font-medium"
              >
                <Phone className="h-5 w-5" />
                +7 (988) 344-33-33
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

