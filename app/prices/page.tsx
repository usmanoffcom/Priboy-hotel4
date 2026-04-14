import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Info } from "lucide-react"
import type { Metadata } from "next"
import { PageHero } from "@/components/ui/page-hero"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import {
  extraBreakfast,
  extraPansion,
  pansionIncludes,
  pricesBreakfast,
  pricesPansion,
} from "@/lib/prices-data"

export const metadata: Metadata = {
  title: "Цены на номера | Гранд Отель & SPA Прибой — Лазаревское",
  description: "Актуальные цены на номера в отеле Прибой в Лазаревском. Цены с завтраками и полным пансионом по сезонам. Стоимость дополнительных услуг, детские цены.",
  alternates: {
    canonical: "https://priboy-spa.ru/prices",
  },
  openGraph: {
    title: "Цены на номера | Гранд Отель & SPA Прибой",
    description: "Актуальные цены на номера в отеле Прибой в Лазаревском. Цены с завтраками и полным пансионом по сезонам.",
    url: "https://priboy-spa.ru/prices",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Цены на номера в Гранд Отель & SPA Прибой",
      },
    ],
    type: "website",
  },
}

function formatPrice(price: number) {
  return price.toLocaleString("ru-RU") + " ₽"
}

export default function PricesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Тарифы 2026"
          title="Цены на проживание"
          description="Актуальные цены на 2026 год. Стоимость указана за номер в сутки для двух взрослых."
        />

        {/* Tax Notice */}
        <section className="py-4 bg-amber-50 border-b border-amber-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-3 text-sm text-amber-800">
              <Info className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <p>
                С 1 января 2025 года на территории РФ действует туристический налог в соответствии с изменениями в
                Налоговом кодексе РФ (глава 33.1 «Туристический налог»), внесенными Федеральным законом от 12.07.2024
                №176-ФЗ – Входит в стоимость проживания
              </p>
            </div>
          </div>
        </section>

        {/* Prices Tables */}
        <Section muted className="py-16">
            <Tabs defaultValue="breakfast" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 rounded-none h-auto">
                <TabsTrigger
                  value="breakfast"
                  className="rounded-none py-3 text-base data-[state=active]:bg-terracotta data-[state=active]:text-white"
                >
                  Только завтраки
                </TabsTrigger>
                <TabsTrigger
                  value="pansion"
                  className="rounded-none py-3 text-base data-[state=active]:bg-forest data-[state=active]:text-white"
                >
                  Полный пансион
                </TabsTrigger>
              </TabsList>

              {/* Breakfast Tab */}
              <TabsContent value="breakfast">
                <div className="bg-white border border-border overflow-hidden">
                  {/* Header */}
                  <div className="grid grid-cols-4 bg-foreground text-white">
                    <div className="p-4 text-sm font-medium">Период</div>
                    <div className="p-4 text-sm font-medium text-center">
                      Стандарт
                      <br />
                      <span className="text-xs opacity-70">28 м², 2+1</span>
                    </div>
                    <div className="p-4 text-sm font-medium text-center">
                      Стандарт DeLuxe
                      <br />
                      <span className="text-xs opacity-70">45 м², 2+2</span>
                    </div>
                    <div className="p-4 text-sm font-medium text-center">
                      Luxe
                      <br />
                      <span className="text-xs opacity-70">65 м², 2+3</span>
                    </div>
                  </div>
                  {/* Rows */}
                  {pricesBreakfast.map((row, index) => (
                    <div key={index} className={`grid grid-cols-4 ${index % 2 === 0 ? "bg-cream" : "bg-white"}`}>
                      <div className="p-4 text-sm text-foreground font-medium">{row.period}</div>
                      <div className="p-4 text-center text-terracotta font-semibold">{formatPrice(row.standard)}</div>
                      <div className="p-4 text-center text-terracotta font-semibold">{formatPrice(row.deluxe)}</div>
                      <div className="p-4 text-center text-terracotta font-semibold">{formatPrice(row.luxe)}</div>
                    </div>
                  ))}
                </div>

                {/* Extra persons */}
                <div className="mt-8 bg-white border border-border p-6">
                  <h3 className="text-lg font-medium text-foreground mb-4">Дополнительные места</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {extraBreakfast.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-cream">
                        <span className="text-muted-foreground">{item.age}</span>
                        <span className="font-semibold text-foreground">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Full Pansion Tab */}
              <TabsContent value="pansion">
                <div className="bg-white border border-border overflow-hidden">
                  {/* Header */}
                  <div className="grid grid-cols-4 bg-forest text-white">
                    <div className="p-4 text-sm font-medium">Период</div>
                    <div className="p-4 text-sm font-medium text-center">
                      Стандарт
                      <br />
                      <span className="text-xs opacity-70">28 м², 2+1</span>
                    </div>
                    <div className="p-4 text-sm font-medium text-center">
                      Стандарт DeLuxe
                      <br />
                      <span className="text-xs opacity-70">45 м², 2+2</span>
                    </div>
                    <div className="p-4 text-sm font-medium text-center">
                      Luxe
                      <br />
                      <span className="text-xs opacity-70">65 м², 2+3</span>
                    </div>
                  </div>
                  {/* Rows */}
                  {pricesPansion.map((row, index) => (
                    <div key={index} className={`grid grid-cols-4 ${index % 2 === 0 ? "bg-cream" : "bg-white"}`}>
                      <div className="p-4 text-sm text-foreground font-medium">{row.period}</div>
                      <div className="p-4 text-center text-forest font-semibold">{formatPrice(row.standard)}</div>
                      <div className="p-4 text-center text-forest font-semibold">{formatPrice(row.deluxe)}</div>
                      <div className="p-4 text-center text-forest font-semibold">{formatPrice(row.luxe)}</div>
                    </div>
                  ))}
                </div>

                {/* What's included */}
                <div className="mt-8 bg-forest/5 border border-forest/20 p-6">
                  <h3 className="text-lg font-medium text-foreground mb-4">В тариф «Полный пансион» входит:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {pansionIncludes.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-forest flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extra persons */}
                <div className="mt-8 bg-white border border-border p-6">
                  <h3 className="text-lg font-medium text-foreground mb-4">Дополнительные места</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {extraPansion.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-cream">
                        <span className="text-muted-foreground">{item.age}</span>
                        <span className="font-semibold text-foreground">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
        </Section>

        {/* Room Categories */}
        <Section className="py-16 bg-white">
          <SectionHeader title="Категории номеров" centered className="mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="aspect-[4/3] mb-4 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/c6NQrK4SIYumtqAnXJObbnEoBY.jpg"
                    alt="Стандарт"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">Стандарт</h3>
                <p className="text-sm text-muted-foreground mb-2">28 м² • Вместимость: 2+1</p>
                <p className="text-sm text-muted-foreground">1 большая кровать + кресло-кровать</p>
              </div>
              <div className="text-center">
                <div className="aspect-[4/3] mb-4 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/pVhtXR5qLzVVjPdBAxZ1FIlHgY.jpg"
                    alt="Стандарт DeLuxe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">Стандарт DeLuxe</h3>
                <p className="text-sm text-muted-foreground mb-2">45 м² • Вместимость: 2+2</p>
                <p className="text-sm text-muted-foreground">1 большая кровать + двуспальный диван</p>
              </div>
              <div className="text-center">
                <div className="aspect-[4/3] mb-4 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/s5VenDxFX6NIwLYNjhx2aWDMces.jpg"
                    alt="Luxe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">Luxe</h3>
                <p className="text-sm text-muted-foreground mb-2">65 м² • Вместимость: 2+3</p>
                <p className="text-sm text-muted-foreground">2 комнаты: кровать + диван + кресло-кровать</p>
              </div>
            </div>
        </Section>

        {/* CTA */}
        <section className="py-16 bg-foreground text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light text-white mb-6">Готовы забронировать?</h2>
            <p className="text-white/80 mb-8 leading-relaxed">Забронируйте номер онлайн с гарантией лучшей цены</p>
            <Button asChild size="xl" variant="brand" className="px-10">
              <Link href="/booking">Забронировать номер</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
