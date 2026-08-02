import { Flower } from "lucide-react";

import { brand, footer } from "../content";

/* The compact deep-indigo footer: mark, navigation, and the required
   fictional-portfolio disclosure. It closes the page without a new concept. */
export function SiteFooter() {
    return (
        <footer className="bg-foreground text-background">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-14 text-center sm:px-10">
                <p className="flex items-center gap-2 font-bold font-display text-2xl">
                    {brand}
                    <Flower
                        aria-hidden
                        strokeWidth={2}
                        className="size-5 text-campaign-skincare-coral"
                    />
                </p>
                <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-base">
                    {footer.nav.map((item, index) => (
                        <span key={item.label} className="flex items-center gap-4">
                            {index > 0 && (
                                <span aria-hidden="true" className="text-background/40">
                                    |
                                </span>
                            )}
                            <a
                                href={item.href}
                                className="text-background/85 underline-offset-4 hover:underline"
                            >
                                {item.label}
                            </a>
                        </span>
                    ))}
                </nav>
                <p className="flex items-center gap-2 border-background/20 border-t pt-6 text-background/70 text-sm">
                    <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-campaign-skincare-coral"
                    />
                    {footer.disclosure}
                </p>
            </div>
        </footer>
    );
}
