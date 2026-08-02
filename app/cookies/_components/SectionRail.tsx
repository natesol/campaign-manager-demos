"use client";

import { useEffect, useState } from "react";

import { sections } from "../content";

/**
 * The section indicator on the inline start (visually the right edge).
 *
 * A dot per section, the flavors in their own colors. The active dot stretches
 * and shows its label; the rest reveal theirs on hover. Every dot is a real
 * in-page link. Hidden below lg, where the sections are already one per screen.
 */
export function SectionRail() {
    const [activeId, setActiveId] = useState(sections[0].id);

    useEffect(() => {
        const observed = sections
            .map((section) => document.getElementById(section.id))
            .filter((element): element is HTMLElement => element !== null);

        if (observed.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                }
            },
            /* Only fire while a section owns the middle band of the screen. */
            { rootMargin: "-45% 0px -45% 0px" },
        );

        for (const element of observed) observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <nav
            aria-label="מעבר בין מקטעי העמוד"
            className="fixed start-6 top-1/2 z-20 hidden -translate-y-1/2 lg:block"
        >
            <ul className="flex flex-col gap-4">
                {sections.map((section) => {
                    const active = section.id === activeId;
                    return (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                aria-current={active ? "true" : undefined}
                                className="group flex h-8 items-center gap-3"
                            >
                                <span
                                    className={`block w-1.5 rounded-full transition-all duration-500 ${section.dot} ${
                                        active ? "h-8" : "h-1.5 opacity-40 group-hover:opacity-80"
                                    }`}
                                />
                                <span
                                    className={`text-sm transition-opacity duration-500 ${section.accent} ${
                                        active ? "opacity-100" : "opacity-0 group-hover:opacity-80"
                                    }`}
                                >
                                    {section.label}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
