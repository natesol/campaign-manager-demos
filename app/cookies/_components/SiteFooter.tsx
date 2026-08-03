import { AtSign, Camera, MessageCircle } from "lucide-react";

import { cocoa, footer, pistachio, raspberry } from "../content";

const trio = [pistachio, raspberry, cocoa];

/* Stand-ins for the brand's social icons, which this lucide version no longer carries. */
const socials = [
    { name: "אינסטגרם", icon: Camera },
    { name: "פייסבוק", icon: AtSign },
    { name: "וואטסאפ", icon: MessageCircle },
];

/* A link with nowhere real to go yet; it still looks and behaves like one. */
function DeadLink({ label }: { label: string }) {
    return (
        <a href="#hero" className="underline-offset-4 hover:underline">
            {label}
        </a>
    );
}

export function SiteFooter() {
    return (
        <footer className="bg-background">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-20 lg:gap-16 lg:px-10 lg:py-24">
                <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
                    <div className="flex flex-col gap-3">
                        <p className="font-display text-5xl">
                            קרמב<span className="text-campaign-cookies-raspberry">.</span>
                        </p>
                        <p className="text-lg text-muted-foreground">{footer.brandLine}</p>
                    </div>
                    <div className="relative">
                        <span
                            aria-hidden="true"
                            className="absolute inset-x-8 top-4 h-px bg-linear-to-l from-campaign-cookies-pistachio via-campaign-cookies-raspberry to-campaign-cookies-chocolate"
                        />
                        <ul className="relative flex flex-wrap items-start gap-x-10 gap-y-5 sm:gap-x-14">
                            {trio.map((flavor) => (
                                <li key={flavor.id} className="flex flex-col items-center gap-2">
                                    <span className="bg-background px-2">
                                        <flavor.icon
                                            aria-hidden
                                            strokeWidth={1.5}
                                            className={`size-7 ${flavor.accent}`}
                                        />
                                    </span>
                                    <a
                                        href={`#${flavor.id}`}
                                        className={`font-bold text-sm underline-offset-4 hover:underline ${flavor.accent}`}
                                    >
                                        {flavor.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid gap-10 border-border border-t pt-12 sm:grid-cols-3">
                    <div className="flex flex-col gap-4">
                        <p className="font-bold text-campaign-cookies-pistachio text-lg">ניווט</p>
                        <ul className="flex flex-col gap-2 text-base text-muted-foreground">
                            {footer.nav.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="underline-offset-4 hover:underline"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-bold text-campaign-cookies-raspberry text-lg">מידע</p>
                        <ul className="flex flex-col gap-2 text-base text-muted-foreground">
                            {footer.info.map((item) => (
                                <li key={item}>
                                    <DeadLink label={item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-bold text-lg">דברו איתנו</p>
                        <ul className="flex flex-col gap-2 text-base text-muted-foreground tabular-nums">
                            <li>
                                <a
                                    dir="ltr"
                                    href={`mailto:${footer.contact.email}`}
                                    className="underline-offset-4 hover:underline"
                                >
                                    {footer.contact.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    dir="ltr"
                                    href={`tel:+972${footer.contact.phone.replace(/^0/, "").replace(/-/g, "")}`}
                                    className="underline-offset-4 hover:underline"
                                >
                                    {footer.contact.phone}
                                </a>
                            </li>
                            <li>
                                {footer.contact.days} <span dir="ltr">{footer.contact.hours}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-6 border-border border-t pt-8 lg:flex-row">
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-subtle-foreground">
                        <p>{footer.rights}</p>
                        {footer.legal.map((item) => (
                            <span key={item} className="flex items-center gap-4">
                                <span aria-hidden="true">|</span>
                                <DeadLink label={item} />
                            </span>
                        ))}
                    </div>
                    <ul className="flex gap-3">
                        {socials.map((social) => (
                            <li key={social.name}>
                                <a
                                    href="#hero"
                                    aria-label={social.name}
                                    className="flex size-11 items-center justify-center rounded-full border border-foreground/60 transition-colors hover:bg-foreground/10"
                                >
                                    <social.icon aria-hidden strokeWidth={1.5} className="size-5" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
