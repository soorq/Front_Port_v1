import dynamic from "next/dynamic";

const Page = dynamic(() => import("^/src/screens/more").then((p) => p.MorePage));

export default function MorePage({ params: { locale } }: { params: { locale: string } }) {
    return <Page />;
}
