import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { Heading } from "^/src/shared/ui/heading";
import { Header } from "^/src/widgets/header";
import { Badge } from "^/src/shared/ui/badge";
import { useTranslations } from "next-intl";
import { Layers } from "lucide-react";

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
                    <FramerWrapper y={0} x={200} delay={0.5} key="project-desc">
                        <p className="font-poppins text-lg w-full max-sm:text-base">
                            {t("desc")}
                        </p>
                    </FramerWrapper>
                </div>
            </div>
        </main >
    );
}
