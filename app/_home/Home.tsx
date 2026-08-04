import { Noto_Sans_Hebrew } from "next/font/google";

import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { PosterBands } from "./PosterBands";

/* The home page's own display face, loaded here rather than in the root layout so
   the page carries its own design, the way the cookies page brings the same family
   for its campaign. The wdth axis is requested so the width is ours to set. */
const notoSansHebrew = Noto_Sans_Hebrew({
    variable: "--font-noto-sans-hebrew",
    weight: "variable",
    subsets: ["hebrew", "latin"],
    axes: ["wdth"],
});

export function Home() {
    return (
        // The root routes --display-font, so every font-display on the page follows
        // it, exactly as cookies.css does for its own campaign.
        <div
            className={`${notoSansHebrew.variable} min-h-screen bg-background text-foreground [--display-font:var(--font-noto-sans-hebrew),system-ui,sans-serif]`}
        >
            <Hero />
            <main>
                <PosterBands />
            </main>
            <Footer />
        </div>
    );
}
