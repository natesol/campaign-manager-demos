import { Bell, Lock } from "lucide-react";

import { ReminderForm } from "./ReminderForm";
import { ScrollReveal } from "./ScrollReveal";

/*
 * The page's one action. The form is demonstrative: nothing is sent or stored,
 * and ReminderForm's completed state says so plainly.
 */
export function Reminder() {
    return (
        <section
            id="reminder"
            aria-labelledby="reminder-heading"
            className="flex flex-col justify-center py-16 lg:min-h-svh lg:py-24"
        >
            {/* The action comes first in the DOM, so phones reach the form before
                the product shot; the md order classes restore the mockup side. */}
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-14 lg:gap-20 lg:px-10">
                <ScrollReveal className="flex flex-col items-center gap-6 text-center md:order-2">
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

                {/* The stacked trio in front of its shipping box, top to bottom:
                    pistachio, raspberry, chocolate. */}
                <ScrollReveal delay={120} className="flex justify-center md:order-1">
                    <div className="relative py-6 pe-16">
                        <span className="absolute start-0 top-0 h-72 w-60 rounded-xl bg-foreground/10" />
                        <div className="relative flex flex-col items-center">
                            <span className="block size-44 rounded-full bg-campaign-cookies-pistachio/25" />
                            <span className="-mt-16 block size-48 rounded-full bg-campaign-cookies-raspberry/20" />
                            <span className="-mt-16 block size-52 rounded-full bg-campaign-cookies-chocolate/30" />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
