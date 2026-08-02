import Image from "next/image";

import { Sparkles } from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";

import cleanserImage from "../_assets/seasonal-skincare_asset-08_routine-cleansing_v1.webp";
import moisturizerImage from "../_assets/seasonal-skincare_asset-09_routine-moisturizer_v1.webp";
import sunscreenImage from "../_assets/seasonal-skincare_asset-10_routine-spf_v1.webp";
import { products, sequence } from "../content";
import { Pill } from "./Pill";

const productImages = {
    cleanser: cleanserImage,
    moisturizer: moisturizerImage,
    sunscreen: sunscreenImage,
};

/*
 * The connected product sequence: one dashed path, three numbered stops read
 * start to end — cleanser, moisturizer, sunscreen. A sequence along one path,
 * deliberately not three equal product cards.
 */
export function ProductSequence() {
    return (
        <section id="products" className="py-16 lg:py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-14 px-6 sm:px-10">
                <div className="relative flex flex-col items-center gap-1 text-center">
                    <Sparkles
                        aria-hidden
                        strokeWidth={1.5}
                        className="absolute -end-2 -top-2 size-6 text-campaign-skincare-coral sm:-end-8"
                    />
                    <h2 className="font-bold font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight">
                        {sequence.headingLines[0]}
                        <br />
                        {sequence.headingLines[1]}
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
                            <li key={product.id} className="flex flex-col items-center gap-6">
                                <span className="relative flex size-9 items-center justify-center rounded-full border border-campaign-skincare-coral bg-campaign-skincare-coral/10 font-bold text-campaign-skincare-coral text-sm tabular-nums">
                                    {product.step}
                                </span>
                                <ScrollReveal
                                    delay={index * 80}
                                    motion="soft"
                                    className="flex w-full flex-col items-center gap-5 text-center"
                                >
                                    <span className="relative block aspect-square w-full overflow-hidden rounded-lg bg-accent">
                                        <Image
                                            src={productImages[product.id]}
                                            alt={product.name}
                                            fill
                                            sizes="(min-width: 640px) 33vw, 80vw"
                                            className="object-cover"
                                        />
                                    </span>
                                    <span className="flex flex-col items-center gap-2">
                                        <span className="font-bold font-display text-2xl">
                                            {product.label}
                                        </span>
                                        <span
                                            dir="ltr"
                                            className="text-foreground/45 text-xs tracking-[0.2em]"
                                        >
                                            {product.descriptor}
                                        </span>
                                        <span className="max-w-64 text-pretty text-base text-muted-foreground">
                                            {product.caption}
                                        </span>
                                    </span>
                                </ScrollReveal>
                            </li>
                        ))}
                    </ol>
                </div>

                <Pill href={sequence.cta.href}>{sequence.cta.label}</Pill>
            </div>
        </section>
    );
}
