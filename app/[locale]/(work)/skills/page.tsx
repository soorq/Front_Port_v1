import dynamic from "next/dynamic";

const Page = dynamic(() =>
  import("^/src/screens/skills").then((p) => p.SkillsPage)
);

export default function SkillsPage({ params: { locale } }: { params: { locale: string } }) {
  return <Page />;
}
