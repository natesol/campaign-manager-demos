"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

/**
 * Reveals its children once they scroll into view.
 *
 * The server renders the content visible, so the page is complete without
 * JavaScript and nothing is hidden if hydration never happens. The hidden state
 * is only ever applied after mount, and never when the user has asked for
 * reduced motion.
 */
export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    motion = "default",
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
    motion?: "default" | "soft";
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [armed, setArmed] = useState(false);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const element = ref.current;
        if (!element) return;

        if (motion === "soft") {
            const bounds = element.getBoundingClientRect();
            const alreadyVisible = bounds.top < window.innerHeight * 0.94 && bounds.bottom > 0;
            if (alreadyVisible) {
                setRevealed(true);
                return;
            }
        }

        setArmed(true);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: motion === "soft" ? "0px 0px -5% 0px" : "0px 0px -10% 0px",
                threshold: motion === "soft" ? 0.08 : 0,
            },
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [motion]);

    const hidden = armed && !revealed;
    const transition =
        motion === "soft"
            ? "transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            : "transition-all duration-700 ease-out";
    const hiddenPosition = motion === "soft" ? "translate-y-3" : "translate-y-6";

    return (
        <div
            ref={ref}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
            className={`${transition} ${
                hidden ? `${hiddenPosition} opacity-0` : "translate-y-0 opacity-100"
            } ${className}`}
        >
            {children}
        </div>
    );
}
