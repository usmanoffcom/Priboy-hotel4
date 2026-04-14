import { FileDown } from "lucide-react"
import { HOTEL_REGISTRY_DOCUMENTS, hotelDocumentHref } from "@/lib/hotel-registry"

type Props = {
  className?: string
  /** Светлый фон (страница о комплексе) или приглушённый (реквизиты) */
  variant?: "white" | "muted"
}

export function HotelDocumentsDownload({ className = "", variant = "white" }: Props) {
  const card =
    variant === "muted"
      ? "bg-cream-dark border border-border p-5 sm:p-6"
      : "bg-cream border border-border p-5 sm:p-6"

  return (
    <ul className={`space-y-3 ${className}`}>
      {HOTEL_REGISTRY_DOCUMENTS.map((doc) => (
        <li key={doc.fileName}>
          <a
            href={hotelDocumentHref(doc.fileName)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${card} flex gap-3 sm:gap-4 items-start rounded-none hover:border-terracotta/40 transition-colors group`}
          >
            <FileDown className="h-5 w-5 text-terracotta flex-shrink-0 mt-0.5" aria-hidden />
            <span>
              <span className="font-medium text-foreground group-hover:text-terracotta block">
                {doc.title}
              </span>
              <span className="text-sm text-muted-foreground mt-1 block">{doc.description}</span>
              <span className="text-xs text-muted-foreground mt-2 block">PDF · {doc.fileName}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
