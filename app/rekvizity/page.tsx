import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HotelDocumentsDownload } from "@/components/hotel-documents-download"
import { Building2, CreditCard, FileText, ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { HOTEL_REGISTRY } from "@/lib/hotel-registry"

export const metadata: Metadata = {
  title: "Реквизиты | Гранд Отель & SPA Прибой — Лазаревское",
  description: "Банковские реквизиты и юридическая информация Гранд Отель & SPA Прибой. ИНН, КПП, ОГРН, расчетный счет. Контакты для получения актуальных реквизитов.",
  alternates: {
    canonical: "https://priboy-spa.ru/rekvizity",
  },
  openGraph: {
    title: "Реквизиты | Гранд Отель & SPA Прибой",
    description: "Банковские реквизиты и юридическая информация Гранд Отель & SPA Прибой. ИНН, КПП, ОГРН, расчетный счет. Контакты для получения актуальных реквизитов.",
    url: "https://priboy-spa.ru/rekvizity",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Реквизиты Гранд Отель & SPA Прибой",
      },
    ],
    type: "website",
  },
}

export default function RequisitesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">Информация</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Реквизиты
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Банковские реквизиты и юридическая информация Гранд Отель & SPA Прибой
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="bg-cream p-6 sm:p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <Building2 className="h-6 w-6 text-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Юридическая информация</h2>
                    <div className="space-y-3 text-base text-muted-foreground">
                      <p><strong className="text-foreground">Индивидуальный предприниматель:</strong> Тавадов Эдик Арташович</p>
                      <p><strong className="text-foreground">Юридический адрес:</strong> 354200, г. Сочи, п. Лазаревское, ул. Новая, 26</p>
                      <p><strong className="text-foreground">Почтовый адрес:</strong> 354200, г. Сочи, п. Лазаревское, ул. Калараша, 131</p>
                      <p><strong className="text-foreground">ИНН:</strong> 231802674402</p>
                      <p><strong className="text-foreground">ОГРН:</strong> 304231836500380</p>
                      <p className="mt-4 text-sm">
                        <strong className="text-foreground">Свидетельство о внесении в Единый государственный реестр индивидуальных предпринимателей:</strong><br />
                        записи об индивидуальном предпринимателе, зарегистрированном до 01 января 2004г. серии 23 № 003334651, выдано 30.12.2004г. Инспекцией МНС России по г. Сочи территориальный участок 2318 по Лазаревскому району.
                      </p>
                      <p className="mt-4"><strong className="text-foreground">ОКОПФ:</strong> 50102</p>
                      <p><strong className="text-foreground">ОКВЭД:</strong> 56.10</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cream-dark p-6 sm:p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <CreditCard className="h-6 w-6 text-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Банковские реквизиты</h2>
                    <div className="space-y-3 text-base text-muted-foreground">
                      <p><strong className="text-foreground">Расчетный счет:</strong> 40802810047860004917</p>
                      <p><strong className="text-foreground">Банк:</strong> «ЮЖНЫЙ» ПАО «БАНК УРАЛСИБ»</p>
                      <p><strong className="text-foreground">Корреспондентский счет:</strong> 30101810400000000700</p>
                      <p><strong className="text-foreground">БИК:</strong> 040349700</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="h-6 w-6 text-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Дополнительная информация</h2>
                    <div className="space-y-3 text-base text-muted-foreground">
                      <p><strong className="text-foreground">Рег. № ФСС:</strong> 2316527082 Филиал 16 ГУ – Краснодарского регионального отделения ФСС РФ</p>
                      <p><strong className="text-foreground">Рег. № ПФР:</strong> 033-022-016113 УФК по Краснодарскому краю (ГУ — Отделение Пенсионного фонда Российской Федерации по Краснодарскому краю)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="dokumenty" className="bg-white p-6 sm:p-8 border border-border scroll-mt-28">
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="h-6 w-6 text-terracotta flex-shrink-0 mt-1" />
                  <div className="w-full">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Классификация и документы для скачивания
                    </h2>
                    <p className="text-base text-muted-foreground mb-4">
                      {HOTEL_REGISTRY.objectFullName} — категория {HOTEL_REGISTRY.categoryLabel} (★★★).
                      Рег. № свидетельства {HOTEL_REGISTRY.certificateRegNumber}, действует до{" "}
                      {HOTEL_REGISTRY.certificateValidUntil}.{" "}
                      <a
                        href={HOTEL_REGISTRY.fsaCardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-terracotta font-medium hover:underline inline-flex items-center gap-1"
                      >
                        Карточка в ЕФИС
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </a>
                      . Подробнее — на странице{" "}
                      <Link href="/o-komplekse#dokumenty" className="text-terracotta font-medium hover:underline">
                        О комплексе
                      </Link>
                      .
                    </p>
                    <HotelDocumentsDownload variant="muted" />
                  </div>
                </div>
              </div>

              <div className="bg-cream p-6 sm:p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="h-6 w-6 text-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Контактная информация</h2>
                    <div className="space-y-3 text-base text-muted-foreground">
                      <p><strong className="text-foreground">Телефон:</strong> <a href="tel:+78622704507" className="text-terracotta hover:underline">(862) 270-45-07</a></p>
                      <p><strong className="text-foreground">Email бухгалтерии:</strong> <a href="mailto:priboy.buh00@mail.ru" className="text-terracotta hover:underline">priboy.buh00@mail.ru</a></p>
                      <p><strong className="text-foreground">Email для бронирования:</strong> <a href="mailto:booking@priboy-spa.ru" className="text-terracotta hover:underline">booking@priboy-spa.ru</a></p>
                      <p><strong className="text-foreground">Горячая линия:</strong> <a href="tel:+79883443333" className="text-terracotta hover:underline">+7 (988) 344-33-33</a></p>
                      <p><strong className="text-foreground">Адрес отеля:</strong> ул. Калараша, 131, п. Лазаревское, Большой Сочи</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

