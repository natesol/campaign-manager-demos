import { Flower } from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";

import { brand, closing, primaryCta } from "../content";
import { Trio } from "./placeholders";

/*
 * The closing: the family reunited in a quieter composition, the approved
 * closing lines, and the campaign CTA — a navigation action back to the
 * routine, never a purchase.
 */
export function Closing() {
    return (
        <section id="closing" className="py-16 lg:py-28">
            <ScrollReveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-6 text-center sm:px-10">
                <h2 className="font-bold font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight">
                    {closing.heading.text}
                    <span className="text-campaign-skincare-coral">.</span>
                </h2>
                <p className="max-w-md text-pretty text-lg text-muted-foreground">
                    {closing.support}
                </p>
                <Trio />
                <a
                    href={primaryCta.href}
                    className="rounded-full border-2 border-campaign-skincare-coral px-8 py-3.5 font-bold text-base transition-colors hover:bg-campaign-skincare-coral/10"
                >
                    {primaryCta.label}
                </a>
                <p className="flex items-center gap-2 font-bold font-display text-lg">
                    {brand}
                    <Flower
                        aria-hidden
                        strokeWidth={2}
                        className="size-4 text-campaign-skincare-coral"
                    />
                </p>
            </ScrollReveal>
        </section>
    );
}
