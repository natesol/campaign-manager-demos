import Link from "next/link";

import { Flower } from "lucide-react";

import { brand, navigation, primaryCta } from "../content";
import { Pill } from "./Pill";

/* The approved header: navigation on the right, the campaign mark dead center,
   the action on the left, all on one compact baseline. */
export function SiteHeader() {
    return (
        <header className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 py-6 sm:px-10">
            <nav className="hidden items-center gap-8 text-base sm:flex">
                {navigation.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="underline-offset-4 hover:underline"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
            <Link
                href="/"
                className="col-start-2 flex items-center gap-2 font-bold font-display text-xl"
            >
                {brand}
                <Flower
                    aria-hidden
                    strokeWidth={2}
                    className="size-5 text-campaign-skincare-coral"
                />
            </Link>
            {/* On phones the hero cue and closing CTA carry the action. */}
            <Pill
                href={primaryCta.href}
                size="sm"
                className="hidden justify-self-end whitespace-nowrap sm:inline-flex"
            >
                {primaryCta.label}
            </Pill>
        </header>
    );
}
