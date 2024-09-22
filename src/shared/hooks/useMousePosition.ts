import { useState, useEffect } from "react";

type TypeState = { x: number | null; y: number | null };

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState<TypeState>({
        x: null,
        y: null,
    });

    const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () =>
            window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};

export { useMousePosition };
