import { useState, useEffect } from "react";

export const useWindowDimensions = () => {
    const getWindowDimensions = () => {
        if (typeof window === "undefined") {
            return { width: 0, height: 0 };
        }
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    };

    const [windowDimensions, setWindowDimensions] =
        useState(getWindowDimensions());

    useEffect(() => {
        let frameId: number | null = null;

        const onResize = () => {
            if (frameId) return;
            frameId = window.requestAnimationFrame(() => {
                setWindowDimensions(getWindowDimensions());
                frameId = null;
            });
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return windowDimensions;
};