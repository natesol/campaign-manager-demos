import type { Metadata, Viewport } from "next";

import "./skincare.css";
import { FinalCta } from "./_components/FinalCta";
import { Hero } from "./_components/Hero";
import { MorningEvening } from "./_components/MorningEvening";
import { ProductSequence } from "./_components/ProductSequence";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { SummerGlow } from "./_components/SummerGlow";
import { Testimonials } from "./_components/Testimonials";

export const metadata: Metadata = {
    title: "בדיוק לעונה",
};

export const viewport: Viewport = {
    themeColor: "#fbfafd",
};

export default function SkincareRoute() {
    return (
        <div
            data-campaign="skincare"
            className="flex flex-1 flex-col overflow-x-clip bg-background text-foreground"
        >
            <SiteHeader />
            <main className="flex flex-col">
                <Hero />
                <MorningEvening />
                <ProductSequence />
                <Testimonials />
                <SummerGlow />
                <FinalCta />
            </main>
            <SiteFooter />
        </div>
    );
}
