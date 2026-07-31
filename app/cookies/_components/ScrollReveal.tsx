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
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [armed, setArmed] = useState(false);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const element = ref.current;
        if (!element) return;

        setArmed(true);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "0px 0px -10% 0px" },
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    const hidden = armed && !revealed;

    return (
        <div
            ref={ref}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
            className={`transition-all duration-700 ease-out ${
                hidden ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"
            } ${className}`}
        >
            {children}
        </div>
    );
}
