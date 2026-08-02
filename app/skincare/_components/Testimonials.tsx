"use client";

import { useEffect, useState } from "react";

import { Sparkles, Star } from "lucide-react";

import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { testimonials } from "../content";
import { Pill } from "./Pill";

/*
 * The reviews on the shadcn Embla carousel: one card per view on phones, three
 * on desktop, looping, with arrows and dots. Fictional reviews for the
 * fictional brand, kept by explicit user decision; the footer disclosure
 * covers the fiction.
 */

function Stars() {
    return (
        <span className="flex gap-1" aria-hidden="true">
            {["a", "b", "c", "d", "e"].map((key) => (
                <Star
                    key={key}
                    strokeWidth={0}
                    fill="currentColor"
                    className="size-5 text-campaign-skincare-coral"
                />
            ))}
        </span>
    );
}

export function Testimonials() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;
        const onSelect = () => setCurrent(api.selectedScrollSnap());
        onSelect();
        api.on("select", onSelect);
        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    return (
        <section id="reviews" className="py-16 lg:py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 sm:px-10">
                <div className="relative text-center">
                    <Sparkles
                        aria-hidden
                        strokeWidth={1.5}
                        className="absolute -start-9 -top-3 size-6 text-campaign-skincare-coral"
                    />
                    <h2 className="font-bold font-display text-[clamp(2rem,4vw,3rem)] leading-tight">
                        {testimonials.headingLines[0]}
                        <br />
                        {testimonials.headingLines[1]}
                    </h2>
                </div>

                <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
                    <CarouselContent>
                        {testimonials.reviews.map((review) => (
                            <CarouselItem key={review.name} className="sm:basis-1/2 lg:basis-1/3">
                                <article className="flex h-full flex-col gap-4 rounded-3xl border border-campaign-skincare-lavender/70 p-8">
                                    <Stars />
                                    <span
                                        aria-hidden="true"
                                        className="font-display text-4xl text-foreground/30 leading-none"
                                    >
                                        ”
                                    </span>
                                    <blockquote className="text-pretty text-base">
                                        {review.quote}
                                    </blockquote>
                                    <span className="mt-auto flex flex-col gap-3 pt-2">
                                        <span className="h-px w-16 bg-border" />
                                        <span className="font-bold text-base">{review.name}</span>
                                        <span className="flex items-center gap-2 text-sm text-subtle-foreground">
                                            <review.icon
                                                aria-hidden
                                                strokeWidth={1.5}
                                                className="size-4"
                                            />
                                            {review.skin}
                                        </span>
                                    </span>
                                </article>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="mt-10 flex items-center justify-center gap-6">
                        <CarouselPrevious className="size-11 border-foreground bg-transparent hover:bg-accent" />
                        <span className="flex items-center gap-2">
                            {testimonials.reviews.map((review, index) => (
                                <button
                                    key={review.name}
                                    type="button"
                                    aria-label={`חוות דעת ${index + 1}`}
                                    aria-current={index === current || undefined}
                                    onClick={() => api?.scrollTo(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === current
                                            ? "w-6 bg-campaign-skincare-coral"
                                            : "w-2 bg-foreground/20 hover:bg-foreground/40"
                                    }`}
                                />
                            ))}
                        </span>
                        <CarouselNext className="size-11 border-foreground bg-transparent hover:bg-accent" />
                    </div>
                </Carousel>

                <Pill href={testimonials.cta.href}>{testimonials.cta.label}</Pill>
            </div>
        </section>
    );
}
