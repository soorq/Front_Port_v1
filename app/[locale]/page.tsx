import { unstable_setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";

const Page = dynamic(() =>
    import("^/src/screens/root").then((p) => p.RootPage)
);

export default function Home({
    params: { locale },
}: {
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);

    return (
        <Page />
    );
}
