"use client";

import { useEffect, useState } from "react";

export type RailFlavor = {
    id: string;
    name: string;
    /* Spelled out so Tailwind sees the class statically. */
    dot: string;
    label: string;
};

/**
 * A progress indicator for the flavor journey, not a tab bar.
 *
 * It reports which flavor currently owns the viewport and is deliberately not
 * interactive — selection belongs to the hero cookies. It hides on small
 * screens, where the chapters are already one per screen.
 */
export function FlavorRail({ flavors }: { flavors: RailFlavor[] }) {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const sections = flavors
            .map((flavor) => document.getElementById(flavor.id))
            .filter((section): section is HTMLElement => section !== null);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                }
            },
            /* Only fire while a chapter owns the middle band of the screen. */
            { rootMargin: "-45% 0px -45% 0px" },
        );

        for (const section of sections) observer.observe(section);
        return () => observer.disconnect();
    }, [flavors]);

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed start-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 lg:flex"
        >
            {flavors.map((flavor) => {
                const active = flavor.id === activeId;
                return (
                    <div key={flavor.id} className="flex items-center gap-3">
                        <span
                            className={`block rounded-full transition-all duration-500 ${flavor.dot} ${
                                active ? "h-8 w-1.5" : "h-1.5 w-1.5 opacity-40"
                            }`}
                        />
                        <span
                            className={`text-sm transition-all duration-500 ${flavor.label} ${
                                active ? "opacity-100" : "-translate-x-1 opacity-0"
                            }`}
                        >
                            {flavor.name}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
