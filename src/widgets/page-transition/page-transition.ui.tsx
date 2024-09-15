"use client";
import React, { useEffect, useState, ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const routes: Record<string, string> = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
};

const anim = (variants: Variants) => {
    return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit",
    };
};

// Props for the Curve component
interface CurveProps {
    children: ReactNode;
    backgroundColor?: string;
}

// Component type
export const Curve: React.FC<CurveProps> = ({ children, backgroundColor }) => {
    const router = useRouter();

    // Set dimensions with types
    const [dimensions, setDimensions] = useState<{
        width: number | null;
        height: number | null;
    }>({
        width: null,
        height: null,
    });

    useEffect(() => {
        function resize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        resize();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div
            className="relative w-full h-full overflow-hidden"
            style={{ backgroundColor }}
        >
            <div
                className={`${
                    dimensions.width === null ? "opacity-100" : "opacity-0"
                } fixed w-full h-[calc(100vh+600px)] bg-black left-0 top-0 transition-opacity duration-0 delay-100`}
            />
            <motion.p
                className="absolute left-1/2 top-[40%] z-10 text-white text-[46px] transform -translate-x-1/2 text-center"
                {...anim(text)}
            >
                {routes[router.route]}
            </motion.p>
            {dimensions.width !== null && dimensions.height !== null && (
                <SVG width={dimensions.width} height={dimensions.height} />
            )}
            {children}
        </div>
    );
};

// SVG component props
interface SVGProps {
    width: number;
    height: number;
}

const SVG: React.FC<SVGProps> = ({ height, width }) => {
    const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

    return (
        <motion.svg
            className="fixed w-full h-[calc(100vh+600px)] pointer-events-none left-0 top-0"
            {...anim(translate)}
        >
            <motion.path
                fill="none"
                stroke="white"
                strokeWidth="3"
                {...anim(curve(initialPath, targetPath))}
            />
        </motion.svg>
    );
};

export const text: Variants = {
    initial: {
        opacity: 1,
    },
    enter: {
        opacity: 0,
        top: -100,
        transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
        transitionEnd: { top: "47.5%" },
    },
    exit: {
        opacity: 1,
        top: "40%",
        transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
    },
};

export const curve = (initialPath: string, targetPath: string): Variants => {
    return {
        initial: {
            d: initialPath,
        },
        enter: {
            d: targetPath,
            transition: {
                duration: 0.75,
                delay: 0.35,
                ease: [0.76, 0, 0.24, 1],
            },
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
        },
    };
};

export const translate: Variants = {
    initial: {
        top: "-300px",
    },
    enter: {
        top: "-100vh",
        transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
        transitionEnd: {
            top: "100vh",
        },
    },
    exit: {
        top: "-300px",
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
};
