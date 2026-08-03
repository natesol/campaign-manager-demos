"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";

import { ShieldCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { ContactFormContent } from "../content";

const fieldClassName =
    "h-16 w-full rounded-2xl border border-input bg-background px-5 text-base text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-muted-foreground hover:border-campaign-mortgage-accent focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/20 user-invalid:border-destructive";

const formShellClassName =
    "min-h-[39rem] rounded-4xl bg-muted p-6 sm:p-10 md:min-h-[43rem] lg:p-14";

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
                    "flex flex-col items-center justify-center gap-7 text-center",
                )}
                ref={statusRef}
                role="status"
                tabIndex={-1}
            >
                <ShieldCheck
                    aria-hidden="true"
                    className="size-14 text-campaign-mortgage-accent"
                    strokeWidth={1.5}
                />
                <p className="max-w-md font-display font-semibold text-2xl text-foreground">
                    {form.success}
                </p>
                <button
                    type="button"
                    className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full px-7")}
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
                className="mb-7 text-center font-display font-semibold text-2xl text-foreground outline-none"
            >
                {form.title}
            </h3>

            <label className="mb-5 grid gap-2 font-semibold" htmlFor="mortgage-full-name">
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

            <label className="mb-5 grid gap-2 font-semibold" htmlFor="mortgage-phone">
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

            <label className="mb-7 grid gap-2 font-semibold" htmlFor="mortgage-stage">
                <span className="px-1">{form.stage}</span>
                <select
                    className={fieldClassName}
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
            </label>

            <button
                type="submit"
                className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-16 rounded-2xl bg-campaign-mortgage-accent text-base text-white transition-[background-color,box-shadow,transform] hover:-translate-y-px hover:bg-campaign-mortgage-accent/85 hover:shadow-lg active:translate-y-0 motion-reduce:transform-none",
                )}
            >
                {form.submit}
            </button>

            <p
                className="mt-5 flex items-start justify-center gap-2 text-center text-muted-foreground text-sm"
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
