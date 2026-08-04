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
    { src: StaticImageData; paper: string; fit: "cover" | "contain"; position?: string }
> = {
    /* The reunited trio in its open release tray. */
    cookies: { src: cookiesPreview, paper: "bg-campaign-cookies-paper", fit: "cover" },
    /* The transparent product trio, staged on the campaign's near-white paper. */
    skincare: { src: skincarePreview, paper: "bg-campaign-skincare-paper", fit: "contain" },
    /* The full-page capture, pinned to its top so the band shows the hero
       rather than an arbitrary slice of the strip. */
    mortgage: {
        src: mortgagePreview,
        paper: "bg-campaign-mortgage-paper",
        fit: "cover",
        position: "object-top",
    },
};

/* Decorative: the band's text already names and describes the campaign. */
export function DemoPreview({ theme }: { theme: Demo["theme"] }) {
    const preview = previews[theme];
    return (
        <div
            aria-hidden="true"
            className={`relative isolate h-full w-full overflow-hidden ${preview.paper}`}
        >
            {preview.fit === "cover" ? (
                <Image
                    src={preview.src}
                    alt=""
                    fill
                    sizes="(min-width: 64rem) 40vw, 100vw"
                    className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none ${preview.position ?? ""}`}
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
