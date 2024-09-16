import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { Circle, Heart, User2 } from "lucide-react";
import { Heading } from "^/src/shared/ui/heading";
import { AboutFooter } from "^/src/widgets/about";
import { Badge } from "^/src/shared/ui/badge";
import { Header } from "^/src/widgets/header";
import { useTranslations } from "next-intl";

const items = [
    { hobby: "coding" },
    { hobby: "playing games" },
    { hobby: "Watching Anima" },
    { hobby: "Tech Blog writing" },
    { hobby: "creating Cool Projects" },
];

export const AboutPage = () => {
    const t = useTranslations('About');

    return (
        <main className="flex relative break-words min-h-screen container items-center justify-between pt-14 pb-4 max-md:p-4 max-sm:pt-20">
            <Header />

            <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
                <Badge className=" gap-2">
                    <User2 className="h-5 w-5" />
                    {t("badge")}
                </Badge>
                <div className="flex flex-col gap-3">
                    <Heading>
                        {t("title.after")}
                        <br />
                        {t("title.before")}
                    </Heading>

                    <FramerWrapper y={0} x={100}>
                        <p className="font-poppins text-xl w-full max-sm:text-lg">
                            {t("desc")}
                        </p>
                    </FramerWrapper>
                </div>
                <FramerWrapper
                    className="w-full flex flex-row justify-between max-lg:flex-col "
                    y={100}
                    delay={0.3}
                >
                    <AboutFooter />
                </FramerWrapper>
                <FramerWrapper className="block" y={100} delay={0.31}>
                    <h1 className="gap-2 text-3xl font-poppins font-semibold flex c_underline relative max-sm:text-2xl">
                        <Heart className="h-8 w-8" /> Hobbies
                    </h1>
                    <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
                        {items.map((val, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex gap-2 justify-center items-center flex-row text-xl pt-3 max-lg:justify-start"
                                >
                                    <Circle className="h-3 w-3" /> {val.hobby}
                                </div>
                            );
                        })}
                    </div>
                </FramerWrapper>
            </div>
        </main>
    );
};
