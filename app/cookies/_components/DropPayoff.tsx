import Image from "next/image";

import { ScrollReveal } from "@/components/ScrollReveal";

import releaseTrayImage from "../_assets/cookie-drop_asset-07_release-tray_v1.webp";
import { dropDetails } from "../content";

/*
 * The release payoff reunites the trio and centralizes the release facts. It is
 * deliberately not a fourth flavor chapter: plain ivory ground, no tint.
 */
export function DropPayoff() {
    return (
        <section
            id="story"
            aria-labelledby="story-heading"
            className="flex scroll-mt-8 flex-col justify-center py-16 lg:min-h-svh lg:py-20"
        >
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:gap-10 lg:gap-14 lg:px-10">
                <ScrollReveal className="flex flex-col gap-7">
                    <h2
                        id="story-heading"
                        className="font-bold font-display text-[clamp(2.75rem,7.5vw,6rem)] leading-none"
                    >
                        דרופ אחד.
                        <br />
                        <span>ו</span>
                        <span className="text-campaign-cookies-raspberry">זה</span>
                        <span className="text-campaign-cookies-pistachio">ו</span>.
                    </h2>
                    <p className="text-pretty text-muted-foreground text-xl">
                        שלושה טעמים במהדורה חד-פעמית ובכמות מוגבלת.
                    </p>
                    <dl className="mt-4 grid gap-8 sm:grid-cols-3 sm:gap-0">
                        {dropDetails.map((detail, index) => (
                            <div
                                key={detail.label}
                                className={`flex flex-col items-center gap-2 px-4 text-center ${
                                    index > 0 ? "border-border sm:border-s" : ""
                                }`}
                            >
                                <detail.icon
                                    aria-hidden
                                    strokeWidth={1.5}
                                    className="size-7 text-foreground"
                                />
                                <dt className={`font-bold text-base ${detail.accent}`}>
                                    {detail.label}
                                </dt>
                                <dd className="flex flex-col gap-1">
                                    <span className="font-bold font-display text-3xl tabular-nums">
                                        {detail.value}
                                    </span>
                                    <span className="text-muted-foreground text-sm">
                                        {detail.caption}
                                    </span>
                                </dd>
                            </div>
                        ))}
                    </dl>
                    <p className="mt-2 self-center font-bold font-display text-2xl text-campaign-cookies-pistachio">
                        עד גמר המלאי.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={120} motion="soft" className="flex justify-center">
                    <Image
                        src={releaseTrayImage}
                        alt="מארז המהדורה המוגבלת עם שלושת טעמי העוגיות"
                        sizes="(max-width: 767px) 92vw, (max-width: 1279px) 52vw, 42rem"
                        className="h-auto w-full max-w-[42rem] select-none drop-shadow-[0_1.5rem_2rem_rgba(63,42,24,0.08)]"
                    />
                </ScrollReveal>
            </div>
        </section>
    );
}
