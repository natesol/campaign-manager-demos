import Image from "next/image";

import { cocoa, type Flavor, pistachio, raspberry } from "../content";

/*
 * The first viewport follows the approved triangular composition: the slogan
 * remains the dominant object, while each production cookie is also a direct
 * selector for its flavor chapter. The compact layouts recompose those same
 * controls instead of cropping the desktop arrangement.
 */

function HeroFlavor({
    flavor,
    imageSize,
    imageOffset,
    labelOffset,
    labelSide,
}: {
    flavor: Flavor;
    imageSize: string;
    imageOffset: string;
    labelOffset: string;
    labelSide: "start" | "end";
}) {
    const label = (
        <span
            className={`order-2 flex max-w-40 shrink-0 flex-col gap-1 sm:items-center xl:order-none xl:items-start ${labelOffset}`}
        >
            <span
                className={`font-display text-2xl tabular-nums leading-none xl:text-3xl ${flavor.accent}`}
            >
                {flavor.number}
            </span>
            <span className="font-bold text-sm leading-tight xl:text-base">{flavor.name}</span>
            <span className="text-muted-foreground text-xs leading-tight xl:text-sm">
                {flavor.lead}
            </span>
        </span>
    );
    const connector = (
        <span
            aria-hidden="true"
            className={`mt-9 hidden h-px w-12 shrink-0 bg-foreground/70 xl:block ${
                labelSide === "start" ? "rotate-[22deg]" : "-rotate-[22deg]"
            }`}
        />
    );
    const cookie = (
        <span
            className={`relative order-1 block shrink-0 transition-transform duration-700 ease-out group-hover:-translate-y-3 group-focus-visible:-translate-y-3 xl:order-none ${imageOffset}`}
        >
            <Image
                src={flavor.heroImage}
                alt=""
                loading="eager"
                sizes="(max-width: 639px) 8rem, (max-width: 1279px) 11rem, 23rem"
                className={`h-auto select-none drop-shadow-[0_1.25rem_1.5rem_rgba(63,42,24,0.08)] ${imageSize}`}
            />
        </span>
    );

    return (
        <a
            href={`#${flavor.id}`}
            aria-label={`לצפייה בטעם ${flavor.name}`}
            className="group flex w-full max-w-sm items-center gap-5 outline-offset-8 focus-visible:outline-2 focus-visible:outline-foreground sm:w-auto sm:max-w-none sm:flex-col sm:gap-3 sm:text-center xl:flex-row xl:items-start xl:gap-2 xl:text-start"
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
            aria-labelledby="hero-heading"
            className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 pt-5 lg:mb-12 lg:px-10 xl:block xl:h-[49rem] xl:pt-0"
        >
            <h1
                id="hero-heading"
                className="z-10 text-balance text-center font-display text-[clamp(4.25rem,11vw,9rem)] leading-[0.9] xl:absolute xl:inset-x-0 xl:top-[7%]"
            >
                שלושה
                <br />
                טעמים
                <br />
                <span className="text-campaign-cookies-raspberry">דרופ אחד.</span>
            </h1>

            <div className="flex w-full flex-col items-center gap-8 sm:grid sm:grid-cols-3 sm:items-start sm:justify-items-center xl:contents">
                <div className="xl:absolute xl:end-[-8%] xl:top-[9%]">
                    <HeroFlavor
                        flavor={pistachio}
                        imageSize="w-32 sm:w-44 lg:w-52 xl:w-[21rem]"
                        imageOffset="xl:mt-16"
                        labelOffset="xl:-translate-x-10"
                        labelSide="start"
                    />
                </div>
                <div className="xl:absolute xl:start-[-8%] xl:top-[26%]">
                    <HeroFlavor
                        flavor={raspberry}
                        imageSize="w-32 sm:w-44 lg:w-52 xl:w-[21rem]"
                        imageOffset="xl:mt-14"
                        labelOffset="xl:translate-x-10"
                        labelSide="end"
                    />
                </div>
                <div className="xl:absolute xl:end-[31%] xl:top-[64%]">
                    <HeroFlavor
                        flavor={cocoa}
                        imageSize="w-32 sm:w-44 lg:w-52 xl:w-[21rem]"
                        imageOffset="xl:mt-7"
                        labelOffset=""
                        labelSide="start"
                    />
                </div>
            </div>
        </section>
    );
}
