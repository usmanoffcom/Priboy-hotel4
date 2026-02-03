import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Анна М.",
    text: "Прекрасный отель! SPA-комплекс просто восхитительный, а персонал очень внимательный. Обязательно вернёмся!",
    rating: 5,
    date: "Октябрь 2024",
  },
  {
    name: "Дмитрий К.",
    text: "Отдыхали всей семьей. Дети в восторге от аквапарка, а мы наслаждались банями и массажем. Рекомендую!",
    rating: 5,
    date: "Сентябрь 2024",
  },
  {
    name: "Елена С.",
    text: "Номер с видом на город превзошёл ожидания. Завтраки отличные, всё свежее и разнообразное.",
    rating: 5,
    date: "Август 2024",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Отзывы</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">Что говорят гости</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-cream border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-lg italic">"{testimonial.text}"</p>
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">{testimonial.name}</span>
                <span className="text-sm text-muted-foreground">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
