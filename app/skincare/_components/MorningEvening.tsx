import Image, { type StaticImageData } from "next/image";

import { ScrollReveal } from "@/components/ScrollReveal";

import cleanserImage from "../_assets/seasonal-skincare_asset-02_grid-cleansing-water_v2.webp";
import promenadeImage from "../_assets/seasonal-skincare_asset-03_grid-summer-promenade_v1.webp";
import moisturizerImage from "../_assets/seasonal-skincare_asset-04_grid-moisturizer_v1.webp";
import waterImage from "../_assets/seasonal-skincare_asset-05_grid-water-ripple_v1.webp";
import modelSpfImage from "../_assets/seasonal-skincare_asset-06_grid-model-spf_v1.webp";
import spfCapImage from "../_assets/seasonal-skincare_asset-07_grid-spf-water-closeup_v1.webp";
import { routine } from "../content";
import { AccentedFirstWord } from "./AccentBurst";

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
            className={`group flex min-h-52 flex-col items-center justify-center gap-3 bg-accent p-5 text-center transition-[background-color,box-shadow] duration-[var(--skincare-motion-duration)] ease-out hover:bg-campaign-skincare-lavender/25 hover:shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-campaign-skincare-lavender)_45%,transparent)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/35 focus-visible:ring-inset ${span}`}
        >
            <span
                className={`flex size-11 items-center justify-center rounded-full border transition-transform duration-[var(--skincare-motion-duration)] ease-out group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5 motion-reduce:transform-none ${accent}`}
            >
                <card.icon aria-hidden strokeWidth={1.5} className="size-5" />
            </span>
            <span className="font-display font-semibold text-2xl">{card.title}</span>
            <span className="text-pretty text-muted-foreground text-sm">{card.body}</span>
        </a>
    );
}

function MosaicTile({
    src,
    alt,
    span,
    sizes,
    position = "object-center",
}: {
    src: StaticImageData;
    alt: string;
    span: string;
    sizes: string;
    position?: string;
}) {
    return (
        <div className={`relative min-h-52 overflow-hidden ${span}`}>
            <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover ${position}`} />
        </div>
    );
}

export function MorningEvening() {
    return (
        <section id="routine" className="below-lg:py-16 py-24">
            <div className="mx-auto w-full max-w-7xl below-sm:px-6 px-10">
                <div className="grid below-lg:grid-cols-2 below-sm:grid-cols-1 grid-cols-12 below-lg:grid-rows-none grid-rows-[auto_15rem_15rem_15rem] gap-4">
                    {/* Heading block: a short first row on the start side; the tall
                        cleanser shot spans this row and the next. */}
                    <ScrollReveal
                        motion="soft"
                        className="below-lg:col-span-2 below-sm:col-span-1 col-span-7 flex flex-col justify-center gap-3 below-lg:pe-0 pe-16 below-lg:pb-6 pb-0"
                    >
                        <h2 className="font-display font-semibold text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight">
                            <AccentedFirstWord text={routine.heading} />
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
                        span="col-span-5 row-span-2 below-lg:col-span-1 below-lg:row-span-1"
                    />

                    {/* Summer lifestyle photograph. */}
                    <MosaicTile
                        src={promenadeImage}
                        alt="אישה צועדת בטיילת קיצית ליד הים"
                        sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                        position="object-top"
                        span="col-span-4 below-lg:col-span-1"
                    />
                    <MosaicCard
                        card={routine.cards.morning}
                        accent="border-campaign-skincare-coral/60 text-campaign-skincare-coral"
                        span="col-span-3 below-lg:col-span-1"
                    />

                    {/* Gel texture macro, the row's widest tile. */}
                    <MosaicTile
                        src={waterImage}
                        alt="מרקם מים וג'ל בגווני לילך"
                        sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
                        span="col-span-5 below-lg:col-span-1"
                    />
                    {/* Moisturizer on its arch. */}
                    <MosaicTile
                        src={moisturizerImage}
                        alt="בקבוק לחות על רקע גאומטרי לילך"
                        sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                        position="object-top"
                        span="col-span-4 below-lg:col-span-1"
                    />
                    <MosaicCard
                        card={routine.cards.evening}
                        accent="border-foreground/30 text-foreground"
                        span="col-span-3 below-lg:col-span-1"
                    />

                    {/* Sunscreen cap macro. */}
                    <MosaicTile
                        src={spfCapImage}
                        alt="תקריב רטוב של מכסה קרם ההגנה"
                        sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                        span="col-span-4 below-lg:col-span-1"
                    />
                    <MosaicCard
                        card={routine.cards.protection}
                        accent="border-campaign-skincare-coral/60 text-campaign-skincare-coral"
                        span="col-span-4 below-lg:col-span-1"
                    />
                    {/* Model holding the tube. */}
                    <MosaicTile
                        src={modelSpfImage}
                        alt="אישה מחזיקה קרם הגנה לצד פניה"
                        sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                        span="col-span-4 below-lg:col-span-1"
                    />
                </div>
            </div>
        </section>
    );
}
