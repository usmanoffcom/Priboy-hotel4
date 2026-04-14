/**
 * Сведения из выписки единого перечня классифицированных гостиниц (ЕФИС Ростуризма)
 * и карточки объекта на tourism.fsa.gov.ru. Обновлять при смене категории / продлении.
 */
export const HOTEL_REGISTRY = {
  objectFullName: "Гостиница «Grand Hotel&Spa Прибой»",
  address:
    "354200, Россия, Краснодарский край, г. Сочи, Лазаревский район, ул. Калараша, 131",
  categoryLabel: "три звезды",
  certificateRegNumber: "23/АА-026-2022/57-2024",
  certificateIssued: "30.05.2024",
  certificateValidUntil: "30.05.2027",
  registryExcerptDate: "05.06.2024",
  accreditorName: 'ООО «Азбука звёзд»',
  inn: "231802674402",
  ogrnip: "304231836500380",
  providerName: "Тавадов Эдик Арташович",
  /** Карточка средства размещения в ЕФИС */
  fsaCardUrl:
    "https://tourism.fsa.gov.ru/ru/resorts/hotels/209f5b96-c607-11ef-92da-d10ff8b1c09f/about-resort",
  /** Идентификатор записи на карточке самооценки (реестр) */
  registryRecordCode: "C232024002702",
} as const

export type HotelRegistryDocument = {
  fileName: string
  title: string
  description: string
}

/** PDF в public/docs/ — имена файлов как на диске */
export const HOTEL_REGISTRY_DOCUMENTS: HotelRegistryDocument[] = [
  {
    fileName: "Выписка.pdf",
    title: "Выписка из единого перечня классифицированных гостиниц",
    description:
      "Сведения о включении объекта в перечень по состоянию на 05.06.2024: наименование, адрес, категория, реквизиты свидетельства.",
  },
  {
    fileName: "Выписка Самооценка Калараша.pdf",
    title: "Сведения об объекте (самооценка / карточка в реестре)",
    description:
      "Данные для реестра классифицированных средств размещения: объект, адрес, категория, контакты, ссылка на карточку в ЕФИС.",
  },
  {
    fileName: "Свидетельство.pdf",
    title: "Свидетельство о присвоении категории",
    description: "Скан свидетельства аккредитованной организации о присвоении категории «три звезды».",
  },
  {
    fileName: "категория.pdf",
    title: "Документ о категории объекта",
    description: "Скан документа, подтверждающего присвоение категории средству размещения.",
  },
]

export function hotelDocumentHref(fileName: string): string {
  return encodeURI(`/docs/${fileName}`)
}
