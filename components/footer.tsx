import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ChevronRight, Clock, Bed, Waves, UtensilsCrossed, Sparkles, Building2, FileText, Users, Hotel, Compass, Mountain, Umbrella, Map, Sun, Snowflake } from "lucide-react"
import { TextLink } from "@/components/ui/text-link"
import { HOTEL_REGISTRY } from "@/lib/hotel-registry"

const hotelLinks = [
  { name: "Номера", href: "/rooms", icon: Bed },
  { name: "SPA-комплекс", href: "/spa", icon: Sparkles },
  { name: "Ресторан", href: "/restaurant", icon: UtensilsCrossed },
  { name: "Услуги", href: "/uslugi", icon: Users },
  { name: "Об отеле", href: "/o-komplekse", icon: Building2 },
  { name: "Реквизиты", href: "/rekvizity", icon: FileText },
  { name: "Контакты", href: "/contacts", icon: Phone },
]

const lazarevskoeLinks = [
  { name: "Отели в Лазаревское", href: "/oteli-lazarevskoe", icon: Hotel },
  { name: "О курорте", href: "/lazarevskoe", icon: Compass },
  { name: "Достопримечательности", href: "/lazarevskoe/dostoprimechatelnosti", icon: Mountain },
  { name: "Пляжи", href: "/lazarevskoe/plyazhi", icon: Umbrella },
  { name: "Как добраться", href: "/kak-dobratsya", icon: Map },
  { name: "Летом", href: "/lazarevskoe/letom", icon: Sun },
  { name: "Зимой", href: "/lazarevskoe/zimoy", icon: Snowflake },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-10">
          {/* Navigation */}
          <div>
            <h4 className="text-xs sm:text-sm tracking-[0.15em] uppercase mb-6 sm:mb-8 text-cream/70 font-semibold">Отель</h4>
            <ul className="pl-0 space-y-3 sm:space-y-4">
              {hotelLinks.map((item) => (
                <li key={item.name}>
                  <TextLink
                    href={item.href}
                    className="group flex w-fit items-center gap-2.5 text-cream/80 hover:text-cream text-sm sm:text-base transition-colors duration-300"
                  >
                    <item.icon className="h-4 w-4 text-gold/70 group-hover:text-gold flex-shrink-0 transition-colors duration-300" />
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold/50 after:transition-all after:duration-300 group-hover:after:w-full">{item.name}</span>
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Lazarevskoe */}
          <div>
            <h4 className="text-xs sm:text-sm tracking-[0.15em] uppercase mb-6 sm:mb-8 text-cream/70 font-semibold">Лазаревское</h4>
            <ul className="pl-0 space-y-3 sm:space-y-4">
              {lazarevskoeLinks.map((item) => (
                <li key={item.name}>
                  <TextLink
                    href={item.href}
                    className="group flex w-fit items-center gap-2.5 text-cream/80 hover:text-cream text-sm sm:text-base transition-colors duration-300"
                  >
                    <item.icon className="h-4 w-4 text-gold/70 group-hover:text-gold flex-shrink-0 transition-colors duration-300" />
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold/50 after:transition-all after:duration-300 group-hover:after:w-full">{item.name}</span>
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-sm tracking-[0.15em] uppercase mb-6 sm:mb-8 text-cream/70 font-semibold">Контакты</h4>
            <ul className="space-y-4 sm:space-y-5 pl-0">
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
            <ul className="pl-0 space-y-3 sm:space-y-4 text-cream/90 text-sm sm:text-base">
              {[
                { label: "Ресепшн", time: "круглосуточно" },
                { label: "SPA", time: "17:00 – 20:00" },
                { label: "Ресторан", time: "08:00 – 23:00" },
                { label: "Крытый бассейн", time: "11:00 – 20:00" },
                { label: "Открытый бассейн", time: "09:00 – 21:00" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 mt-0.5 text-gold/70 flex-shrink-0" />
                  <span>
                    <span className="font-medium">{item.label}</span>
                    <br />
                    <span className="text-cream/60 text-xs sm:text-sm">{item.time}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 h-fit w-full min-w-0 pt-8 border-t border-white/10">
          <p className="box-border block h-fit min-h-0 min-w-0 w-full max-w-full mx-0 align-top text-[11px] leading-relaxed text-cream/55 text-center sm:text-left sm:text-xs">
            {HOTEL_REGISTRY.objectFullName} включена в единый перечень классифицированных средств размещения
            (ЕФИС Ростуризма). Категория: {HOTEL_REGISTRY.categoryLabel} (★★★). Регистрационный номер
            свидетельства: {HOTEL_REGISTRY.certificateRegNumber}. Срок действия свидетельства: до{" "}
            {HOTEL_REGISTRY.certificateValidUntil}. ИНН {HOTEL_REGISTRY.inn}, ОГРНИП {HOTEL_REGISTRY.ogrnip}.{" "}
            <a
              href={HOTEL_REGISTRY.fsaCardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline h-fit w-fit align-top text-gold/90 underline underline-offset-2 hover:text-gold"
            >
              Карточка в реестре
            </a>
            {" · "}
            <TextLink href="/o-komplekse#dokumenty" className="inline-flex h-fit w-fit text-gold/90 hover:text-gold">
              Документы для скачивания
            </TextLink>
            {" · "}
            <TextLink href="/rekvizity#dokumenty" className="inline-flex h-fit w-fit text-gold/90 hover:text-gold">
              Документы в разделе «Реквизиты»
            </TextLink>
          </p>
        </div>

        <div className="mt-8 mb-8 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-start">
          <p className="mb-0 w-full text-center text-xs text-cream/60 sm:w-auto sm:text-left sm:text-sm">
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
          <div className="flex h-fit w-full flex-nowrap items-end justify-end gap-4 tracking-normal text-xs text-cream/60 sm:ml-auto sm:w-auto sm:text-sm">
            <TextLink
              href="/privacy"
              className="h-fit w-full items-start justify-start text-cream/60 hover:text-cream font-medium"
            >
              Политика конфиденциальности
            </TextLink>
            <TextLink href="/pravila-prozhivaniya" className="text-cream/60 hover:text-cream font-medium">
              Условия бронирования
            </TextLink>
            <TextLink href="/otmena-bronirovaniya" className="text-cream/60 hover:text-cream font-medium">
              Отмена бронирования
            </TextLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
