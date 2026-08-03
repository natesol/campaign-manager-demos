"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";

import { ArrowLeft, ChevronDown, ShieldCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { ContactFormContent } from "../content";

const fieldClassName =
    "h-14 w-full rounded-3xl border border-input bg-background px-5 text-base text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-muted-foreground hover:border-campaign-mortgage-accent focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20 user-invalid:border-destructive";

const formShellClassName =
    "min-h-[36rem] rounded-3xl bg-accent p-6 md:p-9 lg:min-h-[40rem] lg:p-12";

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
                className={cn(
                    formShellClassName,
                    "flex flex-col items-start justify-center gap-6 text-start",
                )}
                ref={statusRef}
                role="status"
                tabIndex={-1}
            >
                <ShieldCheck
                    aria-hidden="true"
                    className="size-12 text-campaign-mortgage-accent"
                    strokeWidth={1.5}
                />
                <p className="max-w-md font-display font-semibold text-foreground text-xl">
                    {form.success}
                </p>
                <button
                    type="button"
                    className={cn(buttonVariants({ variant: "outline" }), "h-11 rounded-3xl px-6")}
                    onClick={() => setSubmitted(false)}
                >
                    {form.reset}
                </button>
            </div>
        );
    }

    return (
        <form
            className={cn(formShellClassName, "flex flex-col justify-center")}
            onSubmit={handleSubmit}
            aria-describedby="mortgage-form-notice"
        >
            <h3
                ref={formTitleRef}
                tabIndex={-1}
                className="mb-6 text-start font-display font-semibold text-foreground text-xl outline-none"
            >
                {form.title}
            </h3>

            <label className="mb-4 grid gap-2 font-semibold" htmlFor="mortgage-full-name">
                <span className="px-1">{form.fullName}</span>
                <input
                    className={fieldClassName}
                    id="mortgage-full-name"
                    name="fullName"
                    autoComplete="name"
                    minLength={2}
                    maxLength={80}
                    required
                />
            </label>

            <label className="mb-4 grid gap-2 font-semibold" htmlFor="mortgage-phone">
                <span className="px-1">{form.phone}</span>
                <input
                    className={fieldClassName}
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

            <label className="mb-6 grid gap-2 font-semibold" htmlFor="mortgage-stage">
                <span className="px-1">{form.stage}</span>
                {/* The native indicator is drawn against the border whatever the padding
                    is, so it is dropped for one we can set on the same line as the text. */}
                <div className="relative">
                    <select
                        className={cn(fieldClassName, "cursor-pointer appearance-none pe-12")}
                        id="mortgage-stage"
                        name="stage"
                        defaultValue=""
                        required
                    >
                        <option value="" disabled>
                            {form.placeholder}
                        </option>
                        {form.options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <ChevronDown
                        aria-hidden="true"
                        className="pointer-events-none absolute end-5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
                    />
                </div>
            </label>

            <button
                type="submit"
                className={cn(
                    buttonVariants({ size: "lg" }),
                    "mortgage-cta group bg-campaign-mortgage-accent text-base text-white transition-[background-color,box-shadow] hover:bg-campaign-mortgage-accent/85 hover:shadow-lg",
                )}
            >
                <span>{form.submit}</span>
                <ArrowLeft
                    aria-hidden
                    className="size-5 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none"
                />
            </button>

            <p
                className="mt-5 flex items-start justify-start gap-2 text-start text-muted-foreground text-sm"
                id="mortgage-form-notice"
            >
                <ShieldCheck
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-campaign-mortgage-accent"
                />
                <span>{form.notice}</span>
            </p>
        </form>
    );
}
