import { Flower, ShoppingBag, Sparkles } from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";

import { finalCta } from "../content";
import { Pill } from "./Pill";

/*
 * The closing call. The purchase control is demonstrative and dead, kept by
 * explicit user decision over the older record; nothing transacts. The petal
 * rule below hands the page to the footer.
 */
export function FinalCta() {
    return (
        <section id="closing" className="py-16 lg:py-24">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 sm:px-10">
                <ScrollReveal
                    motion="soft"
                    className="flex flex-col items-center gap-6 text-center"
                >
                    <h2 className="relative font-bold font-display text-[clamp(1.9rem,3.5vw,2.75rem)] leading-tight">
                        {finalCta.heading}
                        <Sparkles
                            aria-hidden
                            strokeWidth={1.5}
                            className="absolute -start-2 -top-4 size-6 text-campaign-skincare-coral sm:-start-9 sm:-top-5"
                        />
                    </h2>
                    <p className="text-lg text-muted-foreground">{finalCta.support}</p>
                    <Pill href={finalCta.cta.href}>
                        {finalCta.cta.label}
                        <ShoppingBag aria-hidden strokeWidth={1.5} className="size-5" />
                    </Pill>
                </ScrollReveal>

                {/* The petal rule handing off to the footer. */}
                <div aria-hidden="true" className="flex items-center gap-4">
                    <span className="h-px flex-1 bg-border" />
                    <Flower strokeWidth={2} className="size-4 text-foreground/50" />
                    <span className="h-px flex-1 bg-border" />
                </div>
            </div>
        </section>
    );
}
