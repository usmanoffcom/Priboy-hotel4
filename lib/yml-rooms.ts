/**
 * YML для подключения в Яндекс Бизнес → Рекламные материалы → «настройте YML-фид»:
 * https://yandex.ru/support/business-priority/ru/auto-prod-add-yml-fid.html
 * Разметка по справке Яндекс Маркета (YML):
 * https://yandex.ru/support/marketplace/ru/assortment/auto/yml
 */
import { rooms } from "@/lib/rooms-data"
import { minBreakfastPrices, minPansionPrices, type PriceCategory } from "@/lib/prices-data"

const SITE_URL = "https://priboy-spa.ru"
const SHOP_EMAIL = "booking@priboy-spa.ru"

const roomCategoryMap: Record<string, PriceCategory> = {
  standard: "standard",
  "standard-twin": "standard",
  "standard-deluxe": "deluxe",
  luxe: "luxe",
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

/**
 * Атрибут date у &lt;yml_catalog&gt;: RFC 3339 с часовым поясом (обязательно при передаче цен).
 * @see https://yandex.ru/support/marketplace/ru/assortment/auto/yml
 */
function ymlCatalogDateMoscow(): string {
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Moscow",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
  const parts = fmt.formatToParts(new Date())
  const v = (t: Intl.DateTimeFormatPart["type"]) => parts.find((p) => p.type === t)?.value ?? "00"
  return `${v("year")}-${v("month")}-${v("day")}T${v("hour")}:${v("minute")}:${v("second")}+03:00`
}

/**
 * YML для Яндекс Бизнес: упрощённый тип офера (&lt;name&gt;), без type=&quot;vendor.model&quot;.
 * Один оффер = один тип номера; &lt;price&gt; — минимум «только завтраки»; в &lt;description&gt; — также минимум пансиона.
 */
export function buildRoomsYml(): string {
  const breakfast = minBreakfastPrices()
  const pansion = minPansionPrices()
  const stamp = ymlCatalogDateMoscow()

  const offerBlocks = rooms
    .filter((r) => roomCategoryMap[r.id])
    .map((room) => {
      const cat = roomCategoryMap[room.id]
      const pb = breakfast[cat]
      const pp = pansion[cat]
      const url = `${SITE_URL}/rooms/${room.slug}`
      const picture = room.images[0] ?? ""
      const desc = [
        room.description,
        "",
        `Площадь ${room.size}, размещение до ${room.capacity} гостей.`,
        `Цена от ${pb.toLocaleString("ru-RU")} ₽ за номер в сутки (два взрослых) — минимум по сезону по тарифу с завтраками.`,
        `Полный пансион от ${pp.toLocaleString("ru-RU")} ₽ за номер в сутки — минимум по действующим периодам пансиона.`,
        "Дополнительные места и актуальные периоды уточняйте при бронировании.",
      ].join("\n")

      return `
    <offer id="${escapeXml(room.slug)}" available="true">
      <url>${escapeXml(url)}</url>
      <price>${pb}</price>
      <currencyId>RUR</currencyId>
      <categoryId>1</categoryId>
      <picture>${escapeXml(picture)}</picture>
      <name>${escapeXml(room.name)}</name>
      <description>${escapeXml(desc)}</description>
      <sales_notes>${escapeXml("Бронирование на сайте отеля или по телефону. Цена в фиде — минимальная по сезону 2026.")}</sales_notes>
      <param name="Площадь">${escapeXml(room.size)}</param>
      <param name="Вместимость">${escapeXml(room.capacity)}</param>
      <param name="Тариф (цена в фиде)">${escapeXml("С завтраками, мин. по сезону")}</param>
    </offer>`
    })
    .join("")

  return `<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog date="${escapeXml(stamp)}">
  <shop>
    <name>Гранд Отель и СПА «Прибой»</name>
    <company>Гранд Отель и СПА «Прибой», Лазаревское</company>
    <url>${SITE_URL}</url>
    <email>${SHOP_EMAIL}</email>
    <currencies>
      <currency id="RUR" rate="1"/>
    </currencies>
    <categories>
      <category id="1">Проживание, номера</category>
    </categories>
    <offers>${offerBlocks}
    </offers>
  </shop>
</yml_catalog>
`
}
