"use client"

import { useEffect } from "react"

export function TravellineWidget() {
  useEffect(() => {
    // Здесь будет инициализация Travelline виджета
    // Код виджета от Travelline вставляется сюда
    // Пример:
    // (function(w, d, s, h, p) {
    //   w.tlgrmWidget = p;
    //   var a = d.getElementsByTagName(s)[0];
    //   var r = d.createElement(s);
    //   r.async = true;
    //   r.src = h + p + '.js?v=' + Date.now();
    //   a.parentNode.insertBefore(r, a);
    // })(window, document, 'script', '//widget.travelline.ru/', 'ВАШЕ_PROPERTY_ID');
  }, [])

  return (
    <div className="bg-white border border-border p-6 md:p-8">
      {/* Travelline widget container */}
      <style jsx global>{`
        #tl-booking-form {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
        }
      `}</style>

      <div id="tl-booking-form" className="min-h-[400px]" />

      {/* Подсказки */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Мгновенное подтверждение</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Безопасная оплата</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Лучшая цена гарантирована</span>
          </div>
        </div>
      </div>
    </div>
  )
}
