/** Сезонные цены за номер в сутки (2 взрослых), ₽ — источник: страница /prices */

export type SeasonPriceRow = {
  period: string
  standard: number
  deluxe: number
  luxe: number
}

export const pricesBreakfast: SeasonPriceRow[] = [
  { period: "9.01 – 30.04.2026", standard: 6400, deluxe: 7250, luxe: 8900 },
  { period: "1.05 – 31.05.2026", standard: 7700, deluxe: 8700, luxe: 10400 },
  { period: "1.06 – 10.06.2026", standard: 7700, deluxe: 8700, luxe: 10400 },
  { period: "11.06 – 30.06.2026", standard: 9500, deluxe: 11500, luxe: 14500 },
  { period: "1.07 – 31.07.2026", standard: 11500, deluxe: 13500, luxe: 16000 },
  { period: "1.08 – 31.08.2026", standard: 13500, deluxe: 16500, luxe: 20000 },
  { period: "1.09 – 20.09.2026", standard: 9800, deluxe: 11800, luxe: 15000 },
  { period: "21.09 – 30.09.2026", standard: 8000, deluxe: 9000, luxe: 12500 },
]

export const pricesPansion: SeasonPriceRow[] = [
  { period: "1.06 – 10.06.2026", standard: 11700, deluxe: 12700, luxe: 14400 },
  { period: "11.06 – 30.06.2026", standard: 13500, deluxe: 15500, luxe: 18500 },
  { period: "1.07 – 31.07.2026", standard: 15500, deluxe: 17500, luxe: 20000 },
  { period: "1.08 – 31.08.2026", standard: 17500, deluxe: 20500, luxe: 24000 },
  { period: "1.09 – 20.09.2026", standard: 13800, deluxe: 15800, luxe: 19000 },
]

function minColumn(rows: SeasonPriceRow[], key: keyof Pick<SeasonPriceRow, "standard" | "deluxe" | "luxe">) {
  return Math.min(...rows.map((r) => r[key]))
}

/** Минимальные цены по тарифу «только завтраки» за сезон (для фидов, «от … ₽»). */
export function minBreakfastPrices() {
  return {
    standard: minColumn(pricesBreakfast, "standard"),
    deluxe: minColumn(pricesBreakfast, "deluxe"),
    luxe: minColumn(pricesBreakfast, "luxe"),
  }
}

/** Минимальные цены по полному пансиону (где действует тариф). */
export function minPansionPrices() {
  return {
    standard: minColumn(pricesPansion, "standard"),
    deluxe: minColumn(pricesPansion, "deluxe"),
    luxe: minColumn(pricesPansion, "luxe"),
  }
}

export type PriceCategory = keyof ReturnType<typeof minBreakfastPrices>

export const extraBreakfast = [
  { age: "От 7 лет", price: "2 500 ₽" },
  { age: "4–6 лет", price: "1 800 ₽" },
  { age: "До 3 лет", price: "Бесплатно" },
] as const

export const extraPansion = [
  { age: "От 7 лет", price: "3 800 ₽" },
  { age: "4–6 лет", price: "2 500 ₽" },
  { age: "До 3 лет", price: "Бесплатно" },
] as const

export const pansionIncludes = [
  "Завтраки, обеды, ужины (шведский стол)",
  "Пользование бассейном",
  "Мини-аквапарк",
  "Лежаки на набережной",
  "Трансфер до набережной",
  "Посещение SPA-комплекса",
  "Бесплатная парковка",
] as const
