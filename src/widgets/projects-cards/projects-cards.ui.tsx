'use client'

import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ArrowRight, Github, MapPin, Ticket, Twitter, Youtube } from "lucide-react";

export const ProjectCards = ({ children }: React.PropsWithChildren) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            transition={{
                staggerChildren: 0.05,
            }}
            className="grid grid-flow-dense grid-cols-12 gap-4 max-h-full overflow-y-auto scroll-none"
        >
            <HeaderBlock />
            <SocialsBlock />
            <AboutBlock />
            <LocationBlock />
        </motion.div>
    );
};

const Block = ({ className, ...rest }) => (
    <motion.div
        variants={{
            initial: {
                scale: 0.5,
                y: 50,
                opacity: 0,
            },
            animate: {
                scale: 1,
                y: 0,
                opacity: 1,
            },
        }}
        transition={{
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
        }}
        className={twMerge(
            "col-span-4 rounded-lg border border-border bg-background p-6",
            className
        )}
        {...rest}
    />
);

const HeaderBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        <img
            src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
            alt="avatar"
            className="mb-4 size-14 rounded-full"
        />
        <h1 className="mb-12 text-4xl font-medium leading-tight">
            Hi, I'm Tom.{" "}
            <span className="text-zinc-400">
                I build cool websites like this one.
            </span>
        </h1>
        <a
            href="#"
            className="flex items-center gap-1 text-red-300 hover:underline"
        >
            Contact me <ArrowRight />
        </a>
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
                <Ticket />
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

const AboutBlock = () => (
    <Block className="col-span-12 text-3xl leading-snug">
        <p>
            My passion is building cool stuff.{" "}
            <span className="text-zinc-400">
                I build primarily with React, Tailwind CSS, and Framer Motion. I love
                this stack so much that I even built a website about it. I've made over
                a hundred videos on the subject across YouTube and TikTok.
            </span>
        </p>
    </Block>
);

const LocationBlock = () => (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
        <MapPin className="text-3xl" />
        <p className="text-center text-lg text-zinc-400">Cyberspace</p>
    </Block>
);
