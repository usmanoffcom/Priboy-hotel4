import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-10">
          {/* Navigation */}
          <div>
            <h4 className="text-xs sm:text-sm tracking-[0.15em] uppercase mb-6 sm:mb-8 text-cream/70 font-semibold">Отель</h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: "Номера", href: "/rooms" },
                { name: "SPA-комплекс", href: "/spa" },
                { name: "Ресторан", href: "/restaurant" },
                { name: "Услуги", href: "/uslugi" },
                { name: "Об отеле", href: "/o-komplekse" },
                { name: "Контакты", href: "/contacts" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-cream/90 hover:text-cream transition-colors text-sm sm:text-base font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lazarevskoe */}
          <div>
            <h4 className="text-xs sm:text-sm tracking-[0.15em] uppercase mb-6 sm:mb-8 text-cream/70 font-semibold">Лазаревское</h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: "Отели в Лазаревское", href: "/oteli-lazarevskoe" },
                { name: "О курорте", href: "/lazarevskoe" },
                { name: "Достопримечательности", href: "/lazarevskoe/dostoprimechatelnosti" },
                { name: "Пляжи", href: "/lazarevskoe/plyazhi" },
                { name: "Как добраться", href: "/kak-dobratsya" },
                { name: "Летом", href: "/lazarevskoe/letom" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-cream/90 hover:text-cream transition-colors text-sm sm:text-base font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-sm tracking-[0.15em] uppercase mb-6 sm:mb-8 text-cream/70 font-semibold">Контакты</h4>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex items-start gap-3 sm:gap-4">
                <Phone className="h-5 w-5 mt-0.5 text-gold flex-shrink-0" />
                <div>
                  <a href="tel:+79883443333" className="text-cream/90 hover:text-cream transition-colors block text-sm sm:text-base font-medium">
                    +7 (988) 344-33-33
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <Mail className="h-5 w-5 mt-0.5 text-gold flex-shrink-0" />
                <a href="mailto:booking@priboy-spa.ru" className="text-cream/90 hover:text-cream transition-colors text-sm sm:text-base font-medium break-all">
                  booking@priboy-spa.ru
                </a>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <MapPin className="h-5 w-5 mt-0.5 text-gold flex-shrink-0" />
                <span className="text-cream/90 text-sm sm:text-base leading-relaxed">
                  Краснодарский край, Сочи,
                  <br />
                  пос. Лазаревское
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs sm:text-sm tracking-[0.15em] uppercase mb-6 sm:mb-8 text-cream/70 font-semibold">Режим работы</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-cream/90 text-sm sm:text-base">
              <li className="font-medium">Ресепшн: <span className="font-normal">круглосуточно</span></li>
              <li className="font-medium">SPA: <span className="font-normal">17:00 – 20:00</span></li>
              <li className="font-medium">Ресторан: <span className="font-normal">08:00 – 23:00</span></li>
              <li className="font-medium">Крытый бассейн: <span className="font-normal">11:00 – 20:00</span></li>
              <li className="font-medium">Открытый бассейн: <span className="font-normal">09:00 – 21:00 (летнее время)</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 pt-8 sm:pt-10 border-t border-cream/20 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-cream/60 text-center sm:text-left">
            © {new Date().getFullYear()} Гранд Отель & SPA Прибой. Все права защищены.{" "}
            <a
              href="https://yappix.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              Разработка сайтов
            </a>
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-cream/60 justify-center sm:justify-end">
            <Link href="/privacy" className="hover:text-cream transition-colors font-medium">
              Политика конфиденциальности
            </Link>
            <Link href="/pravila-prozhivaniya" className="hover:text-cream transition-colors font-medium">
              Условия бронирования
            </Link>
            <Link href="/otmena-bronirovaniya" className="hover:text-cream transition-colors font-medium">
              Отмена бронирования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
