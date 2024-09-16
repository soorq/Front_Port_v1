import dynamic from "next/dynamic";

const Page = dynamic(
    () => import("^/src/screens/not-found").then((p) => p.NotFoundPage),
    { ssr: false, suspense: true }
);

export default function NotFoundPage() {
    return <Page />;
}
