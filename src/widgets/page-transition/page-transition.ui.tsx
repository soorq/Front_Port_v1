"use client";

import { TransitionRouter } from "next-transition-router";
import { animate } from "framer-motion";
import React from "react";

export const Transition = ({ children }: React.PropsWithChildren) => {
    const first_layer = React.useRef(null);
    const second_layer = React.useRef(null);

    const handleLeave = (next: () => void) => {
        const tl = animate(
            first_layer.current,
            { y: 0 },
            {
                duration: 0.45,
                ease: "circInOut",
                onComplete: () => {
                    animate(
                        second_layer.current,
                        { y: 0 },
                        {
                            duration: 0.4,
                            ease: "circInOut",
                            onComplete: next,
                        }
                    );
                },
            }
        );

        return () => {
            tl.stop();
        };
    };

    const handleEnter = (next: () => void) => {
        const tl = animate(
            second_layer.current,
            { y: "-100%" },
            {
                duration: 0.45,
                ease: "circInOut",
                onComplete: () => {
                    animate(
                        first_layer.current,
                        { y: "-100%" },
                        {
                            duration: 0.4,
                            ease: "circInOut",
                            onComplete: next,
                        }
                    );
                },
            }
        );

        return () => {
            tl.stop();
        };
    };

    return (
        <TransitionRouter auto key="provider-transitions" leave={handleLeave} enter={handleEnter}>
            {children}
            <div
                ref={first_layer}
                className="fixed inset-0 z-50 translate-y-full bg-primary"
            />
            <div
                ref={second_layer}
                className="fixed inset-0 z-50 translate-y-full bg-secondary"
            />
        </TransitionRouter>
    );
};
