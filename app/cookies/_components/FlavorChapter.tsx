import type { Flavor } from "../content";
import { Disc } from "./placeholders";
import { ScrollReveal } from "./ScrollReveal";

/*
 * One flavor, one chapter, one viewport at lg. The ground comes from the
 * [data-flavor] rules in cookies.css: each chapter's own tint, fading to the
 * page paper at both ends, so chapters never touch.
 *
 * copySide is the logical side of the text column: the approved rhythm is copy
 * end, then copy start, then copy end, so the journey never repeats a module.
 */
export function FlavorChapter({ flavor, copySide }: { flavor: Flavor; copySide: "start" | "end" }) {
    const copy = (
        /* Copy always comes first in the DOM, so phones read the flavor before
           its product; the md order classes restore the mockup side, and the
           end column is pushed to the outer page margin as in the mockups. */
        <ScrollReveal
            className={`flex max-w-xl flex-col gap-6 ${
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
            className={`relative isolate flex items-center justify-center py-10 ${
                copySide === "end" ? "md:order-1" : ""
            }`}
        >
            <span
                className={`absolute inset-0 -z-10 m-auto h-32 w-[110%] -rotate-45 rounded-full ${flavor.brush}`}
            />
            {/* Ingredient bowl at the outer top corner, opposite the copy. */}
            <span
                className={`absolute top-0 size-16 rounded-full ${flavor.disc} ${
                    copySide === "end" ? "start-4" : "end-4"
                }`}
            />
            <Disc tone={flavor.disc} size="size-60 sm:size-72 lg:size-96" />
        </ScrollReveal>
    );
    return (
        <section
            id={flavor.id}
            data-flavor={flavor.id}
            aria-labelledby={`${flavor.id}-heading`}
            className="flex flex-col justify-center py-16 lg:min-h-svh lg:py-24"
        >
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-14 lg:gap-16 lg:px-10">
                {copy}
                {product}
            </div>
        </section>
    );
}
