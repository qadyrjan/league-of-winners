import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["kk", "ru", "en"];
const defaultLocale = "kk";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  const requestedLocales = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0]);
  const matchedLocale = requestedLocales.find(
    (lang) => locales.includes(lang) || locales.includes(lang.split("-")[0])
  );

  return matchedLocale ? matchedLocale.split("-")[0] : defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
