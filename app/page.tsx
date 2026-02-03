import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import type { Metadata } from "next"

const FeaturesSection = dynamic(() => import("@/components/features-section").then((m) => ({ default: m.FeaturesSection })), { ssr: true })
const RoomsPreview = dynamic(() => import("@/components/rooms-preview").then((m) => ({ default: m.RoomsPreview })), { ssr: true })
const SpaPreview = dynamic(() => import("@/components/spa-preview").then((m) => ({ default: m.SpaPreview })), { ssr: true })
const AquaComplexPreview = dynamic(() => import("@/components/aqua-complex-preview").then((m) => ({ default: m.AquaComplexPreview })), { ssr: true })
const AnimationPreview = dynamic(() => import("@/components/animation-preview").then((m) => ({ default: m.AnimationPreview })), { ssr: true })
const HotelPreview = dynamic(() => import("@/components/hotel-preview").then((m) => ({ default: m.HotelPreview })), { ssr: true })
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then((m) => ({ default: m.TestimonialsSection })), { ssr: true })
const CtaSection = dynamic(() => import("@/components/cta-section").then((m) => ({ default: m.CtaSection })), { ssr: true })
const OtherHotels = dynamic(() => import("@/components/other-hotels").then((m) => ({ default: m.OtherHotels })), { ssr: true })

export const metadata: Metadata = {
  title: "Лазаревский отель Гранд Прибой — Отели в Лазаревское, Сочи",
  description: "Лазаревский отель Гранд Прибой — лучший выбор среди отелей в Лазаревское. SPA-комплекс с 5 банями, 2 бассейна, ресторан. Бронируйте напрямую по лучшей цене!",
  keywords: "лазаревский отель, отели в лазаревское, отель лазаревское, гостиница лазаревское, отдых в лазаревском, сочи отель",
  alternates: {
    canonical: "https://priboy-spa.ru",
  },
  openGraph: {
    title: "Лазаревский отель Гранд Прибой — Отели в Лазаревское",
    description: "Лазаревский отель с SPA-комплексом, бассейнами и рестораном. Лучшие отели в Лазаревское для семейного отдыха.",
    url: "https://priboy-spa.ru",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Лазаревский отель Гранд Прибой — Отели в Лазаревское, Сочи",
      },
    ],
    type: "website",
    locale: "ru_RU",
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <RoomsPreview />
        <SpaPreview />
        <AquaComplexPreview />
        <AnimationPreview />
        <HotelPreview />
        <TestimonialsSection />
        <CtaSection />
        <OtherHotels />
      </main>
      <Footer />
    </>
  )
}
