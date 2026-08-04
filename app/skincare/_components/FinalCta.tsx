import { Flower, ShoppingBag } from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";

import { finalCta } from "../content";
import { AccentedFirstWord } from "./AccentBurst";
import { Pill } from "./Pill";

/*
 * The closing call. The purchase control is demonstrative and dead, kept by
 * explicit user decision over the older record; nothing transacts. The petal
 * rule below hands the page to the footer.
 */
export function FinalCta() {
    return (
        <section id="closing" className="mt-52 below-lg:pb-16 pb-24">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 below-sm:px-6 px-16">
                <ScrollReveal
                    motion="soft"
                    className="flex flex-col items-center gap-6 text-center"
                >
                    <h2 className="font-display font-semibold text-[clamp(1.9rem,3.5vw,2.75rem)] leading-tight">
                        <AccentedFirstWord text={finalCta.heading} />
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
