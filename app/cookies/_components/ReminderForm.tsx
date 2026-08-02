"use client";

import { type FormEvent, useState } from "react";

import { Mail } from "lucide-react";

/**
 * Reminder capture for the drop.
 *
 * Nothing leaves the browser. The value is read, held in component state for the
 * confirmation line, and discarded on reset — there is no request, no storage,
 * and the result state says so, as the stage 1 constraints require.
 */
export function ReminderForm() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <output className="flex w-full flex-col items-center gap-3 rounded-lg border border-campaign-cookies-pistachio/50 bg-campaign-cookies-pistachio/10 px-6 py-8 text-center">
                <p className="font-bold font-display text-2xl text-campaign-cookies-pistachio">
                    נרשמתם לתזכורת.
                </p>
                <p className="text-base text-muted-foreground">
                    נזכיר לכם ב־03.09 בבוקר, רגע לפני שהמהדורה נפתחת.
                </p>
                <p className="text-sm text-subtle-foreground">
                    זהו עמוד הדגמה — הכתובת {email ? `“${email}” ` : ""}לא נשלחה ולא נשמרה בשום
                    מקום.
                </p>
                <button
                    type="button"
                    onClick={() => {
                        setSubmitted(false);
                        setEmail("");
                    }}
                    className="text-muted-foreground text-sm underline underline-offset-4 hover:text-foreground"
                >
                    להרשמה נוספת
                </button>
            </output>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <label htmlFor="reminder-email" className="sr-only">
                כתובת האימייל שלכם
            </label>
            <span className="relative flex-1">
                <input
                    id="reminder-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="כתובת האימייל שלכם"
                    className="w-full rounded-lg border border-border bg-background px-5 py-4 pe-12 text-base outline-none placeholder:text-subtle-foreground focus-visible:outline-2 focus-visible:outline-foreground"
                />
                <Mail
                    aria-hidden
                    strokeWidth={1.5}
                    className="absolute end-4 top-1/2 size-5 -translate-y-1/2 text-subtle-foreground"
                />
            </span>
            <button
                type="submit"
                className="rounded-lg bg-campaign-cookies-pistachio px-7 py-4 font-bold text-background text-base transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2"
            >
                שלחו לי תזכורת
            </button>
        </form>
    );
}
