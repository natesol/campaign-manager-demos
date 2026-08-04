import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { DemoPreview } from "./DemoPreview";
import { type Demo, demos } from "./demos";

// The campaign's accent carries only large type: the numeral, and the same
// slogan words the campaign's own page paints.
const accent: Record<Demo["theme"], string> = {
    cookies: "text-campaign-cookies-raspberry",
    skincare: "text-campaign-skincare-coral",
    mortgage: "text-campaign-mortgage-accent",
};

// The supporting lines sit back until the band is hovered. The campaign name and
// its description never fade: they are what the band is for.
const fadeUntilHover = "opacity-80 transition-opacity group-hover:opacity-100";

export function PosterBands() {
    return (
        <ol>
            {demos.map((demo, index) => (
                // Most of the vertical space is the link's margin rather than its
                // padding, so the quiet space between bands stays unclickable.
                // flow-root keeps that margin from collapsing out of the li.
                <li key={demo.href} className="flow-root">
                    <Link
                        href={demo.href}
                        className="group mx-auto below-lg:my-8 my-16 flex w-full max-w-7xl flex-wrap items-center below-lg:gap-6 gap-10 below-lg:px-6 below-sm:px-4 px-8 below-lg:py-5 py-8 focus-visible:outline-2 focus-visible:outline-current focus-visible:-outline-offset-4"
                    >
                        {/* Text asks for a readable column, the preview for one step
                            more, both from the container scale. Side by side while
                            they fit, stacked when they do not. */}
                        <div className="flex grow basis-md flex-col below-lg:gap-4 gap-6">
                            <div
                                className={`flex items-center below-lg:gap-4 gap-5 ${fadeUntilHover}`}
                            >
                                <span
                                    className={`font-display below-lg:text-4xl text-5xl tabular-nums leading-none ${accent[demo.theme]}`}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <p className="text-sm">
                                    <span className="block font-semibold">{demo.company}</span>
                                    <span className="block">{demo.sector}</span>
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p
                                    className={`font-medium text-sm tracking-eyebrow ${fadeUntilHover}`}
                                >
                                    {demo.product}
                                </p>
                                <h2 className="whitespace-pre-line text-balance font-black font-display below-sm:text-3xl below-xl:text-4xl text-5xl tracking-tight">
                                    {demo.campaign.map((segment, segmentIndex) =>
                                        segment.accent ? (
                                            <span
                                                // biome-ignore lint/suspicious/noArrayIndexKey: segments are a fixed literal list
                                                key={segmentIndex}
                                                className={accent[demo.theme]}
                                            >
                                                {segment.text}
                                            </span>
                                        ) : (
                                            // biome-ignore lint/suspicious/noArrayIndexKey: segments are a fixed literal list
                                            <span key={segmentIndex}>{segment.text}</span>
                                        ),
                                    )}
                                </h2>
                                <p className="max-w-xl text-pretty text-base">{demo.description}</p>
                            </div>
                            <span
                                className={`inline-flex items-center gap-2 self-start font-semibold text-sm ${fadeUntilHover}`}
                            >
                                לצפייה בפרויקט
                                <ArrowLeft
                                    aria-hidden="true"
                                    className="size-4 transition-transform group-hover:-translate-x-1"
                                />
                            </span>
                        </div>
                        <div className="aspect-video grow basis-lg overflow-hidden border-2 border-[#f9fafb] shadow-[0_0_0_0.1rem_#0f182b05,0_0_0.75rem_-0.25rem_#0f172c1a]">
                            <DemoPreview theme={demo.theme} />
                        </div>
                    </Link>
                </li>
            ))}
        </ol>
    );
}
