import { NextIntlClientProvider, useMessages } from "next-intl";
import { GithubBtn } from "^/src/shared/ui/github-btn";
import { getTranslations } from "next-intl/server";
import { Poppins, Rubik } from "next/font/google";
import { cn } from "^/src/shared/lib/merge";
import type { Metadata } from "next";

const _poppins = Poppins({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-poppins",
    adjustFontFallback: false,
    preload: true,
});

const _rubik = Rubik({
    subsets: ["latin", "latin-ext", "cyrillic"],
    weight: "600",
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
    const messages = useMessages();

    return (
        <html
            className={`${_rubik.variable} scroll-smooth subpixel-antialiased ${_poppins.variable}`}
            lang={locale}
            suppressHydrationWarning
        >
            <body className={cn("bg-transparent bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]", { "bg-white": "#E6E7EB" })}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <GithubBtn />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
