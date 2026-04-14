import Link, { type LinkProps } from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type TextLinkProps = LinkProps & {
  children: ReactNode
  className?: string
}

export function TextLink({ children, className, ...props }: TextLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex items-center gap-2 text-foreground/80 transition-colors duration-200 hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/40",
        className,
      )}
    >
      {children}
    </Link>
  )
}
