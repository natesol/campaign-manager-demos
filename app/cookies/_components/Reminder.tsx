import Image from "next/image";

import { Bell, Lock } from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";

import reminderStackImage from "../_assets/cookie-drop_asset-08_reminder-stack_v1.webp";
import { ReminderForm } from "./ReminderForm";

/*
 * The page's one action. The form is demonstrative: nothing is sent or stored,
 * and ReminderForm's completed state says so plainly.
 */
export function Reminder() {
    return (
        <section
            id="reminder"
            aria-labelledby="reminder-heading"
            className="flex scroll-mt-8 flex-col justify-center py-16 lg:min-h-svh lg:py-20"
        >
            {/* The action comes first in the DOM, so phones reach the form before
                the product shot; the md order classes restore the mockup side. */}
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] md:gap-10 lg:gap-14 lg:px-10">
                <ScrollReveal className="flex flex-col items-center gap-6 text-center md:order-2 md:items-start md:text-start">
                    <span className="flex items-center gap-3">
                        <span className="size-1.5 rounded-full bg-campaign-cookies-pistachio" />
                        <Bell aria-hidden strokeWidth={1.5} className="size-8" />
                        <span className="size-1.5 rounded-full bg-campaign-cookies-raspberry" />
                    </span>
                    <h2
                        id="reminder-heading"
                        className="font-bold font-display text-[clamp(2.75rem,6.5vw,4.75rem)] leading-none"
                    >
                        תופסים את הדרופ
                        <br />
                        <span className="text-campaign-cookies-raspberry">בזמן.</span>
                    </h2>
                    <p className="max-w-md text-pretty text-lg text-muted-foreground">
                        הירשמו עכשיו וקבלו תזכורת לפני שהמהדורה המוגבלת נפתחת.
                    </p>
                    <ReminderForm />
                    <p className="flex items-center gap-2 text-sm text-subtle-foreground">
                        <Lock aria-hidden strokeWidth={1.5} className="size-4" />
                        הפרטים שלכם נשמרים באופן מאובטח. בלי ספאם.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={120} motion="soft" className="flex justify-center md:order-1">
                    <Image
                        src={reminderStackImage}
                        alt="שלוש עוגיות המהדורה המוגבלת לצד מארז קרמב"
                        sizes="(max-width: 767px) 92vw, (max-width: 1279px) 52vw, 44rem"
                        className="h-auto w-full max-w-[44rem] select-none drop-shadow-[0_1.5rem_2rem_rgba(63,42,24,0.08)]"
                    />
                </ScrollReveal>
            </div>
        </section>
    );
}
