import { AnimationControls } from "framer-motion";

export const animateIn = (controls: AnimationControls) => {
    controls.start((i) => ({
        top: [0, "90%", "100%", "95%", "100%"],
        transition: {
            duration: 0.5,
            delay: i * 0.25,
            ease: [0.65, 0, 0.35, 1],
        },
    }));
};
