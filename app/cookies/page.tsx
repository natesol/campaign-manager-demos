import type { Metadata } from "next";
import { Secular_One } from "next/font/google";

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
const secularOne = Secular_One({
    variable: "--font-secular-one",
    weight: "400",
    subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
    title: "דרופ של עוגיות",
};

export default function CookiesRoute() {
    return (
        // overflow-x-clip: the rotated brush strokes reach past the viewport.
        <div
            data-campaign="cookies"
            className={`${secularOne.variable} flex flex-1 flex-col overflow-x-clip bg-background text-foreground`}
        >
            <SectionRail />
            <SiteHeader />
            {/* The gaps here, and inside the flavors group, are the ivory
                breathing room between the tinted sections; the hero adds its
                own margin on top, so the opening gets double the air. */}
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
