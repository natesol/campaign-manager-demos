import Image from "next/image";

import { Sparkles } from "lucide-react";

import heroTrio from "../_assets/seasonal-skincare_asset-01_hero-trio_v2.png";
import { hero } from "../content";

/*
 * The approved v3 hero: copy on the start side, the unified trio on its
 * transparent platform on the end side, and the circular scroll cue leading
 * into the routine below. Coral periods close the headline lines.
 */
export function Hero() {
    return (
        <section
            id="hero"
            className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pt-8 pb-6 sm:px-10 lg:min-h-[calc(100svh-7rem)] lg:justify-center"
        >
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
                <div className="flex flex-col gap-6">
                    <Sparkles
                        aria-hidden
                        strokeWidth={1.5}
                        className="size-7 text-campaign-skincare-coral"
                    />
                    <h1 className="font-bold font-display text-[clamp(2.75rem,6vw,5rem)] leading-[1.08]">
                        {hero.headline.map((line) => (
                            <span key={line.text} className="block">
                                {line.text}
                                {line.dot && (
                                    <span className="text-campaign-skincare-coral">.</span>
                                )}
                            </span>
                        ))}
                    </h1>
                    <p className="max-w-md text-pretty text-lg text-muted-foreground">
                        {hero.support}
                    </p>
                </div>
                {/* The product stage is itself the shortcut to the products. */}
                <a
                    href="#products"
                    className="flex justify-center transition-transform duration-500 hover:-translate-y-2"
                >
                    <span className="block w-full max-w-80 origin-bottom scale-110 lg:scale-150">
                        <Image
                            src={heroTrio}
                            alt="שלושת מוצרי שגרת הקיץ על במת זכוכית"
                            priority
                            sizes="(min-width: 1024px) 30rem, 80vw"
                            className="h-auto w-full"
                        />
                    </span>
                </a>
            </div>

            {/* The interaction cue: a circular control and a fine vertical line
                that carries the eye into the routine. */}
            <div className="flex flex-col items-center">
                <a
                    href="#routine"
                    className="flex size-20 items-center justify-center rounded-full border border-border p-2 text-center text-xs leading-tight transition-colors hover:bg-accent"
                >
                    {hero.cue}
                </a>
                <span aria-hidden="true" className="h-16 w-px bg-border" />
                <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-campaign-skincare-coral"
                />
            </div>
        </section>
    );
}
