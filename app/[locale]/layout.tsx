import { GithubBtn } from "^/src/shared/ui/github-btn";
import { RootProvider } from "^/src/app/providers";
import { getTranslations } from "next-intl/server";
import { Poppins, Rubik } from "next/font/google";
import type { Metadata } from "next";
import { Suspense } from "react";
import { CookieNotification } from "^/src/features/cookie-contist";
import { SideLines } from "^/src/widgets/test";

const _poppins = Poppins({
    subsets: ["latin", "latin-ext"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-poppins",
    display: 'swap',
    adjustFontFallback: false,
    preload: true,
});

const _rubik = Rubik({
    subsets: ["latin", "latin-ext", "cyrillic"],
    weight: ["300", "400", "500", "600"],
    display: 'swap',
    variable: "--font-rubik",
    adjustFontFallback: false,
    preload: true,
});

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: "Metadata" });

    return {
        metadataBase: new URL("https://mdTaquiImam.vercel.app"),
        title: {
            default: "I am a Passionate Software Developer",
            template: `%s - Software Engineer`,
        },
        description: "",
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
        authors: [
            {
                name: "Danil Borodkin",
                url: "https://github.com/soorq",
            },
        ],
        creator: "Danil Borodkin",
        openGraph: {
            type: "website",
            locale: "en_US",
            url: "",
            title: "",
            description: "",
            images: [`/og-image.png`],
            siteName: "",
        },
        twitter: {
            card: "summary_large_image",
            title: "",
            description: "",
            images: [`/og-image.png`],
            creator: "@soorq",
        },
        icons: {
            icon: "/favicon.ico",
        },
    };
}

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<React.PropsWithChildren<{ params: { locale: string } }>>) {
    return (
        <html
            className={`${_rubik.className} scroll-smooth subpixel-antialiased ${_poppins.className}`}
            lang={locale}
            suppressHydrationWarning
        >
            <body>
                <RootProvider>
                    <Suspense fallback>{children}</Suspense>
                    <GithubBtn />
                    <CookieNotification />
                    <SideLines />

                </RootProvider>
            </body>
        </html>
    );
}
