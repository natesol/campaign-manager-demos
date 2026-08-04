import { AtSign, Camera, Flower, Music } from "lucide-react";

import { brand, footer } from "../content";

/*
 * The final design's light four-column footer: brand, navigation, customer
 * service, contact, then socials and the rights line.
 */

/* Stand-ins for Instagram, Facebook and TikTok, which this lucide version does not carry. */
const socials = [
    { name: "אינסטגרם", icon: Camera },
    { name: "פייסבוק", icon: AtSign },
    { name: "טיקטוק", icon: Music },
];

export function SiteFooter() {
    return (
        <footer className="bg-accent">
            <div className="skincare-container flex flex-col gap-12 below-sm:px-6 px-10 py-12">
                <div className="grid below-lg:grid-cols-2 below-sm:grid-cols-1 grid-cols-4 gap-10">
                    <div className="flex flex-col gap-3">
                        <p className="flex items-center gap-2 font-display font-semibold text-xl">
                            <Flower
                                aria-hidden
                                strokeWidth={2}
                                className="size-5 text-campaign-skincare-coral"
                            />
                            {brand}
                        </p>
                        <p className="text-base text-muted-foreground">{footer.brandLine}</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="font-display font-semibold text-base">{footer.nav.title}</p>
                        <ul className="flex flex-col gap-2 text-base text-muted-foreground">
                            {footer.nav.items.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="rounded-sm underline-offset-4 transition-colors duration-[var(--skincare-motion-duration)] hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="font-display font-semibold text-base">
                            {footer.service.title}
                        </p>
                        <ul className="flex flex-col gap-2 text-base text-muted-foreground">
                            {footer.service.items.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#hero"
                                        className="rounded-sm underline-offset-4 transition-colors duration-[var(--skincare-motion-duration)] hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="font-display font-semibold text-base">
                            {footer.contact.title}
                        </p>
                        <ul className="flex flex-col gap-3 text-base text-muted-foreground">
                            {footer.contact.items.map((item) => (
                                <li key={item.value} className="flex items-center gap-3">
                                    <item.icon
                                        aria-hidden
                                        strokeWidth={1.5}
                                        className="size-4 shrink-0"
                                    />
                                    {item.ltr ? <span dir="ltr">{item.value}</span> : item.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <ul className="flex justify-center gap-4">
                    {socials.map((social) => (
                        <li key={social.name}>
                            <a
                                href="#hero"
                                aria-label={social.name}
                                className="flex size-11 items-center justify-center rounded-full bg-accent transition-[background-color,box-shadow,transform] duration-[var(--skincare-motion-duration)] ease-out hover:-translate-y-0.5 hover:bg-campaign-skincare-lavender/30 hover:shadow-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/35 active:translate-y-0 motion-reduce:transform-none"
                            >
                                <social.icon aria-hidden strokeWidth={1.5} className="size-5" />
                            </a>
                        </li>
                    ))}
                </ul>

                <p className="text-center text-sm text-subtle-foreground">
                    {footer.rights.map((line) => (
                        <span key={line} className="block">
                            {line}
                        </span>
                    ))}
                </p>
            </div>
        </footer>
    );
}
