import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const $app = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Metadata");

    return {
        metadataBase: new URL($app),
        title: {
            default: t("about.title"),
            template: `%s - Software Engineer`,
        },
        description: t("about.description"),
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


const Page = dynamic(() => import("^/src/screens/about").then((p) => p.AboutPage));

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  return <Page />;
}
