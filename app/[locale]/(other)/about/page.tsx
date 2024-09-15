import dynamic from "next/dynamic";

const Page = dynamic(() => import("^/src/screens/about").then((p) => p.AboutPage));

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  return <Page />;
}
