import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";

import "./cookies.css";
import { DropPayoff } from "./_components/DropPayoff";
import { FlavorChapter } from "./_components/FlavorChapter";
import { Hero } from "./_components/Hero";
import { Reminder } from "./_components/Reminder";
import { SectionRail } from "./_components/SectionRail";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { cocoa, pistachio, raspberry } from "./content";

/* The campaign's display face; cookies.css routes --display-font to it. */
const notoSansHebrew = Noto_Sans_Hebrew({
    variable: "--font-noto-sans-hebrew",
    weight: "variable",
    subsets: ["hebrew", "latin"],
    axes: ["wdth"],
});

export const metadata: Metadata = {
    title: "דרופ של עוגיות",
};

export default function CookiesRoute() {
    return (
        // overflow-x-clip: the rotated brush strokes reach past the viewport.
        <div
            data-campaign="cookies"
            className={`${notoSansHebrew.variable} flex flex-1 flex-col overflow-x-clip bg-background text-foreground`}
        >
            <SectionRail />
            <SiteHeader />
            {/* Independent art-directed views become one continuous landing page
                through the shared ivory ground and generous transition space. */}
            <main className="flex flex-col gap-12 lg:gap-20">
                <Hero />
                <div id="flavors" className="flex flex-col gap-12 lg:gap-20">
                    <FlavorChapter flavor={pistachio} copySide="end" />
                    <FlavorChapter flavor={raspberry} copySide="start" />
                    <FlavorChapter flavor={cocoa} copySide="end" />
                </div>
                <DropPayoff />
                <Reminder />
            </main>
            <SiteFooter />
        </div>
    );
}
