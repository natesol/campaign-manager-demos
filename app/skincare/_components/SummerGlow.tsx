import Image from "next/image";

import { ScrollReveal } from "@/components/ScrollReveal";

import gelRibbonImage from "../_assets/seasonal-skincare_asset-11_feature-gel-ribbon_v1.webp";
import { glow } from "../content";
import { AccentedFirstWord } from "./AccentBurst";
import { Pill } from "./Pill";

/*
 * The seasonal promise on a full-width lavender band. The texture image plane
 * runs flush to the page edge with square corners, as in the design; the copy
 * holds the start half.
 */
export function SummerGlow() {
    return (
        <section id="glow" className="bg-accent">
            <div className="skincare-container grid below-lg:grid-cols-1 grid-cols-2 items-stretch below-sm:px-6 px-16">
                <ScrollReveal
                    motion="soft"
                    className="flex w-full flex-col justify-center gap-6 below-lg:py-16 py-24"
                >
                    <h2 className="max-w-md font-display font-semibold text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight">
                        <AccentedFirstWord text={glow.headingLines[0]} />
                        <br />
                        {glow.headingLines[1]}
                        <br />
                        {glow.headingLines[2]}
                    </h2>
                    <div className="flex max-w-md flex-col gap-3 text-pretty text-lg text-muted-foreground">
                        <p>{glow.body}</p>
                        <p>{glow.secondaryBody}</p>
                    </div>
                    <Pill href={glow.cta.href} className="self-start bg-background">
                        {glow.cta.label}
                    </Pill>
                </ScrollReveal>

                <ScrollReveal
                    delay={80}
                    motion="soft"
                    className="relative below-lg:min-h-80 min-h-[32rem] overflow-hidden bg-campaign-skincare-lavender/40"
                >
                    <Image
                        src={gelRibbonImage}
                        alt="מרקם ג'ל שקוף בתנועה זורמת"
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                    />
                </ScrollReveal>
            </div>
        </section>
    );
}
