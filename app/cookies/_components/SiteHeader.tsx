import Link from "next/link";

import { navigation, releaseMarker } from "../content";

export function SiteHeader() {
    return (
        <header className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-4 px-6 py-6 sm:flex-nowrap sm:px-10 sm:py-7">
            <Link href="/" aria-label="קרמב, חזרה לעמוד הראשי" className="font-display text-3xl">
                קרמב<span className="text-campaign-cookies-raspberry">.</span>
            </Link>
            <nav
                aria-label="ניווט ראשי"
                className="order-3 flex w-full items-center justify-center gap-3 text-sm sm:order-none sm:w-auto sm:gap-4 sm:text-base"
            >
                {navigation.map((item, index) => (
                    <span key={item.href} className="flex items-center gap-4">
                        {index > 0 && (
                            <span aria-hidden="true" className="text-subtle-foreground">
                                /
                            </span>
                        )}
                        <a href={item.href} className="underline-offset-4 hover:underline">
                            {item.label}
                        </a>
                    </span>
                ))}
            </nav>
            {/* dir: the bidi algorithm would otherwise swap the halves around the dash. */}
            <p dir="ltr" className="text-muted-foreground text-sm tabular-nums">
                {releaseMarker}
            </p>
        </header>
    );
}
