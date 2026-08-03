import Image from "next/image";

import { ScrollReveal } from "@/components/ScrollReveal";

import type { Flavor } from "../content";

/*
 * One flavor, one chapter, one viewport at lg. The ground comes from the
 * [data-flavor] rules in cookies.css: each chapter's own tint, fading to the
 * page paper at both ends, so chapters never touch.
 *
 * The asset itself carries the approved cookie crop, ingredients, bowl, and
 * brush movement. Keeping those together prevents the layout from rebuilding
 * or accidentally reversing the flavor-specific compositions.
 */
export function FlavorChapter({ flavor, copySide }: { flavor: Flavor; copySide: "start" | "end" }) {
    const copy = (
        /* Copy always comes first in the DOM, so phones read the flavor before
           its product; the md order classes restore the mockup side, and the
           end column is pushed to the outer page margin as in the mockups. */
        <ScrollReveal
            className={`flex max-w-xl flex-col gap-5 lg:gap-6 ${
                copySide === "end" ? "md:order-2 md:justify-self-end" : ""
            }`}
        >
            <flavor.icon aria-hidden strokeWidth={1.5} className={`size-10 ${flavor.accent}`} />
            <h2
                id={`${flavor.id}-heading`}
                className={`font-bold font-display text-[clamp(2.75rem,7.5vw,6rem)] leading-none ${flavor.accent}`}
            >
                {flavor.nameLines[0]}
                <br />
                {flavor.nameLines[1]}
            </h2>
            <p className="font-bold text-xl">{flavor.lead}</p>
            <span className={`block h-px w-24 ${flavor.rule}`} />
            <p className="max-w-md text-pretty text-lg text-muted-foreground">{flavor.body}</p>
            <ul className="mt-2 flex flex-col gap-5">
                {flavor.features.map((feature) => (
                    <li key={feature.label} className="flex items-center gap-4 text-lg">
                        <feature.icon
                            aria-hidden
                            strokeWidth={1.5}
                            className={`size-7 shrink-0 ${flavor.accent}`}
                        />
                        {feature.label}
                    </li>
                ))}
            </ul>
        </ScrollReveal>
    );
    const product = (
        <ScrollReveal
            delay={120}
            motion="soft"
            className={`relative flex items-center justify-center ${
                copySide === "end" ? "md:order-1" : ""
            }`}
        >
            <Image
                src={flavor.sectionImage}
                alt={flavor.imageAlt}
                sizes="(max-width: 767px) 92vw, (max-width: 1279px) 50vw, 42rem"
                className="h-auto w-full max-w-[42rem] select-none drop-shadow-[0_1.5rem_2rem_rgba(63,42,24,0.08)]"
            />
        </ScrollReveal>
    );
    return (
        <section
            id={flavor.id}
            data-flavor={flavor.id}
            aria-labelledby={`${flavor.id}-heading`}
            className="flex scroll-mt-8 flex-col justify-center py-16 lg:min-h-svh lg:py-20"
        >
            <div
                className={`mx-auto grid w-full max-w-7xl items-center gap-10 px-6 md:gap-10 lg:gap-14 lg:px-10 ${
                    copySide === "end"
                        ? "md:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]"
                        : "md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]"
                }`}
            >
                {copy}
                {product}
            </div>
        </section>
    );
}
