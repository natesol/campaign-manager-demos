import { ScrollReveal } from "@/components/ScrollReveal";

import { formulas } from "../content";
import { Trio } from "./placeholders";

/* The formula story: four quiet proof points beside the reunited trio. */
export function Formulas() {
    return (
        <section id="formulas" className="py-16 lg:py-24">
            <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16">
                <ScrollReveal className="flex flex-col gap-8">
                    <h2 className="max-w-md font-bold font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight">
                        {formulas.heading}
                    </h2>
                    <ul className="flex flex-col gap-6">
                        {formulas.features.map((feature) => (
                            <li key={feature.title} className="flex items-start gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-campaign-skincare-lavender">
                                    <feature.icon
                                        aria-hidden
                                        strokeWidth={1.5}
                                        className="size-5 text-campaign-skincare-coral"
                                    />
                                </span>
                                <span className="flex flex-col gap-1">
                                    <span className="font-bold text-lg">{feature.title}</span>
                                    <span className="text-base text-muted-foreground">
                                        {feature.caption}
                                    </span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </ScrollReveal>

                {/* Placeholder for the trio packshot on its acrylic blocks. */}
                <ScrollReveal
                    delay={120}
                    className="flex items-end justify-center rounded-3xl bg-accent px-10 pt-16 pb-10"
                >
                    <Trio />
                </ScrollReveal>
            </div>
        </section>
    );
}
