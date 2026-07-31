"use client";

import { type FormEvent, useState } from "react";

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
            <output className="flex w-full flex-col items-center gap-3 rounded-md border border-drop-pistachio/50 bg-drop-pistachio/10 px-6 py-8 text-center">
                <p className="font-bold font-display text-2xl text-drop-pistachio">
                    נרשמתם לתזכורת.
                </p>
                <p className="text-base text-drop-cocoa/80">
                    נזכיר לכם ב־03.09 בבוקר, רגע לפני שהמהדורה נפתחת.
                </p>
                <p className="text-drop-cocoa/60 text-sm">
                    זהו עמוד הדגמה — הכתובת {email ? `“${email}” ` : ""}לא נשלחה ולא נשמרה בשום
                    מקום.
                </p>
                <button
                    type="button"
                    onClick={() => {
                        setSubmitted(false);
                        setEmail("");
                    }}
                    className="text-drop-cocoa/70 text-sm underline underline-offset-4 hover:text-drop-cocoa"
                >
                    להרשמה נוספת
                </button>
            </output>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-3 rounded-md border border-drop-cocoa/20 p-3 sm:flex-row sm:items-center"
        >
            <label htmlFor="reminder-email" className="sr-only">
                כתובת האימייל שלך
            </label>
            <input
                id="reminder-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="כתובת האימייל שלך"
                className="flex-1 rounded-md bg-transparent px-4 py-3 text-base outline-none placeholder:text-drop-cocoa/50 focus-visible:outline-2 focus-visible:outline-drop-cocoa"
            />
            <button
                type="submit"
                className="rounded-md bg-drop-pistachio px-6 py-3 font-medium text-base text-drop-paper transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-drop-cocoa focus-visible:outline-offset-2"
            >
                שלחו לי תזכורת
            </button>
        </form>
    );
}
