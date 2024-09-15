import dynamic from "next/dynamic";

const Page = dynamic(() => import("^/src/screens/not-found").then((p) => p.NotFoundPage))

export default function NotFoundPage() {
    return <Page />
}
