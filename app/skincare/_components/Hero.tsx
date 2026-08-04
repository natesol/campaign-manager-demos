import Image from "next/image";

import heroTrio from "../_assets/seasonal-skincare_asset-01_hero-trio_v3-transparent.webp";
import { hero } from "../content";
import { AccentBurst } from "./AccentBurst";

/*
 * The approved v3 hero: copy on the start side, the unified trio on its
 * transparent platform on the end side, and the circular scroll cue leading
 * into the routine below. Coral periods close the headline lines.
 */
export function Hero() {
    return (
        <section
            id="hero"
            className="skincare-container flex below-lg:min-h-auto min-h-[calc(100svh-7rem)] flex-col below-lg:justify-start justify-center gap-16 below-sm:px-6 px-16 pt-8 pb-6"
        >
            <div className="grid below-lg:grid-cols-1 grid-cols-2 items-center below-lg:gap-14 gap-10">
                <div className="flex flex-col gap-6">
                    <h1 className="font-display font-semibold text-[clamp(2.75rem,6vw,5rem)] leading-[1.08]">
                        {hero.headline.map((line, index) => (
                            <span key={line.text} className="block">
                                {index === 0 ? (
                                    <>
                                        <span className="relative inline-block">
                                            הקיץ
                                            <AccentBurst className="absolute -start-4 -top-2 size-5" />
                                        </span>{" "}
                                        הגיע
                                    </>
                                ) : (
                                    line.text
                                )}
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
                {/* The product stage is the hero's dominant visual, not a disguised control. */}
                <div className="relative -ms-12 below-lg:ms-0 -me-8 below-lg:me-0 flex justify-center">
                    <span className="block below-sm:w-[118%] w-[120%] max-w-[50rem] shrink-0">
                        <Image
                            src={heroTrio}
                            alt="שלושת מוצרי שגרת הקיץ על במת זכוכית"
                            priority
                            draggable={false}
                            sizes="(min-width: 1280px) 50rem, (min-width: 1024px) 56vw, 92vw"
                            className="h-auto w-full select-none"
                        />
                    </span>
                </div>
            </div>

            {/* The interaction cue: a circular control and a fine vertical line
                that carries the eye into the routine. */}
            <div className="mt-4 flex flex-col items-center">
                <a
                    href={hero.cue.href}
                    className="flex size-16 items-center justify-center rounded-full border border-border p-2 text-center text-xs leading-tight transition-colors duration-[var(--skincare-motion-duration)] hover:border-campaign-skincare-coral hover:bg-[var(--control-hover)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
                >
                    {hero.cue.label}
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
