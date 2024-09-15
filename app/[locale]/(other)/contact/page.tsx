import dynamic from "next/dynamic";

const Page = dynamic(() => import('^/src/screens/contact').then((p) => p.ContactPage))

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  return <Page />
};
