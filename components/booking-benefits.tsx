import { Shield, Percent, Gift, Clock } from "lucide-react"

const benefits = [
  {
    icon: Percent,
    title: "Лучшая цена",
    description: "Гарантируем самую низкую цену при бронировании напрямую на сайте",
  },
  {
    icon: Gift,
    title: "Бонусы гостям",
    description: "Бесплатный доступ к SPA-комплексу и приветственный напиток",
  },
  {
    icon: Shield,
    title: "Безопасность",
    description: "Защищённое соединение и безопасная обработка платежей",
  },
  {
    icon: Clock,
    title: "Гибкие условия",
    description: "Возврат 50% при отмене более 10 дней до заезда",
  },
]

export function BookingBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-light text-foreground mb-10 text-center">Преимущества прямого бронирования</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-cream-dark rounded-full mb-4">
                <benefit.icon className="h-6 w-6 text-terracotta" />
              </div>
              <h3 className="font-medium text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
