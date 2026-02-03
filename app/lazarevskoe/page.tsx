import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Sun, Waves, Mountain, TreePine, Utensils } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Лазаревское — курорт на Черном море | Гранд Отель & SPA Прибой",
  description: "Лазаревское — популярный курорт Большого Сочи. Пляжи, достопримечательности, развлечения, как добраться. Отдых в Лазаревском в Гранд Отель & SPA Прибой.",
  keywords: "Лазаревское, курорт, Черное море, отдых, пляжи, достопримечательности, Сочи, Краснодарский край",
  alternates: {
    canonical: "https://priboy-spa.ru/lazarevskoe",
  },
  openGraph: {
    title: "Лазаревское — курорт на Черном море | Гранд Отель & SPA Прибой",
    description: "Лазаревское — популярный курорт Большого Сочи. Пляжи, достопримечательности, развлечения.",
    url: "https://priboy-spa.ru/lazarevskoe",
    type: "website",
  },
}

const features = [
  {
    icon: Waves,
    title: "Чистое море",
    description: "Галечные пляжи с кристально чистой водой и пологим входом"
  },
  {
    icon: Sun,
    title: "300 солнечных дней",
    description: "Субтропический климат и длинный купальный сезон с мая по октябрь"
  },
  {
    icon: Mountain,
    title: "Горы Кавказа",
    description: "Живописные ущелья, водопады и реликтовые леса в шаговой доступности"
  },
  {
    icon: TreePine,
    title: "Природа",
    description: "Уникальная флора и фауна, заповедные территории"
  },
  {
    icon: Utensils,
    title: "Кавказская кухня",
    description: "Рестораны с местной кухней, свежие морепродукты"
  },
  {
    icon: MapPin,
    title: "Удобное расположение",
    description: "60 км от Сочи, развитая транспортная инфраструктура"
  }
]

const sections = [
  {
    title: "Достопримечательности",
    description: "Аквапарки, водопады, дольмены, музеи и другие интересные места",
    href: "/lazarevskoe/dostoprimechatelnosti",
    image: "/blog-attractions.jpg"
  },
  {
    title: "Пляжи Лазаревского",
    description: "Галечные и песчаные пляжи, дикие и благоустроенные",
    href: "/lazarevskoe/plyazhi",
    image: "/blog-lazarevskoe-beach.jpg"
  },
  {
    title: "Как добраться",
    description: "Маршруты из Москвы, Санкт-Петербурга и других городов",
    href: "/kak-dobratsya",
    image: "/blog-mountain-hiking.jpg"
  },
  {
    title: "Лазаревское летом",
    description: "Отдых в высокий сезон: пляжи, развлечения, экскурсии",
    href: "/lazarevskoe/letom",
    image: "/blog-family-vacation.jpg"
  },
  {
    title: "Лазаревское зимой",
    description: "Зимний отдых: SPA, экскурсии, поездки в Красную Поляну",
    href: "/lazarevskoe/zimoy",
    image: "/blog-winter-sea.jpg"
  }
]

export default function LazarevskoePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/fasad.png"
              alt="Лазаревское — курорт на Черном море"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">Курорт Большого Сочи</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 max-w-3xl">
              Лазаревское — жемчужина Черноморского побережья
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
              Живописный курортный поселок в окружении гор Кавказа с чистыми пляжами, 
              уникальными достопримечательностями и развитой инфраструктурой для отдыха
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8">
                <Link href="/booking">Забронировать отель</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-none px-8">
                <Link href="/lazarevskoe/dostoprimechatelnosti">Достопримечательности</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">О курорте</p>
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                  Лазаревское — идеальное место для отдыха
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Лазаревское — крупнейший курортный поселок в составе Большого Сочи, расположенный 
                  в 60 км от центра города. Мягкий субтропический климат, чистое море и окружение 
                  величественных гор Кавказа делают это место идеальным для отдыха в любое время года.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Курорт славится своими галечными пляжами, протянувшимися на 7 км вдоль побережья, 
                  а также множеством природных достопримечательностей: водопадами, ущельями, древними 
                  дольменами и реликтовыми лесами.
                </p>
                <ul className="space-y-3">
                  {[
                    "Население — около 30 000 человек",
                    "Купальный сезон — с мая по октябрь",
                    "Более 50 санаториев и отелей",
                    "2 аквапарка и дельфинарий"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <span className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src="/pool.JPG"
                  alt="Отдых в Лазаревском"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Преимущества</p>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">Почему выбирают Лазаревское</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 border border-border">
                  <feature.icon className="h-10 w-10 text-terracotta mb-4" />
                  <h3 className="text-xl font-medium text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sections Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Узнайте больше</p>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">Всё о Лазаревском</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, index) => (
                <Link
                  key={index}
                  href={section.href}
                  className="group relative overflow-hidden border border-border hover:border-terracotta transition-colors"
                >
                  <div className="relative h-48">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors" />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-terracotta transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{section.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Hotel CTA */}
        <section className="py-16 md:py-20 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-96">
                <Image
                  src="/lobby.png"
                  alt="Гранд Отель & SPA Прибой"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">Ваш отель в Лазаревском</p>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                  Гранд Отель & SPA Прибой
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  Современный отель в Лазаревском с собственным SPA-комплексом, 
                  бассейнами, рестораном и всей необходимой инфраструктурой для комфортного отдыха.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Открытый бассейн",
                    "SPA-комплекс: хаммам, сауны, бани",
                    "Ресторан с кавказской кухней",
                    "Трансфер до пляжа и обратно",
                    "Детская анимация"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80">
                      <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8">
                  <Link href="/booking">Забронировать номер</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

