"use client";

import { useEffect, useState } from "react";

import { Star } from "lucide-react";

import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { testimonials } from "../content";
import { AccentedFirstWord } from "./AccentBurst";
import { Pill } from "./Pill";

/*
 * The reviews use the shadcn Embla carousel: one card per view on phones,
 * three on desktop, looping, with arrows and dots.
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
            <div className="flex w-full flex-col items-center gap-12">
                <div className="px-6 text-center sm:px-10">
                    <h2 className="font-bold font-display text-[clamp(2rem,4vw,3rem)] leading-tight">
                        <AccentedFirstWord text={testimonials.headingLines[0]} />
                        <br />
                        {testimonials.headingLines[1]}
                    </h2>
                </div>

                <Carousel
                    setApi={setApi}
                    opts={{ align: "start", loop: true, duration: 28 }}
                    aria-label="חוות דעת לקוחות"
                    className="w-full"
                >
                    <CarouselContent className="cursor-grab items-stretch pb-2 active:cursor-grabbing">
                        {testimonials.reviews.map((review, index) => (
                            <CarouselItem
                                key={review.name}
                                aria-label={`${index + 1} מתוך ${testimonials.reviews.length}`}
                                className="flex basis-[88%] xs:basis-[72%] sm:basis-1/2 lg:basis-1/3"
                            >
                                <article className="flex min-h-80 w-full flex-col gap-4 rounded-3xl border border-campaign-skincare-lavender/55 bg-background/85 p-8 shadow-[0_1rem_3rem_-2rem_color-mix(in_oklab,var(--color-campaign-skincare-ink)_35%,transparent)]">
                                    <Stars />
                                    <span
                                        aria-hidden="true"
                                        className="font-display text-4xl text-foreground/30 leading-none"
                                    >
                                        ”
                                    </span>
                                    <blockquote className="text-pretty text-base leading-relaxed">
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

                    <div className="mx-auto mt-9 flex w-fit items-center justify-center gap-4 rounded-full border border-campaign-skincare-lavender/45 bg-background/80 px-3 py-2 shadow-sm backdrop-blur-sm">
                        <CarouselPrevious className="size-10 border-border bg-background transition-[background-color,border-color,transform] duration-200 hover:-translate-y-px hover:border-campaign-skincare-lavender hover:bg-accent active:translate-y-0 motion-reduce:transform-none" />
                        <span className="flex items-center gap-2.5 px-1">
                            {testimonials.reviews.map((review, index) => (
                                <button
                                    key={review.name}
                                    type="button"
                                    aria-label={`חוות דעת ${index + 1}`}
                                    aria-current={index === current || undefined}
                                    onClick={() => api?.scrollTo(index)}
                                    className={`h-2.5 rounded-full transition-[width,background-color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/35 motion-reduce:transition-none ${
                                        index === current
                                            ? "w-7 bg-campaign-skincare-coral"
                                            : "w-2.5 bg-foreground/20 hover:bg-foreground/45"
                                    }`}
                                />
                            ))}
                        </span>
                        <CarouselNext className="size-10 border-border bg-background transition-[background-color,border-color,transform] duration-200 hover:-translate-y-px hover:border-campaign-skincare-lavender hover:bg-accent active:translate-y-0 motion-reduce:transform-none" />
                    </div>
                </Carousel>

                <Pill href={testimonials.cta.href}>{testimonials.cta.label}</Pill>
            </div>
        </section>
    );
}
