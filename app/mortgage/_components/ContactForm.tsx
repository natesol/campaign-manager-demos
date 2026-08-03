"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";

import { ArrowLeft, ShieldCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
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
                {/* A rendered listbox rather than the native control: Chrome draws the
                    native popup at its own width, and nothing in CSS reaches it. This one
                    takes the trigger's width from --anchor-width. */}
                <Select name="stage" required>
                    <SelectTrigger
                        className={cn(
                            fieldClassName,
                            "cursor-pointer ps-5 pe-5 data-[size=default]:h-14 data-placeholder:text-muted-foreground",
                        )}
                        id="mortgage-stage"
                    >
                        <SelectValue placeholder={form.placeholder} />
                    </SelectTrigger>
                    {/* Dropped below the trigger and aligned to it, rather than the
                        component's default of parking the selected row on top of it.
                        The popup is portalled to the body, outside the campaign element
                        the palette is scoped to, so it carries the campaign back with it.
                        The campaign overrides the roles unconditionally, which is what
                        keeps the page itself light under the .dark class next-themes puts
                        on the document; a portal escapes that element but not the class,
                        so without this the popup alone goes dark. */}
                    <SelectContent
                        align="start"
                        alignItemWithTrigger={false}
                        className="rounded-3xl border border-input p-2 shadow-foreground/5 shadow-lg ring-0"
                        data-campaign="mortgage"
                        sideOffset={8}
                    >
                        {form.options.map((option) => (
                            <SelectItem
                                /* ps-3 plus the popup's p-2 puts the row text on the
                                   trigger text's line; pe-8 clears the check indicator. */
                                className="min-h-11 rounded-2xl ps-3 pe-8 text-base [&_svg]:text-campaign-mortgage-accent"
                                key={option}
                                value={option}
                            >
                                {option}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
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
