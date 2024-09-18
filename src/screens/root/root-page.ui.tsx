import { DownloadResumeBtn } from "^/src/shared/ui/download-btn";
import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { SocialLinks } from "^/src/widgets/social-links";
import { HeroTypography } from "^/src/widgets/hero";
import { Header } from "^/src/widgets/header";
import Image from "next/image";

export const RootPage = () => {
    return (
        <main className="flex max-h-dvh overflow-hidden container h-dvh items-center justify-between">
            <Header />

            <FramerWrapper
                className="h-auto w-full flex flex-col items-start gap-4"
                y={0}
                x={-100}
            >
                <HeroTypography />
                <div className="h-fit w-full flex gap-2.5 mb-2.5">
                    <SocialLinks />
                </div>
                <DownloadResumeBtn />
            </FramerWrapper>
            <FramerWrapper
                className="relative block max-lg:hidden"
                y={0}
                x={100}
            >
                <Image
                    src={"/portfolioLogo.png"}
                    loading="eager"
                    height={500}
                    width={500}
                    alt="Logo. Interview. Developer. Soorq"
                    priority
                />
            </FramerWrapper>
        </main>
    );
};
