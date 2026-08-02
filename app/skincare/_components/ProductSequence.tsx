import { Sparkles } from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";

import { products, sequence } from "../content";
import { PumpBottle, Tube } from "./placeholders";

/*
 * The connected product sequence: one dashed path, three numbered stops read
 * start to end — cleanser, moisturizer, sunscreen — with the approved captions.
 * A sequence along one path, deliberately not three equal product cards.
 */
export function ProductSequence() {
    return (
        <section id="products" className="py-16 lg:py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-14 px-6 sm:px-10">
                <div className="flex flex-col items-center gap-4 text-center">
                    <Sparkles
                        aria-hidden
                        strokeWidth={1.5}
                        className="size-6 text-campaign-skincare-coral"
                    />
                    <h2 className="font-bold font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight">
                        {sequence.heading.text}
                        <span className="text-campaign-skincare-coral">.</span>
                    </h2>
                </div>

                <div className="relative w-full">
                    {/* The path binding the three stops. */}
                    <span
                        aria-hidden="true"
                        className="absolute inset-x-[16%] top-4 hidden border-campaign-skincare-lavender border-t border-dashed sm:block"
                    />
                    <ol className="grid gap-12 sm:grid-cols-3 sm:gap-8">
                        {products.map((product, index) => (
                            <li key={product.id} className="flex flex-col items-center gap-5">
                                <span className="relative flex size-9 items-center justify-center rounded-full border border-campaign-skincare-coral bg-background font-bold text-campaign-skincare-coral text-sm tabular-nums">
                                    {product.step}
                                </span>
                                <ScrollReveal
                                    delay={index * 120}
                                    className="flex w-full flex-col items-center gap-4 text-center"
                                >
                                    <span className="flex h-56 w-full items-end justify-center rounded-2xl bg-accent pb-6">
                                        {product.id === "moisturizer" ? <PumpBottle /> : <Tube />}
                                    </span>
                                    <span className="flex flex-col items-center gap-1.5">
                                        <span className="font-bold font-display text-2xl">
                                            {product.label}
                                        </span>
                                        <span
                                            dir="ltr"
                                            className="text-subtle-foreground text-xs tracking-[0.2em]"
                                        >
                                            {product.descriptor}
                                        </span>
                                        <span className="max-w-56 text-pretty text-base text-muted-foreground">
                                            {product.caption}
                                        </span>
                                    </span>
                                </ScrollReveal>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
