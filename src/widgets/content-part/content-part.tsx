"use client";
import { ArrowRight, Github, Gitlab, Twitter, Youtube } from "lucide-react";
import React from "react";
import { MotionProps, motion } from "framer-motion";
import { cn } from "^/src/shared/lib/merge";
import { Link } from "^/src/shared/ui/i18n";

type TypePropsIntro = {
    header: {
        content: {
            title: string;
            subtitle: string;
        };
        image?: string;
        badge: React.ReactNode;
    };
    links: {
        github: string;
        linkedin: string;
        twitter: string;
        twitch: string;
        youtube: string;
    };
    about: React.ReactNode;
    other: { label: string; icon: React.ReactNode, value: string }[];
};

export const ContentPart: React.FC<TypePropsIntro> = ({
    about,
    header,
    links,
    other,
}) => {
    return (
        <div className="py-5">
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.25,
                }}
                className="grid grid-flow-dense grid-cols-12 gap-4"
            >
                <AboutBlock about={about} />
                <OtherBlock other={other} />
                <HeaderBlock header={header} />
                <SocialsBlock />
            </motion.div>
        </div>
    );
};

type BlockProps = {
    className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    x: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    x: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            className={cn(
                "col-span-4 rounded-xl border border-border bg-background/95 p-6",
                className
            )}
            {...rest}
        />
    );
};

const HeaderBlock: React.FC<Pick<TypePropsIntro, "header">> = ({ header }) => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        {header.badge && header.badge}

        <h1 className="mb-10 mt-4 text-3xl font-medium leading-tight text-pretty">
            {header.content.title}{" "}
            <span className="text-zinc-400">{header.content.subtitle}</span>
        </h1>
        <Link
            scroll={false}
            href="contact"
            className="flex items-center gap-1 text-red-300 hover:underline"
        >
            Contact me <ArrowRight />
        </Link>
    </Block>
);

const SocialsBlock = () => (
    <>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-red-500 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <Youtube />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-green-600 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <Github />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-zinc-50 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-black"
            >
                <Gitlab />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-blue-500 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <Twitter />
            </a>
        </Block>
    </>
);

const AboutBlock: React.FC<Pick<TypePropsIntro, "about">> = ({ about }) => (
    <Block className="col-span-12 text-3xl leading-snug">{about}</Block>
);

const OtherBlock: React.FC<Pick<TypePropsIntro, "other">> = ({ other }) => (
    <>
        {other.map(({ label, icon, value }) => (
            <Block
                key={`other-link-${label}`}
                className="col-span-12 flex flex-col items-center gap-4 md:col-span-4"
            >
                <div className="flex flex-col gap-2.5">
                    <div className="[&>svg]:text-primary flex justify-center items-center gap-2.5">
                        {icon}
                        <p className="text-xl">
                            {label}
                        </p>
                    </div>
                    <p className="text-lg">{value}</p>
                </div>
            </Block>
        ))}
    </>
);
