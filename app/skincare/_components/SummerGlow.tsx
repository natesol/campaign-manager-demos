import { Sparkles } from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";

import { glow } from "../content";
import { Pill } from "./Pill";

/*
 * The seasonal promise on a full-width lavender band. The texture image plane
 * runs flush to the page edge with square corners, as in the design; the copy
 * holds the start half.
 */
export function SummerGlow() {
    return (
        <section id="glow" className="bg-accent">
            <div className="grid items-stretch lg:grid-cols-2">
                <ScrollReveal className="flex flex-col justify-center gap-6 px-6 py-16 sm:px-10 lg:mx-auto lg:w-full lg:max-w-2xl lg:py-24 lg:ps-16">
                    <h2 className="relative max-w-md font-bold font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight">
                        {glow.headingLines[0]}
                        <br />
                        {glow.headingLines[1]}
                        <br />
                        {glow.headingLines[2]}
                        <Sparkles
                            aria-hidden
                            strokeWidth={1.5}
                            className="absolute -end-2 bottom-2 size-6 text-campaign-skincare-coral"
                        />
                    </h2>
                    <p className="max-w-md text-pretty text-lg text-muted-foreground">
                        {glow.body}
                    </p>
                    <Pill href={glow.cta.href} className="self-start bg-background">
                        {glow.cta.label}
                    </Pill>
                </ScrollReveal>

                {/* Placeholder for the flowing gel-texture photograph, flush to
                    the page edge, square-cornered. */}
                <ScrollReveal
                    delay={120}
                    className="relative min-h-80 bg-campaign-skincare-lavender/40 lg:min-h-[32rem]"
                >
                    <span className="absolute start-[38%] top-[12%] block h-3/4 w-1/3 -rotate-12 rounded-[45%] bg-white/50" />
                    <span className="absolute start-[15%] top-[18%] size-7 rounded-full border border-white/70 bg-white/50" />
                    <span className="absolute end-[18%] bottom-[14%] size-5 rounded-full border border-white/70 bg-white/50" />
                </ScrollReveal>
            </div>
        </section>
    );
}
