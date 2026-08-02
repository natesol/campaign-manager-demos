"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";

import { ShieldCheck } from "lucide-react";

import type { ContactFormContent } from "../content";

export function ContactForm({ form }: { form: ContactFormContent }) {
    const [submitted, setSubmitted] = useState(false);
    const statusRef = useRef<HTMLDivElement>(null);
    const formTitleRef = useRef<HTMLHeadingElement>(null);
    const hasSubmittedRef = useRef(false);

    useEffect(() => {
        if (submitted) {
            hasSubmittedRef.current = true;
            statusRef.current?.focus();
        } else if (hasSubmittedRef.current) {
            formTitleRef.current?.focus();
        }
    }, [submitted]);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div
                className="mortgage-form mortgage-form--success"
                ref={statusRef}
                role="status"
                tabIndex={-1}
            >
                <ShieldCheck aria-hidden="true" />
                <p>{form.success}</p>
                <button
                    type="button"
                    className="mortgage-form__reset"
                    onClick={() => setSubmitted(false)}
                >
                    {form.reset}
                </button>
            </div>
        );
    }

    return (
        <form
            className="mortgage-form"
            onSubmit={handleSubmit}
            aria-describedby="mortgage-form-notice"
        >
            <h3 ref={formTitleRef} tabIndex={-1}>
                {form.title}
            </h3>

            <label htmlFor="mortgage-full-name">
                <span>{form.fullName}</span>
                <input
                    id="mortgage-full-name"
                    name="fullName"
                    autoComplete="name"
                    minLength={2}
                    maxLength={80}
                    required
                />
            </label>

            <label htmlFor="mortgage-phone">
                <span>{form.phone}</span>
                <input
                    id="mortgage-phone"
                    name="phone"
                    type="tel"
                    dir="ltr"
                    inputMode="tel"
                    autoComplete="tel"
                    minLength={7}
                    maxLength={20}
                    required
                />
            </label>

            <label htmlFor="mortgage-stage">
                <span>{form.stage}</span>
                <select id="mortgage-stage" name="stage" defaultValue="" required>
                    <option value="" disabled>
                        {form.placeholder}
                    </option>
                    {form.options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>

            <button type="submit">{form.submit}</button>

            <p className="mortgage-form__notice" id="mortgage-form-notice">
                <ShieldCheck aria-hidden="true" />
                <span>{form.notice}</span>
            </p>
        </form>
    );
}
