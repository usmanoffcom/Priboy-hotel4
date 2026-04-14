import { NextResponse } from "next/server"
import { buildRoomsYml } from "@/lib/yml-rooms"

export const revalidate = 3600

export function GET() {
  const xml = buildRoomsYml()
  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
