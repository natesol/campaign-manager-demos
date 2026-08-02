import { dropDetails } from "../content";
import { ScrollReveal } from "./ScrollReveal";

/*
 * The release payoff reunites the trio and centralizes the release facts. It is
 * deliberately not a fourth flavor chapter: plain ivory ground, no tint.
 */
export function DropPayoff() {
    return (
        <section
            id="story"
            aria-labelledby="story-heading"
            className="flex flex-col justify-center py-16 lg:min-h-svh lg:py-24"
        >
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-14 lg:gap-20 lg:px-10">
                <ScrollReveal className="flex flex-col gap-8">
                    <h2
                        id="story-heading"
                        className="font-bold font-display text-[clamp(2.75rem,7.5vw,6rem)] leading-none"
                    >
                        דרופ אחד.
                        <br />
                        <span className="text-campaign-cookies-pistachio">ו</span>
                        <span className="text-campaign-cookies-raspberry">ז</span>
                        <span className="text-campaign-cookies-chocolate">ה</span>ו.
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

                {/* The reunited trio in its open box, read start to end:
                    pistachio, raspberry, chocolate. */}
                <ScrollReveal delay={120} className="flex justify-center">
                    <div className="relative aspect-[4/3] w-full max-w-lg rounded-2xl bg-foreground/10">
                        <span className="absolute start-[8%] top-[8%] size-32 rounded-full bg-campaign-cookies-pistachio/25 lg:size-44" />
                        <span className="absolute end-[8%] top-[12%] size-32 rounded-full bg-campaign-cookies-raspberry/20 lg:size-44" />
                        <span className="absolute start-[28%] bottom-[8%] size-32 rounded-full bg-campaign-cookies-chocolate/25 lg:size-44" />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
