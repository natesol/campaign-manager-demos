import Link from "next/link";

import { Flower } from "lucide-react";

import { brand, navigation, primaryCta } from "../content";
import { Pill } from "./Pill";

/* The approved header: navigation on the right, the campaign mark dead center,
   the action on the left, all on one compact baseline. */
export function SiteHeader() {
    return (
        <header className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-6 below-sm:px-6 px-10 py-6">
            <nav className="flex below-sm:hidden items-center gap-8 text-base">
                {navigation.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="rounded-sm underline-offset-4 transition-colors duration-[var(--skincare-motion-duration)] hover:text-campaign-skincare-coral hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
            <Link
                href="/"
                className="col-start-2 flex items-center gap-2 rounded-sm font-display font-semibold text-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
            >
                {brand}
                <Flower
                    aria-hidden
                    strokeWidth={2}
                    className="size-5 text-campaign-skincare-coral"
                />
            </Link>
            {/* On phones the hero cue and closing CTA carry the action. */}
            <div className="block below-sm:hidden justify-self-end">
                <Pill href={primaryCta.href} size="sm" className="whitespace-nowrap">
                    {primaryCta.label}
                </Pill>
            </div>
        </header>
    );
}
