import Image from "next/image";

import { Sparkles } from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";

import gelRibbonImage from "../_assets/seasonal-skincare_asset-11_feature-gel-ribbon_v1.webp";
import { glow } from "../content";
import { Pill } from "./Pill";

/*
 * The seasonal promise on a full-width lavender band. The texture image plane
 * runs flush to the page edge with square corners, as in the design; the copy
 * holds the start half.
 */
export function SummerGlow() {
    return (
        <section id="glow" className="bg-accent">
            <div className="grid items-stretch lg:grid-cols-2">
                <ScrollReveal
                    motion="soft"
                    className="flex flex-col justify-center gap-6 px-6 py-16 sm:px-10 lg:mx-auto lg:w-full lg:max-w-2xl lg:py-24 lg:ps-16"
                >
                    <h2 className="relative max-w-md font-bold font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight">
                        {glow.headingLines[0]}
                        <br />
                        {glow.headingLines[1]}
                        <br />
                        {glow.headingLines[2]}
                        <Sparkles
                            aria-hidden
                            strokeWidth={1.5}
                            className="absolute -end-2 bottom-2 size-6 text-campaign-skincare-coral"
                        />
                    </h2>
                    <p className="max-w-md text-pretty text-lg text-muted-foreground">
                        {glow.body}
                    </p>
                    <Pill href={glow.cta.href} className="self-start bg-background">
                        {glow.cta.label}
                    </Pill>
                </ScrollReveal>

                <ScrollReveal
                    delay={80}
                    motion="soft"
                    className="relative min-h-80 overflow-hidden bg-campaign-skincare-lavender/40 lg:min-h-[32rem]"
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
