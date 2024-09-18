import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { ProjectCard } from "^/src/shared/ui/project-card";
import { Heading } from "^/src/shared/ui/heading";
import { Header } from "^/src/widgets/header";
import { Badge } from "^/src/shared/ui/badge";
import { Layers } from "lucide-react";
import { ProjectCards } from "^/src/widgets/projects-cards";
import { useTranslations } from "next-intl";

const Projects = [
    {
        title: "FriendZ - A social media Platform",
        desc: "FriendZ is a social media app made with modern tech stacks such as redis, Authjs etc. A user can Create, delete, like, comment Post. ",
        tags: ["Redis", "Authjs", "Typescript", "Nextjs"],
        href: "https://github.com/taqui-786/project-friendz",
    },
    {
        title: "itZmyLink- One Page many Links",
        desc: "itZmyLink is a simple platform where user can create a personalized page to showcase all your social media profiles in one place. ",
        tags: ["Nextjs", "Typescript", "Shadcn Ui"],
        href: "https://github.com/taqui-786/itZmyLink",
    },
    {
        title: "GitEstimate- Github estimate worth generator",
        desc: "GitEstimate is a simple fun tool where user can generate their github estimate worth card just by entering their github username. ",
        tags: ["Nextjs", "Typescript", "Shadcn Ui"],
        href: "https://github.com/taqui-786/GitEstimate",
    }
];


export const ProjectsPage = () => {
    const t = useTranslations("Projects");
    return (
        <main className="max-h-dvh h-dvh overflow-hidden container">
            <Header />

            <div className="h-auto w-full mt-28 flex flex-col items-start gap-5">
                <Badge className="gap-2">
                    <Layers className="h-5 w-5" />
                    {t("badge")}
                </Badge>
                <div className="flex flex-col gap-3">
                    <Heading>{t("title")}</Heading>
                    <FramerWrapper y={0} x={200}>
                        <p className="font-poppins text-lg w-full max-sm:text-base">
                            {t("desc")}
                        </p>
                    </FramerWrapper>
                </div>

                <ProjectCards>
                    {Projects.map((val, indx) => {
                        return <ProjectCard key={indx} value={val} num={indx} />;
                    })}
                </ProjectCards>
            </div>
        </main >
    );
}
