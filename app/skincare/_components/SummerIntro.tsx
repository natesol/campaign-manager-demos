import { Sparkles } from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";

import { summer } from "../content";

/* The seasonal promise: copy on the start side, a gel-texture study on the end
   side, and a quiet route to the products. */
export function SummerIntro() {
    return (
        <section id="summer" className="py-16 lg:py-24">
            <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16">
                <ScrollReveal className="flex flex-col gap-6">
                    <Sparkles
                        aria-hidden
                        strokeWidth={1.5}
                        className="size-6 text-campaign-skincare-coral"
                    />
                    <h2 className="max-w-md font-bold font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight">
                        {summer.heading}
                    </h2>
                    {summer.body.map((paragraph) => (
                        <p
                            key={paragraph}
                            className="max-w-md text-pretty text-lg text-muted-foreground"
                        >
                            {paragraph}
                        </p>
                    ))}
                    <a
                        href={summer.cta.href}
                        className="self-start rounded-full border border-foreground/30 px-6 py-3 text-base transition-colors hover:bg-accent"
                    >
                        {summer.cta.label}
                    </a>
                </ScrollReveal>

                {/* Placeholder for the gel-texture macro shot. */}
                <ScrollReveal delay={120} className="flex justify-center">
                    <span className="relative flex aspect-square w-full max-w-md items-center justify-center rounded-3xl bg-accent">
                        <span className="block size-3/4 rotate-12 rounded-[45%] bg-campaign-skincare-lavender/30" />
                        <span className="absolute start-[18%] top-[22%] size-6 rounded-full border border-campaign-skincare-lavender/60 bg-white/60" />
                        <span className="absolute end-[16%] bottom-[20%] size-4 rounded-full border border-campaign-skincare-lavender/60 bg-white/60" />
                    </span>
                </ScrollReveal>
            </div>
        </section>
    );
}
