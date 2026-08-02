import type { ReactNode } from "react";

/*
 * The campaign's one pill control: an indigo outline capsule with full-strength
 * border and text. The design generation varied the weight between buttons;
 * the system does not. Two sizes only, no variants.
 */
export function Pill({
    href,
    size = "md",
    className = "",
    children,
}: {
    href: string;
    size?: "sm" | "md";
    className?: string;
    children: ReactNode;
}) {
    const sizing = size === "sm" ? "px-5 py-2.5 text-sm" : "px-7 py-3 text-base";
    return (
        <a
            href={href}
            className={`inline-flex items-center justify-center gap-3 rounded-full border border-foreground font-medium transition-colors hover:bg-accent ${sizing} ${className}`}
        >
            {children}
        </a>
    );
}
