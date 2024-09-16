import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { Circle, Heart, User2 } from "lucide-react";
import { Heading } from "^/src/shared/ui/heading";
import { AboutFooter } from "^/src/widgets/about";
import { Badge } from "^/src/shared/ui/badge";
import { Header } from "^/src/widgets/header";

const items = [
    { hobby: "coding" },
    { hobby: "playing games" },
    { hobby: "Watching Anima" },
    { hobby: "Tech Blog writing" },
    { hobby: "creating Cool Projects" },
];

export const AboutPage = () => {
    return (
        <main className="flex relative break-words min-h-screen container items-center justify-between pt-14 pb-4 max-md:p-4 max-sm:pt-20">
            <Header />

            <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
                <Badge className=" gap-2">
                    <User2 className="h-5 w-5" />
                    About me
                </Badge>
                <div className="flex flex-col gap-3">
                    <Heading>
                        Software Engineer And Web <br /> Developer, Based In India.
                    </Heading>

                    <FramerWrapper y={0} x={100}>
                        <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg">
                            I am a Full Stack Web Developer from Ramgarh cantt,
                            Jharkhand, India. I love crafting cool web projects and
                            also open-source contribuitions. My biggest achievement
                            lies in my mastery of JavaScript and CSS, ensuring
                            pixel-perfect designs that captivate users. With a keen
                            eye for detail and a commitment to delivery speed, I
                            excel at creating seamless and responsive interfaces
                            that leave a lasting impression.
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
                    <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
                        <Heart className="h-8 w-8" /> Hobbies
                    </h1>
                    <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
                        {items.map((val, indx) => {
                            return (
                                <div
                                    key={indx}
                                    className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
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
