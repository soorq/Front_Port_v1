import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import Image from "next/image";

export const SkillsBlock: React.FC<{
    item: {
        data: { alt: string; src: string; label: string; desc: string }[];
        paragraph: string;
    };
}> = ({ item }) => (
    <div className="w-full h-fit">
        <h2 className="gap-2 sm:text-xl mb-2.5 md:text-2xl font-poppins font-semibold flex text-lg">
            {item.paragraph}
        </h2>
        <div className="space-y-1.5 w-full h-fit">
            {item.data.map((skill, i) => (
                <FramerWrapper
                    className="px-2.5 py-1.5 flex items-center w-full h-auto rounded-lg gap-2.5 bg-muted"
                    delay={i - (i + 1 - 0.75) * 0.45}
                    key={`${i}-skill-card-promotion`}
                    x={100}
                    y={0}
                >
                    <div className="size-10 relative rounded-lg bg-muted-foreground/25 shrink-0">
                        <Image
                            sizes="(max-width: 40px) 100vw, 40px"
                            className="rounded-full p-1"
                            src={skill.src}
                            loading="lazy"
                            alt="/"
                            fill
                        />
                    </div>
                    <div className="w-full h-full min-w-20">
                        <p className="text-primary text-base leading-4">
                            {skill.label}
                        </p>
                        <p className="text-sm text-muted-foreground leading-4">
                            {skill.desc}
                        </p>
                    </div>
                </FramerWrapper>
            ))}
        </div>
    </div>
);
