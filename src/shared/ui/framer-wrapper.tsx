"use client";
import { motion, AnimatePresence } from "framer-motion";

type FramerMotionProps = {
    children: React.ReactNode;
    className?: string;
    duration?: number;
    delay?: number;
    scale?: number;
    y?: number;
    x?: number;
};

export const FramerWrapper: React.FC<FramerMotionProps> = ({
    children,
    delay = 0.25,
    y = 15,
    x = 0,
    duration = 0.2,
    scale = 0,
    className,
}) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={
                    scale === 0
                        ? { opacity: 0, y, x }
                        : { opacity: 0, y, x, scale }
                }
                animate={
                    scale === 0
                        ? { opacity: 1, y: 0, x: 0 }
                        : { opacity: 1, y: 0, x: 0, scale: 1 }
                }
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay, duration }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};
