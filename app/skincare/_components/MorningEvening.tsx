import { ScrollReveal } from "@/components/ScrollReveal";

import { routine } from "../content";

/*
 * The campaign's organizing idea: one product family, rearranged between
 * morning and evening. The sunscreen chip appears only in the morning card —
 * the family is rearranged, never replaced.
 */

function TimeCard({
    time,
    accent,
    delay,
}: {
    time: typeof routine.morning;
    accent: string;
    delay: number;
}) {
    return (
        <ScrollReveal
            delay={delay}
            className="flex flex-col gap-5 rounded-3xl bg-accent p-8 lg:p-10"
        >
            <span
                className={`flex size-12 items-center justify-center rounded-full border ${accent}`}
            >
                <time.icon aria-hidden strokeWidth={1.5} className="size-6" />
            </span>
            <h3 className="font-bold font-display text-2xl">{time.title}</h3>
            <p className="text-pretty text-base text-muted-foreground">{time.body}</p>
            <ul className="mt-1 flex flex-wrap gap-2">
                {time.items.map((item) => (
                    <li
                        key={item}
                        className="rounded-full border border-campaign-skincare-lavender bg-background px-4 py-1.5 text-sm"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </ScrollReveal>
    );
}

export function MorningEvening() {
    return (
        <section id="routine" className="py-16 lg:py-24">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 sm:px-10">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="font-bold font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight">
                        {routine.heading}
                    </h2>
                    <p className="text-lg text-muted-foreground">{routine.support}</p>
                </div>
                <div className="grid w-full gap-8 text-start sm:grid-cols-2">
                    <TimeCard
                        time={routine.morning}
                        accent="border-campaign-skincare-coral/60 text-campaign-skincare-coral"
                        delay={0}
                    />
                    <TimeCard
                        time={routine.evening}
                        accent="border-foreground/30 text-foreground"
                        delay={120}
                    />
                </div>
            </div>
        </section>
    );
}
