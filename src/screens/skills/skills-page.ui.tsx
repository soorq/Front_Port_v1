import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { SkillsBlock } from "^/src/widgets/skills";
import { Heading } from "^/src/shared/ui/heading";
import { TimeLine } from "^/src/widgets/timeline";
import { Header } from "^/src/widgets/header";
import { Badge } from "^/src/shared/ui/badge";
import { useTranslations } from "next-intl";
import { Lightbulb } from "lucide-react";

import skills from "^/src/shared/constants/skills.json";

const data = [
    {
        date: "jull 21-21",
        title: "Lorem ipsum dolor sit",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolor, quibusdam! Dolor, perspiciatis recusandae. maxime recusandae veniam, dolorum alias!",
    },
    {
        date: "jull 21-21",
        title: "Lorem ipsum dolor sit",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolor, quibusdam! Dolor, perspiciatis recusandae. maxime recusandae veniam, dolorum alias!",
    },
    {
        date: "jull 21-21",
        title: "Lorem ipsum dolor sit",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolor, quibusdam! Dolor, perspiciatis recusandae. maxime recusandae veniam, dolorum alias!",
    },
    {
        date: "jull 21-21",
        title: "Lorem ipsum dolor sit",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolor, quibusdam! Dolor, perspiciatis recusandae. maxime recusandae veniam, dolorum alias!",
    },
    {
        date: "jull 21-21",
        title: "Lorem ipsum dolor sit",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolor, quibusdam! Dolor, perspiciatis recusandae. maxime recusandae veniam, dolorum alias!",
    },
    {
        date: "jull 21-21",
        title: "Lorem ipsum dolor sit",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolor, quibusdam! Dolor, perspiciatis recusandae. maxime recusandae veniam, dolorum alias!",
    },
];

export const SkillsPage = () => {
    const t = useTranslations("Skills");

    return (
        <main className="max-h-dvh h-dvh overflow-hidden container">
            <Header />

            <div className="h-auto mt-28 w-full flex flex-col items-start gap-5 overflow-hidden">
                <Badge>
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
                    <div className="flex w-full h-full max-h-[65dvh] overflow-y-auto scroll-none scroll-m-0 will-change-scroll">
                        <FramerWrapper
                            className="w-2/3"
                            x={200}
                            y={0}
                        >
                            <p className="font-poppins text-xl w-full max-sm:text-lg mb-10">
                                {t("desc")}
                            </p>

                            <TimeLine data={data} />
                        </FramerWrapper>

                        <div className="w-1/4 h-full space-y-5 font-poppins">
                            <SkillsBlock item={skills[0].languages} />
                            <SkillsBlock item={skills[0].cascading} />
                            <SkillsBlock item={skills[0].framework} />
                            <SkillsBlock item={skills[0].bundlers} />
                            <SkillsBlock item={skills[0].testing} />
                            <SkillsBlock item={skills[0].other} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
