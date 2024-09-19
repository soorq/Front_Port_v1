import { CookieNotification } from "^/src/features/cookie-contist";
import { GithubBtn } from "^/src/shared/ui/github-btn";
import { RootProvider } from "^/src/app/providers";
import { getTranslations } from "next-intl/server";
import { Poppins, Rubik } from "next/font/google";
import type { Metadata } from "next";
import { Suspense } from "react";
import { routing } from "^/src/shared/ui/i18n";

const _poppins = Poppins({
    subsets: ["latin", "latin-ext"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-poppins",
    display: "swap",
    adjustFontFallback: false,
    preload: true,
});

const _rubik = Rubik({
    subsets: ["latin", "latin-ext", "cyrillic"],
    weight: ["300", "400", "500", "600"],
    display: "swap",
    variable: "--font-rubik",
    adjustFontFallback: false,
    preload: true,
});

const $app = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Metadata");

    return {
        metadataBase: new URL($app),
        title: {
            default: t("title"),
            template: `%s - Software Engineer`,
        },
        description: t("description"),
        applicationName: "Soorq Developer Software",
        openGraph: {
            type: "website",
            locale: "en_US",
            url: new URL($app),
            title: t("og.title"),
            description: t("og.description"),
            images: [`/og-image.png`],
            siteName: "",
        },
        twitter: {
            card: "summary_large_image",
            title: "Soorq Developer Software",
            description: t("og.description"),
            images: [`/og-image.png`],
            creator: "@soorq",
        },
        alternates: {
            canonical: new URL($app + "/ru"),
            languages: {
                ru: "/ru",
                en: "/en",
            },
        },
        keywords: [
            "md",
            "Md",
            "MD",
            "portfolio",
            "web developer",
            "web",
            "web dev",
            "developer",
            "PROGRAMMER ",
            "programmer ",
            "website",
            "soorq developer",
            "SOORQ developer",
            "MDSOORQ",
            "MDsoorq",
        ],
        creator: "Danil Borodkin",
        publisher: "Danil Borodkin",
        authors: [
            {
                name: "Danil Borodkin",
                url: "https://github.com/soorq",
            },
        ],
        referrer: "origin-when-cross-origin",
        generator: "NextJs 14.2.11",
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_METRIC,
            yandex: process.env.NEXT_PUBLIC_YANDEX_METRIC,
        },
    };
}


export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<React.PropsWithChildren<{ params: { locale: string } }>>) {
    return (
        <html
            className={`${_rubik.className} scroll-smooth subpixel-antialiased ${_poppins.className}`}
            suppressHydrationWarning
            lang={locale}
        >
            <body>
                <RootProvider>
                    <Suspense fallback>{children}</Suspense>
                    <GithubBtn />
                    <CookieNotification />
                </RootProvider>
            </body>
        </html>
    );
}
