import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { SiteCard } from "@/components/ui/site-card"

const features = [
  {
    image: "/slides/3.jpg",
    title: "2 бассейна",
    description: "Открытый и крытый бассейны для всей семьи. Идеальное место для плавания и отдыха с видом на город.",
    href: "/uslugi/basseyn",
  },
  {
    image: "/spa.jpg",
    title: "SPA-комплекс",
    description: "5 видов бань, бассейн с подогревом и зоны релаксации. Полное погружение в мир расслабления и оздоровления в центре Лазаревского.",
    href: "/spa",
  },
  {
    image: "/avenue.jpg",
    title: "Ресторан",
    description: "Европейская и кавказская кухня, свежие морепродукты. Живая музыка и шоу-программа по вечерам.",
    href: "/restaurant",
  },
  {
    image: "/shizlong.jpg",
    title: "Шезлонги на пляже",
    description: "Для гостей отеля на центральном пляже оборудована комфортная зона отдыха с шезлонгами и зонтиками.",
    href: "/uslugi/shezlongi-na-plyazhe",
  },
  {
    image: "/parcing.jpg",
    title: "Подземная парковка",
    description: "Бесплатная охраняемая подземная парковка для гостей отеля. Безопасное хранение вашего автомобиля.",
    href: "/uslugi/podzemnaya-parkovka",
  },
  {
    image: "/terassa.jpg",
    title: "Терраса",
    description: "Крытая летняя терраса, где проходят завтраки, обеды и ужины по системе «шведский стол».",
    href: "/restaurant",
  },
  {
    image: "/transfer.jpg",
    title: "Трансфер до пляжа",
    description: "Бесплатный трансфер на центральный пляж по расписанию — быстро доберётесь до моря и вернётесь в отель.",
    href: "/uslugi/transfer-na-plyazh",
  },
  {
    image: "/animations/telegram-cloud-photo-size-2-5409057872894693404-y.jpg",
    title: "Детская анимация",
    description: "Профессиональные аниматоры, ежедневные программы, мастер-классы и игры для детей. Яркий отдых для маленьких гостей в летний сезон.",
    href: "/uslugi/detskaya-animatsiya",
  },
]

export function FeaturesSection() {
  return (
    <Section muted className="py-20 sm:py-24">
      <SectionHeader eyebrow="Удобства" title="Всё для вашего комфорта" centered className="mb-12 sm:mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <SiteCard key={index} className="group overflow-hidden">
            <Link href={feature.href} className="block">
              <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground group-hover:text-terracotta transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            </Link>
          </SiteCard>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="brand" className="px-8 py-6 text-base">
          <Link href="/uslugi">
            Все услуги отеля
          </Link>
        </Button>
      </div>
    </Section>
  )
}
