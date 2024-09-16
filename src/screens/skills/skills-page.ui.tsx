import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { SkillsFooter } from "^/src/widgets/skills";
import { Heading } from "^/src/shared/ui/heading";
import { Badge } from "^/src/shared/ui/badge";
import { Lightbulb } from "lucide-react";
import { Header } from "^/src/widgets/header";

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
    return (
        <main className="flex relative break-words min-h-screen container items-center justify-between pt-14 pb-4 max-md:p-4 max-sm:pt-20">
            <Header />

            <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
                <Badge className=" gap-2">
                    <Lightbulb className="h-5 w-5" />
                    My Skills
                </Badge>
                <div className="flex flex-col gap-3">
                    <Heading>My Technical Experience/Skills.</Heading>
                    <FramerWrapper y={0} x={200}>
                        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
                            Currently i am a fresher and i have a solid
                            understand of HTML5, CSS3, JS, TS and React,
                            including responsive design principles. I specialize
                            in building web applications and sites using
                            Javascript, Typescript, React, Nextjs & Node.
                        </p>
                    </FramerWrapper>
                    <FramerWrapper y={100} delay={0.3} className="block">
                        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
                            Programming Languages
                        </h1>
                        <div className="w-full h-fit flex-row flex justify-between items-center">
                            <SkillsFooter items={language} />
                        </div>
                    </FramerWrapper>
                    <FramerWrapper className="block" y={100} delay={0.32}>
                        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
                            Framework/Libraries and Version Control
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
