import Image, { type StaticImageData } from "next/image";

import cookiesPreview from "../cookies/_assets/cookie-drop_asset-07_release-tray_v1.webp";
import mortgagePreview from "../mortgage/_assets/mortgage-counseling_full-preview.webp";
import skincarePreview from "../skincare/_assets/seasonal-skincare_asset-01_hero-trio_v3-transparent.webp";
import type { Demo } from "./demos";

/*
 * Each preview shows the campaign's own lead imagery on the campaign's paper.
 * The imports reach into the campaign folders deliberately: the home page
 * previews the campaigns, the same reason their identity colors are global.
 * A renamed asset breaks the build loudly rather than silently emptying a band.
 */
const previews: Record<
    Demo["theme"],
    { src: StaticImageData; paper: string; fit: "cover" | "contain" | "scroll" }
> = {
    /* The reunited trio in its open release tray. */
    cookies: { src: cookiesPreview, paper: "bg-campaign-cookies-paper", fit: "cover" },
    /* The transparent product trio, staged on the campaign's near-white paper. */
    skincare: { src: skincarePreview, paper: "bg-campaign-skincare-paper", fit: "contain" },
    /* The full-page capture: rests on the hero, scrolls the page on hover. */
    mortgage: { src: mortgagePreview, paper: "bg-campaign-mortgage-paper", fit: "scroll" },
};

/* Decorative: the band's text already names and describes the campaign. */
export function DemoPreview({ theme }: { theme: Demo["theme"] }) {
    const preview = previews[theme];
    return (
        <div
            aria-hidden="true"
            className={`relative isolate h-full w-full overflow-hidden ${preview.paper}`}
        >
            {preview.fit === "scroll" ? (
                /* A size container, so 100cqh below means this frame's height. The
                   strip flows at its own aspect, resting on its top; on hover it
                   travels until its bottom edge meets the frame's, which is what
                   calc(100cqh - 100%) says, and the shorter return duration snaps
                   it back without the full ride in reverse. */
                <div className="absolute inset-0 [container-type:size]">
                    <Image
                        src={preview.src}
                        alt=""
                        sizes="(min-width: 64rem) 40vw, 100vw"
                        className="absolute top-0 h-auto w-full transition-transform duration-700 ease-linear group-hover:translate-y-[calc(100cqh-100%)] group-hover:duration-[8000ms] motion-reduce:transform-none"
                    />
                </div>
            ) : preview.fit === "cover" ? (
                <Image
                    src={preview.src}
                    alt=""
                    fill
                    sizes="(min-width: 64rem) 40vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
                />
            ) : (
                <div className="absolute inset-4 transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none sm:inset-6">
                    <Image
                        src={preview.src}
                        alt=""
                        fill
                        sizes="(min-width: 64rem) 40vw, 100vw"
                        className="object-contain"
                    />
                </div>
            )}
        </div>
    );
}
