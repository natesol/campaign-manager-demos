"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Color-scheme provider for the home page.
 *
 * next-themes writes `class="dark"` onto the document element and reads the OS
 * preference for `system`. Only tokens defined under :root and .dark follow it —
 * the canvas and every campaign palette are set outside that pair, so the
 * campaign pages render identically whichever scheme is active.
 */
export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
