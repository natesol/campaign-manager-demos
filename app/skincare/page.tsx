import type { Metadata } from "next";

import "./skincare.css";
import { CampaignMoment } from "./_components/CampaignMoment";
import { Closing } from "./_components/Closing";
import { Formulas } from "./_components/Formulas";
import { Hero } from "./_components/Hero";
import { MorningEvening } from "./_components/MorningEvening";
import { ProductSequence } from "./_components/ProductSequence";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { SummerIntro } from "./_components/SummerIntro";

export const metadata: Metadata = {
    title: "בדיוק לעונה",
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
                <SummerIntro />
                <MorningEvening />
                <ProductSequence />
                <Formulas />
                <CampaignMoment />
                <Closing />
            </main>
            <SiteFooter />
        </div>
    );
}
