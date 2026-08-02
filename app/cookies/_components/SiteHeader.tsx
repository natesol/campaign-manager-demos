import Link from "next/link";

import { navigation, releaseMarker } from "../content";

export function SiteHeader() {
    return (
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-7 sm:px-10">
            <Link href="/" className="font-bold font-display text-3xl">
                קרמב<span className="text-campaign-cookies-raspberry">.</span>
            </Link>
            <nav className="hidden items-center gap-4 text-base sm:flex">
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
