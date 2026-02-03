export interface Room {
  id: string
  slug: string
  name: string
  shortName: string
  description: string
  fullDescription: string
  priceBreakfast: string
  priceFull: string
  size: string
  capacity: string
  beds: string
  view: string
  images: string[]
  amenities: string[]
}

export const rooms: Room[] = [
  {
    id: "standard",
    slug: "standartniy-nomer",
    name: "Стандартный номер",
    shortName: "Стандарт",
    description:
      "В номере одна большая кровать, дополнительно в номере предусмотрено кресло-кровать. Вместимость номера: 2 взрослых и 1 ребенок.",
    fullDescription:
      "В номере одна большая кровать, дополнительно в номере предусмотрено кресло-кровать. Вместимость номера: 2 взрослых и 1 ребенок. Обязательно предусмотрено наличие балкона с видом на город или бассейн. В номере есть телевизор, холодильник, фен, сейф, чайная станция, питьевая вода, два халата, полотенца, тапочки, косметический набор, ежедневная уборка, рум сервис бесплатно. Отель расположен в удобном географическом расположении, в пешей доступности необходимая инфраструктура с аптеками, магазинами, и многим другим.",
    priceBreakfast: "от 7 100 ₽",
    priceFull: "от 11 700 ₽",
    size: "28 м²",
    capacity: "2 + 1",
    beds: "1 большая кровать + кресло-кровать",
    view: "Город / Бассейн",
    images: [
      "https://framerusercontent.com/images/c6NQrK4SIYumtqAnXJObbnEoBY.jpg",
      "https://framerusercontent.com/images/nkwEcEn9aZwLjE5YhbSOs3NEdcM.jpg",
      "https://framerusercontent.com/images/lkabUHbkLzx0r14IVCtgUEWVlzA.jpg",
      "https://framerusercontent.com/images/GjdIPzEFBlSnystqz5wRQMfLYk.jpg",
      "https://framerusercontent.com/images/KvYuPmnyjVMYDkj5N9QY0La0.jpg",
      "https://framerusercontent.com/images/Eetnf53pXuW87IYRP9UKvO6jiY.jpg",
    ],
    amenities: [
      "Балкон",
      "Кондиционер",
      "Телевизор",
      "Холодильник",
      "Фен",
      "Сейф",
      "Чайная станция",
      "Халат и тапочки",
      "Косметический набор",
      "Ежедневная уборка",
    ],
  },
  {
    id: "standard-twin",
    slug: "standartniy-nomer-twin",
    name: "Стандартный номер Twin",
    shortName: "Стандарт Twin",
    description:
      "В номере две раздельные кровати, дополнительно в номере предусмотрено кресло-кровать. Вместимость номера: 2 взрослых и 1 ребенок.",
    fullDescription:
      "В номере две раздельные кровати, дополнительно в номере предусмотрено кресло-кровать. Вместимость номера: 2 взрослых и 1 ребенок. Обязательно предусмотрено наличие балкона с видом на город или бассейн. В номере есть телевизор, холодильник, фен, сейф, чайная станция, питьевая вода, два халата, полотенца, тапочки, косметический набор, ежедневная уборка, рум сервис бесплатно. Отель расположен в удобном географическом расположении, в пешей доступности необходимая инфраструктура с аптеками, магазинами, и многим другим.",
    priceBreakfast: "от 7 100 ₽",
    priceFull: "от 11 700 ₽",
    size: "28 м²",
    capacity: "2 + 1",
    beds: "2 раздельные кровати + кресло-кровать",
    view: "Город / Бассейн",
    images: [
      "https://framerusercontent.com/images/dCXBgFNLdUthQPGek5qP0BroqFE.jpg",
      "https://framerusercontent.com/images/hSPKlEY9L2TMzV8IYBTrTJ5xQtg.jpg",
      "https://framerusercontent.com/images/D6zlfDvEpFqMqHVQOoqdnQHZ3U.jpg",
      "https://framerusercontent.com/images/GjdIPzEFBlSnystqz5wRQMfLYk.jpg",
      "https://framerusercontent.com/images/KvYuPmnyjVMYDkj5N9QY0La0.jpg",
      "https://framerusercontent.com/images/Eetnf53pXuW87IYRP9UKvO6jiY.jpg",
    ],
    amenities: [
      "Балкон",
      "Кондиционер",
      "Телевизор",
      "Холодильник",
      "Фен",
      "Сейф",
      "Чайная станция",
      "Халат и тапочки",
      "Косметический набор",
      "Ежедневная уборка",
    ],
  },
  {
    id: "standard-deluxe",
    slug: "standart-deluxe-nomer",
    name: "Стандартный номер DeLuxe",
    shortName: "Стандарт DeLuxe",
    description:
      "Стандартный улучшенный номер с категорией «Deluxe». В номере одна большая кровать, дополнительно двуспальный диван. Вместимость 2 взрослых и 2 ребенка.",
    fullDescription:
      "Стандартный улучшенный номер с категорией «Deluxe». В номере одна большая кровать, дополнительно двуспальный диван. Вместимость 2 взрослых и 2 ребенка, предусмотрено наличие балкона. Вид на город, вид на бассейн. В номере телевизор, холодильник, фен, сейф, чайная станция, питьевая вода, два халата, полотенца, тапочки, косметический набор. Ежедневная уборка и рум сервис бесплатно. Отель расположен в удобном географическом расположении, в пешей доступности необходимая инфраструктура города.",
    priceBreakfast: "от 7 800 ₽",
    priceFull: "от 12 700 ₽",
    size: "45 м²",
    capacity: "2 + 2",
    beds: "1 большая кровать + двуспальный диван",
    view: "Город / Бассейн",
    images: [
      "https://framerusercontent.com/images/pVhtXR5qLzVVjPdBAxZ1FIlHgY.jpg",
      "https://framerusercontent.com/images/ZMahc6esP3NbPciFI7d3QbriY.jpeg",
      "https://framerusercontent.com/images/abwCcYG3G0cb8EeYWiCEvESD02A.jpg",
      "https://framerusercontent.com/images/z6CCAJjrA7K4tERXeXVwpU85o.jpg",
      "https://framerusercontent.com/images/DevMPzQNKAx128bkLAb8sWtpWk.jpg",
      "https://framerusercontent.com/images/eoztXiYgx9DYQoeU1WfLjDH5PMI.jpeg",
    ],
    amenities: [
      "Балкон",
      "Двуспальный диван",
      "Кондиционер",
      "Телевизор",
      "Холодильник",
      "Фен",
      "Сейф",
      "Чайная станция",
      "Халат и тапочки",
      "Косметический набор",
    ],
  },
  {
    id: "luxe",
    slug: "luxe-nomer",
    name: "Номер Luxe",
    shortName: "Luxe",
    description:
      "Двухкомнатный номер класса Luxe. В одной комнате одна большая кровать, в другой комнате двуспальный диван и кресло-кровать. Вместимость 2 взрослых и 3 ребенка.",
    fullDescription:
      "Двухкомнатный номер класса Luxe. Номер удовлетворит даже самого требовательного гостя, потому что он оснащен всем необходимым для комфортного проживания. В одной комнате одна большая кровать, в другой комнате дополнительно двуспальный диван и кресло-кровать. Вместимость 2 взрослых и 3 ребенка. Неотъемлемая часть номера это наличие балкона с видом на живописную Сочинскую природу. Ну и конечно же телевизор, холодильник, фен, сейф, чайная станция, питьевая вода, три халата, полотенца, тапочки, косметический набор. Ежедневная уборка и рум сервис бесплатно. Отель расположен в удобном географическом расположении, в пешей доступности необходимая инфраструктура с аптеками, магазинами и многим другим.",
    priceBreakfast: "от 9 400 ₽",
    priceFull: "от 14 400 ₽",
    size: "65 м²",
    capacity: "2 + 3",
    beds: "1 кровать + диван + кресло-кровать",
    view: "Живописная природа",
    images: [
      "https://framerusercontent.com/images/s5VenDxFX6NIwLYNjhx2aWDMces.jpg",
      "https://framerusercontent.com/images/y0oNRKfjQy3cBMJqsxdjzOtAJBI.jpg",
      "https://framerusercontent.com/images/oi4dJ2vKfq9ilNagwxkJRVkvE0.jpg",
      "https://framerusercontent.com/images/kPtooQlRTy0x3fs1ii5zDKcG0M0.jpg",
      "https://framerusercontent.com/images/u0c1lHx1buex4ymVryfO1S48KQ.jpg",
      "https://framerusercontent.com/images/wNfr6FlQIW5tts118riS3vR316E.jpg",
    ],
    amenities: [
      "2 комнаты",
      "Балкон",
      "Двуспальный диван",
      "Кресло-кровать",
      "Кондиционер",
      "Телевизор",
      "Холодильник",
      "Три халата",
      "Сейф",
      "Чайная станция",
    ],
  },
]

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((room) => room.slug === slug)
}
