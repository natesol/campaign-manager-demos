import type { Metadata } from "next";
import { Assistant, Rubik } from "next/font/google";
import "./globals.css";

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
        <html
            lang="he"
            dir="rtl"
            className={`${assistant.variable} ${rubik.variable} h-full antialiased`}
        >
            <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
                {children}
            </body>
        </html>
    );
}
