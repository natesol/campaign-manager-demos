import Image, { type StaticImageData } from "next/image";

import { Sparkles } from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";

import cleanserImage from "../_assets/seasonal-skincare_asset-02_grid-cleansing-water_v2.png";
import promenadeImage from "../_assets/seasonal-skincare_asset-03_grid-summer-promenade_v1.png";
import moisturizerImage from "../_assets/seasonal-skincare_asset-04_grid-moisturizer_v1.png";
import waterImage from "../_assets/seasonal-skincare_asset-05_grid-water-ripple_v1.png";
import modelSpfImage from "../_assets/seasonal-skincare_asset-06_grid-model-spf_v1.png";
import spfCapImage from "../_assets/seasonal-skincare_asset-07_grid-spf-water-closeup_v1.png";
import { routine } from "../content";

/*
 * The campaign's organizing idea as the final design's editorial mosaic. The
 * grid is not equal thirds: the cleanser shot holds a wide column spanning the
 * heading row and the row below it, the copy cards are the narrow tiles, and
 * every row splits the twelve columns differently. One uniform gap binds the
 * photographs and copy cards into a single editorial composition.
 */

function MosaicCard({
    card,
    accent,
    span,
}: {
    card: typeof routine.cards.morning;
    accent: string;
    span: string;
}) {
    return (
        /* The cards are the mosaic's clickable stops, all leading to the products. */
        <a
            href="#products"
            className={`flex min-h-52 flex-col items-center justify-center gap-3 bg-accent p-5 text-center transition-colors hover:bg-campaign-skincare-lavender/25 ${span}`}
        >
            <span
                className={`flex size-11 items-center justify-center rounded-full border ${accent}`}
            >
                <card.icon aria-hidden strokeWidth={1.5} className="size-5" />
            </span>
            <span className="font-bold font-display text-2xl">{card.title}</span>
            <span className="text-pretty text-muted-foreground text-sm">{card.body}</span>
        </a>
    );
}

function MosaicTile({
    src,
    alt,
    span,
    sizes,
}: {
    src: StaticImageData;
    alt: string;
    span: string;
    sizes: string;
}) {
    return (
        <div className={`relative min-h-52 overflow-hidden ${span}`}>
            <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
        </div>
    );
}

export function MorningEvening() {
    return (
        <section id="routine" className="py-16 lg:py-24">
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[auto_15rem_15rem_15rem]">
                    {/* Heading block: a short first row on the start side; the tall
                        cleanser shot spans this row and the next. */}
                    <ScrollReveal className="flex flex-col justify-center gap-3 pb-6 sm:col-span-2 lg:col-span-7 lg:pe-16 lg:pb-0">
                        <p className="flex items-center gap-2 text-campaign-skincare-coral text-sm">
                            {routine.eyebrow}
                            <Sparkles aria-hidden strokeWidth={1.5} className="size-4" />
                        </p>
                        <h2 className="font-bold font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight">
                            {routine.heading}
                        </h2>
                        <p className="max-w-md text-pretty text-lg text-muted-foreground">
                            {routine.support}
                        </p>
                    </ScrollReveal>
                    {/* Cleansing-gel packshot, wet. */}
                    <MosaicTile
                        src={cleanserImage}
                        alt="ג'ל ניקוי רטוב לצד מים וזכוכית"
                        sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
                        span="lg:col-span-5 lg:row-span-2"
                    />

                    {/* Summer lifestyle photograph. */}
                    <MosaicTile
                        src={promenadeImage}
                        alt="אישה צועדת בטיילת קיצית ליד הים"
                        sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                        span="lg:col-span-4"
                    />
                    <MosaicCard
                        card={routine.cards.morning}
                        accent="border-campaign-skincare-coral/60 text-campaign-skincare-coral"
                        span="lg:col-span-3"
                    />

                    {/* Gel texture macro, the row's widest tile. */}
                    <MosaicTile
                        src={waterImage}
                        alt="מרקם מים וג'ל בגווני לילך"
                        sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
                        span="lg:col-span-5"
                    />
                    {/* Moisturizer on its arch. */}
                    <MosaicTile
                        src={moisturizerImage}
                        alt="בקבוק לחות על רקע גאומטרי לילך"
                        sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                        span="lg:col-span-4"
                    />
                    <MosaicCard
                        card={routine.cards.evening}
                        accent="border-foreground/30 text-foreground"
                        span="lg:col-span-3"
                    />

                    {/* Sunscreen cap macro. */}
                    <MosaicTile
                        src={spfCapImage}
                        alt="תקריב רטוב של מכסה קרם ההגנה"
                        sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                        span="lg:col-span-4"
                    />
                    <MosaicCard
                        card={routine.cards.protection}
                        accent="border-campaign-skincare-coral/60 text-campaign-skincare-coral"
                        span="lg:col-span-4"
                    />
                    {/* Model holding the tube. */}
                    <MosaicTile
                        src={modelSpfImage}
                        alt="אישה מחזיקה קרם הגנה לצד פניה"
                        sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                        span="lg:col-span-4"
                    />
                </div>
            </div>
        </section>
    );
}
