import Image from "next/image";

import { ScrollReveal } from "@/components/ScrollReveal";

import cleanserImage from "../_assets/seasonal-skincare_asset-08_routine-cleansing_v1.webp";
import moisturizerImage from "../_assets/seasonal-skincare_asset-09_routine-moisturizer_v1.webp";
import sunscreenImage from "../_assets/seasonal-skincare_asset-10_routine-spf_v1.webp";
import { products, sequence } from "../content";
import { AccentedFirstWord } from "./AccentBurst";
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
        <section id="products" className="below-lg:py-16 py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-14 below-sm:px-6 px-10">
                <div className="flex flex-col items-center gap-1 text-center">
                    <h2 className="font-display font-semibold text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight">
                        <AccentedFirstWord text={sequence.headingLines[0]} />
                        <br />
                        {sequence.headingLines[1]}
                    </h2>
                </div>

                <div className="relative w-full">
                    {/* The path binding the three stops. */}
                    <span
                        aria-hidden="true"
                        className="absolute inset-x-[16.6667%] top-4.5 z-0 block below-sm:hidden border-campaign-skincare-lavender border-t border-dashed"
                    />
                    <ol className="grid below-sm:grid-cols-1 grid-cols-3 below-sm:gap-12 gap-8">
                        {products.map((product, index) => (
                            <li key={product.id} className="flex flex-col items-center gap-6">
                                <span className="relative z-10 flex size-9 items-center justify-center rounded-full border border-campaign-skincare-coral bg-[color-mix(in_oklab,var(--color-campaign-skincare-coral)_10%,var(--background))] font-bold text-foreground text-sm tabular-nums">
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
                                        <span className="font-display font-semibold text-2xl">
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
