import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { DemoPreview } from "./DemoPreview";
import { type Demo, demos } from "./demos";

// The numeral is the one place a campaign's accent appears on this page, so the
// saturated color only ever carries large type.
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
                        className="group mx-auto my-8 flex w-full max-w-7xl flex-wrap items-center gap-6 px-4 py-5 transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-current focus-visible:-outline-offset-4 sm:px-6 lg:my-16 lg:gap-10 lg:px-8 lg:py-8"
                    >
                        {/* Text asks for a readable column, the preview for one step
                            more, both from the container scale. Side by side while
                            they fit, stacked when they do not. */}
                        <div className="flex grow basis-md flex-col gap-4 lg:gap-6">
                            <div className={`flex items-center gap-4 lg:gap-5 ${fadeUntilHover}`}>
                                <span
                                    className={`font-display text-4xl tabular-nums leading-none lg:text-5xl ${accent[demo.theme]}`}
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
                                <h2 className="whitespace-pre-line text-balance font-bold font-display text-3xl tracking-tight sm:text-4xl xl:text-5xl">
                                    {demo.campaign}
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
                        <div className="aspect-video grow basis-lg overflow-hidden rounded-sm border border-current/20">
                            <DemoPreview theme={demo.theme} />
                        </div>
                    </Link>
                </li>
            ))}
        </ol>
    );
}
