import { cocoa, type Flavor, pistachio, raspberry } from "../content";
import { Disc } from "./placeholders";

/*
 * The hero holds the only central campaign copy — the three-line slogan — and
 * uses the three cookies as direct flavor selectors around it, per the approved
 * mockup. Three arrangements by width: compact rows on phones, a three-across
 * band under the slogan through the middle widths, and the mockup's absolute
 * scatter from xl — the scatter needs the full canvas, and was verified against
 * the title's measured extents at 1280.
 */

/* The whole group is the control, so selection works on touch and never needs hover. */
function HeroFlavor({
    flavor,
    size,
    cookieOffset,
    labelSide,
}: {
    flavor: Flavor;
    size: string;
    cookieOffset: string;
    labelSide: "start" | "end";
}) {
    const label = (
        <span className="order-2 flex max-w-36 flex-col gap-0.5 sm:items-center xl:order-none xl:items-start">
            <span
                className={`font-bold font-display text-xl tabular-nums leading-none xl:text-2xl ${flavor.accent}`}
            >
                {flavor.number}
            </span>
            <span className="font-bold text-sm leading-tight">{flavor.name}</span>
            <span className="text-muted-foreground text-xs leading-tight">{flavor.lead}</span>
        </span>
    );
    const connector = (
        <span
            className={`mt-7 hidden h-px w-8 shrink-0 xl:block ${
                labelSide === "start" ? "rotate-[25deg]" : "-rotate-[25deg]"
            } ${flavor.rule}`}
        />
    );
    const cookie = (
        <span
            className={`relative isolate order-1 transition-transform duration-700 group-hover:-translate-y-3 xl:order-none ${cookieOffset}`}
        >
            {/* Brush stroke behind the cookie, along its diagonal motion. isolate
                keeps the -z-10 inside this box instead of behind the section. */}
            <span
                className={`absolute inset-0 -z-10 m-auto h-20 w-[170%] -rotate-45 rounded-full ${flavor.brush}`}
            />
            <Disc tone={flavor.disc} size={size} />
        </span>
    );
    return (
        /* One compact row on phones, a centered column from sm, and the mockup
           arrangement with the connector from xl. */
        <a
            href={`#${flavor.id}`}
            className="group flex w-full max-w-xs items-center gap-5 outline-offset-4 focus-visible:outline-2 focus-visible:outline-foreground sm:w-auto sm:max-w-none sm:flex-col sm:gap-4 sm:text-center xl:flex-row xl:items-start xl:text-start"
        >
            {labelSide === "start" ? (
                <>
                    {label}
                    {connector}
                    {cookie}
                </>
            ) : (
                <>
                    {cookie}
                    {connector}
                    {label}
                </>
            )}
        </a>
    );
}

export function Hero() {
    return (
        <section
            id="hero"
            className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 pt-6 lg:mb-24 lg:px-10 xl:block xl:h-[50rem]"
        >
            {/* Three lines, pink on the last alone, no period after טעמים. */}
            <h1 className="text-balance text-center font-bold font-display text-[clamp(4rem,11.5vw,9.5rem)] leading-none xl:absolute xl:inset-x-0 xl:top-[10%]">
                שלושה
                <br />
                טעמים
                <br />
                <span className="text-campaign-cookies-raspberry">דרופ אחד.</span>
            </h1>

            {/* Below xl the selectors sit under the slogan; at xl the wrapper
                dissolves and each takes its mockup position — pistachio upper
                left, raspberry mid right, cocoa low center. */}
            <div className="flex w-full flex-col items-center gap-8 sm:grid sm:grid-cols-3 sm:items-start sm:justify-items-center xl:contents">
                <div className="xl:absolute xl:end-[2%] xl:top-[12%]">
                    <HeroFlavor
                        flavor={pistachio}
                        size="size-28 sm:size-36 lg:size-44 xl:size-56"
                        cookieOffset="xl:-ms-16 xl:mt-24"
                        labelSide="start"
                    />
                </div>
                <div className="xl:absolute xl:start-[2%] xl:top-[30%]">
                    <HeroFlavor
                        flavor={raspberry}
                        size="size-28 sm:size-36 lg:size-44 xl:size-52"
                        cookieOffset="xl:-me-6 xl:mt-24"
                        labelSide="end"
                    />
                </div>
                <div className="xl:absolute xl:end-[35%] xl:top-[67%]">
                    <HeroFlavor
                        flavor={cocoa}
                        size="size-28 sm:size-36 lg:size-44 xl:size-48"
                        cookieOffset="xl:mt-12"
                        labelSide="start"
                    />
                </div>
            </div>
        </section>
    );
}
