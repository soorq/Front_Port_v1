import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { Heading } from "^/src/shared/ui/heading";
import { Badge } from "^/src/shared/ui/badge";
import { Header } from "^/src/widgets/header";
import { Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";

export const EducationPage = () => {
    const t = useTranslations("Education");
    return (
        <main className="max-h-dvh h-dvh overflow-hidden container">
            <Header />

            <div className="h-auto mt-28 w-full relative flex flex-col items-start gap-5 overflow-hidden">
                <Badge className=" gap-2">
                    <Briefcase className="h-5 w-5" />
                    {t("badge")}
                </Badge>
                <div className="flex flex-col gap-3">
                    <Heading>{t("title")}</Heading>
                </div>
                <div className="w-full h-fit flex flex-col">
                    <div className="w-full h-fit flex">
                        <FramerWrapper
                            y={0}
                            x={-100}
                            delay={0.35}
                            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
                        >
                            July 2023 - 2026
                        </FramerWrapper>
                        <FramerWrapper
                            y={0}
                            x={100}
                            delay={0.35}
                            className="relative w-3/4 border-l-4 border-l-input p-4 gap-3 point"
                        >
                            <div className="text-2xl font-rubik max-sm:text-xl">
                                Bachelor of Computer Application, <br /> Ranchi
                                University Jharkhand
                            </div>
                            <p className="font-poppins text-base w-full max-sm:text-xs">
                                I am currently Studying Bachelor of Computer
                                Application form Doranda College Ranchi a
                                Goverment College of Ranchi. The program has
                                provided me with a well-rounded education,
                                covering both theoretical foundations and
                                practical applications of computer science.
                            </p>
                        </FramerWrapper>
                    </div>
                </div>
            </div>
        </main>
    );
};
