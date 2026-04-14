import React from "react"
import type { Metadata } from "next"
import { Onest } from "next/font/google"
import Script from "next/script"
import { ImageModalProvider } from "@/components/image-modal"
import "./globals.css"

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://priboy-spa.ru"),
  title: {
    default: "Лазаревский отель Гранд Прибой — Отели в Лазаревское, Сочи",
    template: "%s | Гранд Отель Прибой",
  },
  description:
    "Лазаревский отель Гранд Прибой — лучший выбор среди отелей в Лазаревское. SPA-комплекс с 5 банями, 2 бассейна, ресторан. Бронируйте напрямую!",
  keywords: "лазаревский отель, отели в лазаревское, отель лазаревское, гостиница лазаревское, отдых в лазаревском",
  icons: {
    icon: [
      { url: '/favicon-opaque.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://framerusercontent.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="dns-prefetch" href="https://top-fwz1.mail.ru" />
        <link rel="dns-prefetch" href="https://ru-ibe.tlintegration.ru" />
        <link rel="dns-prefetch" href="https://ibe.tlintegration.ru" />
        <link rel="dns-prefetch" href="https://ibe.tlintegration.com" />
      </head>
      <body className={`${onest.variable} font-sans antialiased`}>
        <Script
          id="travelline-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w) {
              var q = [
                ["setContext", "TL-INT-priboy-spa-ru_2025-06-23", "ru"],
                ["embed", "booking-form", {
                  container: "tl-booking-form"
                }]
              ];
              var h = ["ru-ibe.tlintegration.ru", "ibe.tlintegration.ru", "ibe.tlintegration.com"];
              var t = w.travelline = (w.travelline || {}),
                  ti = t.integration = (t.integration || {});
              ti.__cq = ti.__cq? ti.__cq.concat(q) : q;
              if (!ti.__loader) {
                ti.__loader = true;
                var d=w.document,c=d.getElementsByTagName("head")[0]||d.getElementsByTagName("body")[0];
                function e(s,f) {return function() {w.TL||(c.removeChild(s),f())}}
                (function l(h) {
                  if (0===h.length) return; var s=d.createElement("script");
                  s.type="text/javascript";s.async=!0;s.src="https://"+h[0]+"/integration/loader.js";
                  s.onerror=s.onload=e(s,function(){l(h.slice(1,h.length))});c.appendChild(s)
                })(h);
              }
            })(window);
            `,
          }}
        />
        <Script
          id="yandex-metrika"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
              ym(99041885, 'init', {defer:true, webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/99041885"
              className="absolute left-[-9999px]"
              alt="Яндекс Метрика"
            />
          </div>
        </noscript>
        <Script
          id="top-mail-ru"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var _tmr = window._tmr || (window._tmr = []);
              _tmr.push({id: "3749541", type: "pageView", start: (new Date()).getTime()});
              (function (d, w, id) {
                if (d.getElementById(id)) return;
                var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
                ts.src = "https://top-fwz1.mail.ru/js/code.js";
                var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
                if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
              })(document, window, "tmr-code");
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://top-fwz1.mail.ru/counter?id=3749541;js=na"
              className="absolute left-[-9999px]"
              alt="Top.Mail.Ru"
            />
          </div>
        </noscript>
        <Script
          id="schema-org-hotel"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "Гранд Отель и СПА «Прибой»",
              "alternateName": "Grand Hotel & SPA Priboy",
              "description": "Лазаревский отель с SPA-комплексом, 5 видами бань, 2 бассейнами и рестораном. Лучший выбор среди отелей в Лазаревское для семейного отдыха.",
              "url": "https://priboy-spa.ru",
              "telephone": "+7-988-344-33-33",
              "email": "booking@priboy-spa.ru",
              "image": "https://priboy-spa.ru/Fasad/IMG_3719.jpg",
              "priceRange": "₽₽₽",
              "starRating": {
                "@type": "Rating",
                "ratingValue": "3"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Калараша, 131",
                "addressLocality": "Лазаревское",
                "addressRegion": "Краснодарский край",
                "postalCode": "354200",
                "addressCountry": "RU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "43.9045",
                "longitude": "39.3285"
              },
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "SPA-комплекс", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Бассейн", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Ресторан", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Парковка", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Wi-Fi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Кондиционер", "value": true }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "850",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": [
                "https://vk.com/priboy_spa",
                "https://t.me/priboy_spa"
              ]
            })
          }}
        />
        <Script
          id="schema-org-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Гранд Отель и СПА «Прибой»",
              "image": "https://priboy-spa.ru/Fasad/IMG_3719.jpg",
              "@id": "https://priboy-spa.ru",
              "url": "https://priboy-spa.ru",
              "telephone": "+7-988-344-33-33",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Калараша, 131",
                "addressLocality": "Лазаревское, Сочи",
                "addressRegion": "Краснодарский край",
                "postalCode": "354200",
                "addressCountry": "RU"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              }
            })
          }}
        />
        <ImageModalProvider>
          {children}
        </ImageModalProvider>
      </body>
    </html>
  )
}
