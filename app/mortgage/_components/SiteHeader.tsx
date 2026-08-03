"use client";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import type { NavigationItem } from "../content";
import { BrandMark } from "./BrandMark";
import { MobileNavigation } from "./MobileNavigation";

type SiteHeaderProps = {
    company: string;
    items: readonly NavigationItem[];
};

export function SiteHeader({ company, items }: SiteHeaderProps) {
    const [isStuck, setIsStuck] = useState(false);
    const [activeSection, setActiveSection] = useState<string>(items[0].section);
    const sentinelRef = useRef<HTMLDivElement>(null);

    /* The sentinel spans the distance the bar travels before it catches, so the bar
       is stuck exactly when the sentinel has left the viewport. An observer rather
       than a scroll handler, and unlike a scroll timeline it works everywhere. */
    useEffect(() => {
        const sentinel = sentinelRef.current;

        if (!sentinel) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => setIsStuck(!entry.isIntersecting), {
            threshold: 0,
        });

        observer.observe(sentinel);

        return () => observer.disconnect();
    }, []);

    /* A band across the upper third of the viewport: the first section in document
       order that reaches it is the one being read. */
    useEffect(() => {
        const sections = items
            .map((item) => document.getElementById(item.section))
            .filter((section): section is HTMLElement => section !== null);

        if (sections.length === 0) {
            return;
        }

        const inBand = new Set<string>();
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        inBand.add(entry.target.id);
                    } else {
                        inBand.delete(entry.target.id);
                    }
                }

                const current = items.find((item) => inBand.has(item.section));

                if (current) {
                    setActiveSection(current.section);
                }
            },
            { rootMargin: "-20% 0px -60% 0px" },
        );

        for (const section of sections) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, [items]);

    return (
        <>
            <div aria-hidden className="mortgage-header-sentinel" ref={sentinelRef} />

            {/* A zero-height sticky layer, so the bar overlays the hero on the shared
                content line without taking part in the page flow. */}
            <header className="mortgage-header z-50">
                <div className="mortgage-container mortgage-header-track" data-stuck={isStuck}>
                    {/* relative: the mobile menu below measures itself against this bar. */}
                    <div className="mortgage-header-bar mortgage-header-surface relative flex items-center justify-between rounded-4xl bg-background px-4 text-foreground md:px-6">
                        <Link
                            className="flex items-center gap-3 rounded-sm font-bold font-display text-lg tracking-tight focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
                            href="/"
                            aria-label={`${company}, חזרה לעמוד הראשי`}
                        >
                            <BrandMark />
                            <span>{company}</span>
                        </Link>

                        <nav
                            className="hidden items-center gap-8 pe-5 font-medium text-sm md:flex lg:gap-12"
                            aria-label="ניווט ראשי"
                        >
                            {items.map((item) => {
                                const isActive = item.section === activeSection;

                                return (
                                    <a
                                        className={cn(
                                            "relative rounded-sm py-3 transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-center after:bg-campaign-mortgage-accent after:transition-transform hover:text-campaign-mortgage-accent hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:after:scale-x-100",
                                            isActive ? "after:scale-x-[0.35]" : "after:scale-x-0",
                                        )}
                                        key={item.href}
                                        href={item.href}
                                        aria-current={isActive ? "location" : undefined}
                                    >
                                        {item.label}
                                    </a>
                                );
                            })}
                        </nav>

                        <MobileNavigation items={items} />
                    </div>
                </div>
            </header>
        </>
    );
}
