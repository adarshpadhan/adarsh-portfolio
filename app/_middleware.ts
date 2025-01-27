import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // If the URL has a trailing slash, remove it
  if (url.pathname.endsWith("/") && url.pathname.length > 1) {
    url.pathname = url.pathname.slice(0, -1)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}

