import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { SkillsFooter } from "^/src/widgets/skills";
import { Heading } from "^/src/shared/ui/heading";
import { Badge } from "^/src/shared/ui/badge";
import { Lightbulb } from "lucide-react";
import { Header } from "^/src/widgets/header";
import { useTranslations } from "next-intl";

const language = [
    { alt: "html", img: "/css.png" },
    { alt: "css", img: "/css.png" },
    { alt: "js", img: "/css.png" },
    { alt: "ts", img: "/css.png" },
    { alt: "cplus", img: "/css.png" },
];
const framework = [
    { alt: "react", img: "/css.png" },
    { alt: "nextjs", img: "/css.png" },
    { alt: "scss", img: "/css.png" },
    { alt: "tailwind", img: "/css.png" },
    { alt: "github", img: "/css.png" },
    { alt: "vscode", img: "/css.png" },
];

export const SkillsPage = () => {
    const t = useTranslations("Skills");

    return (
        <main className="flex relative break-words min-h-screen container items-center justify-between pt-14 pb-4 max-md:p-4 max-sm:pt-20">
            <Header />

            <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
                <Badge className=" gap-2">
                    <Lightbulb className="h-5 w-5" />
                    {t("badge")}
                </Badge>
                <div className="flex flex-col gap-3">
                    <Heading>
                        {t("title.after")} <br />{" "}
                        <span className="text-primary">
                            {t("title.before")}
                        </span>
                    </Heading>
                    <FramerWrapper y={0} x={200}>
                        <p className="font-poppins text-xl w-full max-sm:text-lg">
                            {t("desc")}
                        </p>
                    </FramerWrapper>
                    <FramerWrapper y={100} delay={0.3} className="block">
                        <h1 className="gap-2 text-2xl font-poppins font-semibold flex relative max-sm:text-xl">
                            {t("other.code")}
                        </h1>
                        <div className="w-full h-fit flex-row flex justify-between items-center">
                            <SkillsFooter items={language} />
                        </div>
                    </FramerWrapper>
                    <FramerWrapper className="block" y={100} delay={0.32}>
                        <h1 className="gap-2 text-2xl font-poppins font-semibold flex relative max-sm:text-xl">
                            {t("other.framework")}
                        </h1>
                        <div className="w-full h-fit flex-row flex justify-between items-center">
                            <SkillsFooter items={framework} />
                        </div>
                    </FramerWrapper>
                </div>
            </div>
        </main>
    );
};
