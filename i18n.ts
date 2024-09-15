import { getRequestConfig } from "next-intl/server";
import { locales } from "^/src/shared/lib/i18n";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`^/src/shared/lang/${locale}.json`)).default,
    };
});
