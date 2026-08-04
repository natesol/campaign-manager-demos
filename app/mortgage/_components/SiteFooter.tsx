import { cn } from "@/lib/utils";

import type { FooterContent } from "../content";
import { BrandMark } from "./BrandMark";
import { contactIcons } from "./contact-icons";

type SiteFooterProps = {
    company: string;
    footer: FooterContent;
};

function ColumnHeading({ children }: { children: string }) {
    return (
        <h2 className="flex items-center gap-4 font-semibold text-base text-campaign-mortgage-accent">
            {children}
            <span aria-hidden className="h-px w-8 bg-current" />
        </h2>
    );
}

export function SiteFooter({ company, footer }: SiteFooterProps) {
    return (
        <footer className="below-lg:mt-16 mt-24 flex min-h-[32rem] flex-col bg-muted">
            <div
                className={cn(
                    "mortgage-container",
                    "grid below-lg:grid-cols-3 below-md:grid-cols-2 below-sm:grid-cols-none grid-cols-[1.35fr_.78fr_1fr_1fr] below-lg:gap-10 gap-20 below-lg:py-14 pt-20 pb-14",
                )}
            >
                <div className="below-lg:col-span-3 below-md:col-span-2 below-sm:col-auto">
                    <a
                        className="flex items-center gap-3 rounded-sm font-bold font-display text-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
                        href="#top"
                        aria-label={`${company}, דף הבית`}
                    >
                        <BrandMark compact />
                        <span>{company}</span>
                    </a>
                    <p className="mt-4 max-w-sm text-muted-foreground text-sm">{footer.line}</p>
                </div>

                <div>
                    <ColumnHeading>{footer.navigation.title}</ColumnHeading>
                    <ul className="mt-5 space-y-3 text-sm">
                        {footer.navigation.links.map((item) => (
                            <li key={item.label}>
                                {item.href ? (
                                    <a className="hover:text-primary" href={item.href}>
                                        {item.label}
                                    </a>
                                ) : (
                                    <span className="text-muted-foreground">{item.label}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <ColumnHeading>{footer.services.title}</ColumnHeading>
                    <ul className="mt-5 space-y-3 text-muted-foreground text-sm">
                        {footer.services.items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <ColumnHeading>{footer.contact.title}</ColumnHeading>
                    <ul className="mt-5 space-y-4 text-muted-foreground text-sm">
                        {footer.contact.items.map((item) => {
                            const Icon = contactIcons[item.icon];

                            return (
                                <li className="flex items-center gap-3" key={item.label}>
                                    <Icon
                                        aria-hidden
                                        className="size-4 text-campaign-mortgage-accent"
                                        strokeWidth={1.8}
                                    />
                                    <span dir="ltr">{item.label}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div
                className={cn(
                    "mortgage-container",
                    "mt-auto flex below-md:flex-col items-center below-md:items-stretch below-md:justify-normal justify-between gap-6 border-border border-t py-8 text-muted-foreground text-sm",
                )}
            >
                <p>
                    {footer.copyright}
                    {footer.disclaimer.map((sentence) => (
                        <span className="block text-subtle-foreground text-xs" key={sentence}>
                            {sentence}
                        </span>
                    ))}
                </p>
                <ul className="flex flex-wrap">
                    {footer.legal.map((item) => (
                        <li
                            className="border-border border-s px-4 first:border-0 first:ps-0"
                            key={item}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
