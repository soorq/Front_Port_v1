import dynamic from "next/dynamic";

const Page = dynamic(() => import("^/src/screens/education").then((p) => p.EducationPage));

export default function EducationPage({ params: { locale } }: { params: { locale: string } }) {
  return <Page />
};
