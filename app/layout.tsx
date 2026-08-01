import type { Metadata } from "next";
import { Assistant, Rubik } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "./_components/ThemeProvider";

// shadcn's init adds Geist here as --font-sans. It carries no Hebrew, and every
// page on this site is Hebrew, so the families below stay the sans and display
// faces. Re-running `shadcn init` will try to add it back.
const assistant = Assistant({
    variable: "--font-assistant",
    subsets: ["hebrew", "latin"],
});

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["hebrew", "latin"],
});

// The template applies to child segments only, so app/page.tsx takes the default.
export const metadata: Metadata = {
    title: {
        default: "דמו קמפיינים",
        template: "%s | דמו קמפיינים",
    },
    robots: { index: false, follow: false },
};

// Every page is Hebrew and right-to-left, so lang and dir live on the document element.
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // suppressHydrationWarning: next-themes sets the class on this element
        // before React hydrates, so server and client markup differ by design.
        <html
            lang="he"
            dir="rtl"
            suppressHydrationWarning
            className={`${assistant.variable} ${rubik.variable} h-full antialiased`}
        >
            {/* Ground and ink come from the base layer in globals.css. */}
            <body className="flex min-h-full flex-col font-sans">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
