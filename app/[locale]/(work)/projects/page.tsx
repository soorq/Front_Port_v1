import dynamic from "next/dynamic";

const Page = dynamic(() =>
    import("^/src/screens/projects").then((p) => p.ProjectsPage)
);

export default function ProjectPage({ params: { locale } }: { params: { locale: string } }) {
    return <Page />;
}
