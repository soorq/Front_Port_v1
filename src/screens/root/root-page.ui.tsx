import { DownloadResumeBtn } from "^/src/shared/ui/download-btn";
import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { SocialLinks } from "^/src/widgets/social-links";
import { HeroTypography } from "^/src/widgets/hero";
import Image from "next/image";

export const RootPage = () => {
    return (
        <>
            <FramerWrapper
                className=" h-full w-auto flex flex-col justify-start gap-4"
                y={0}
                x={-100}
            >
                <HeroTypography />
                <div className="h-fit w-full flex gap-3 my-2">
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
        </>
    );
};
