import Image from "next/image"
import Link from "next/link"

const features = [
  {
    image: "/slides/3.png",
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
    image: "/parcing.png",
    title: "Подземная парковка",
    description: "Бесплатная охраняемая подземная парковка для гостей отеля. Безопасное хранение вашего автомобиля.",
    href: "/uslugi/podzemnaya-parkovka",
  },
  {
    image: "/terassa.png",
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
]

export function FeaturesSection() {
  return (
    <section className="py-20 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-terracotta mb-4 font-medium">Удобства</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">Всё для вашего комфорта</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="bg-white border border-border hover:shadow-xl hover:border-terracotta transition-all duration-300 overflow-hidden group block"
            >
              <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground group-hover:text-terracotta transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/uslugi"
            className="inline-flex items-center justify-center px-8 py-4 bg-terracotta hover:bg-terracotta-light text-white font-medium rounded-none transition-colors"
          >
            Все услуги отеля
          </Link>
        </div>
      </div>
    </section>
  )
}
