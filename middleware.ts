import { localePrefix, locales, pathnames } from "^/src/shared/lib/i18n";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    defaultLocale: "ru",
    localePrefix,
    pathnames,
    locales,
});

export const config = {
    matcher: ["/", "/(ru|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
