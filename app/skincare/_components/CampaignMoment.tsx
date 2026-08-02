import { Sparkles } from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";

import { moment } from "../content";
import { Tube } from "./placeholders";

/*
 * The human campaign moment: the model-and-product image from the record,
 * entering only after the products and their relationship are understood.
 * The product stays central; the model placeholder supplies warmth and scale.
 */
export function CampaignMoment() {
    return (
        <section id="moment" className="py-16 lg:py-24">
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
                <div className="relative overflow-hidden rounded-3xl bg-campaign-skincare-lavender/25 px-8 py-14 lg:px-16 lg:py-20">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <ScrollReveal className="flex flex-col gap-5">
                            <Sparkles
                                aria-hidden
                                strokeWidth={1.5}
                                className="size-6 text-campaign-skincare-coral"
                            />
                            <h2 className="max-w-md font-bold font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight">
                                {moment.heading.text}
                                <span className="text-campaign-skincare-coral">.</span>
                            </h2>
                            <p className="max-w-sm text-pretty text-lg text-muted-foreground">
                                {moment.support}
                            </p>
                        </ScrollReveal>

                        {/* Placeholder for the editorial model photograph with the
                            cleansing gel held in the foreground. */}
                        <ScrollReveal
                            delay={120}
                            className="relative flex h-64 items-end justify-center lg:h-80"
                        >
                            <span className="absolute top-0 size-52 rounded-full bg-white/60 lg:size-64" />
                            <span className="relative">
                                <Tube height="h-48" />
                            </span>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
