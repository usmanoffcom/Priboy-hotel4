const SITE = "https://priboy-spa.ru"

/**
 * JSON-LD: @graph — WebSite + Hotel (без дубля LocalBusiness).
 * Заезд/выезд как на странице «Контакты».
 */
export function getHotelJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "Гранд Отель и СПА «Прибой»",
        description:
          "Лазаревский отель с SPA-комплексом, банями, бассейнами и рестораном. Бронирование на сайте.",
        inLanguage: "ru-RU",
        publisher: { "@id": `${SITE}/#hotel` },
      },
      {
        "@type": "Hotel",
        "@id": `${SITE}/#hotel`,
        name: "Гранд Отель и СПА «Прибой»",
        alternateName: ["Grand Hotel & SPA Priboy", "Гранд Отель Прибой 4★"],
        description:
          "Лазаревский отель с SPA-комплексом, 5 видами бань, 2 бассейнами и рестораном. Лучший выбор среди отелей в Лазаревское для семейного отдыха.",
        url: SITE,
        sameAs: [
          "https://yandex.ru/maps/org/grand_otel_i_spa_priboy/244585145973/",
          "https://vk.com/priboy_spa",
          "https://t.me/priboy_spa",
        ],
        telephone: "+7-988-344-33-33",
        email: "booking@priboy-spa.ru",
        image: [`${SITE}/Fasad/IMG_3719.jpg`, `${SITE}/fasad.jpg`],
        logo: `${SITE}/favicon-192x192.png`,
        priceRange: "₽₽₽",
        currenciesAccepted: "RUB",
        checkinTime: "14:00",
        checkoutTime: "12:00",
        starRating: {
          "@type": "Rating",
          ratingValue: "3",
          bestRating: "5",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "ул. Калараша, 131",
          addressLocality: "Лазаревское",
          addressRegion: "Краснодарский край",
          postalCode: "354200",
          addressCountry: "RU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 43.9045,
          longitude: 39.3285,
        },
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "SPA-комплекс", value: true },
          { "@type": "LocationFeatureSpecification", name: "Бассейн", value: true },
          { "@type": "LocationFeatureSpecification", name: "Ресторан", value: true },
          { "@type": "LocationFeatureSpecification", name: "Парковка", value: true },
          { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
          { "@type": "LocationFeatureSpecification", name: "Кондиционер", value: true },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "850",
          bestRating: "5",
          worstRating: "1",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE}/booking`,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          result: {
            "@type": "LodgingReservation",
            name: "Бронирование номера",
          },
        },
      },
    ],
  }
}
