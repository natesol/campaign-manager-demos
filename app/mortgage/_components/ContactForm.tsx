"use client";

import { type FormEvent, useState } from "react";

import { ShieldCheck } from "lucide-react";

import { mortgageContent } from "../content";

const { form } = mortgageContent.contact;

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="mortgage-form mortgage-form--success" aria-live="polite">
                <ShieldCheck aria-hidden="true" />
                <p>{form.success}</p>
            </div>
        );
    }

    return (
        <form className="mortgage-form" onSubmit={handleSubmit}>
            <h3>{form.title}</h3>

            <label htmlFor="mortgage-full-name">
                <span>{form.fullName}</span>
                <input id="mortgage-full-name" name="fullName" autoComplete="name" required />
            </label>

            <label htmlFor="mortgage-phone">
                <span>{form.phone}</span>
                <input
                    id="mortgage-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
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

            <p className="mortgage-form__notice">
                <ShieldCheck aria-hidden="true" />
                <span>{form.notice}</span>
            </p>
        </form>
    );
}
