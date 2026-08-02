"use client";

import * as React from "react";

import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/*
 * shadcn's Embla carousel, vendored by hand because the CLI's add flow wanted
 * to re-run init over components.json. Two deliberate departures from the
 * canonical file, both because every page here is RTL: the arrows point the
 * mirrored way, and the keyboard arrows are flipped to match. The navigation
 * buttons are also plain in-flow controls rather than absolutely positioned,
 * since the pages place them in their own controls row.
 */

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
    const context = React.useContext(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}

function Carousel({
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
}: React.ComponentProps<"div"> & CarouselProps) {
    const [carouselRef, api] = useEmblaCarousel({ direction: "rtl", ...opts }, plugins);
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((current: CarouselApi) => {
        if (!current) return;
        setCanScrollPrev(current.canScrollPrev());
        setCanScrollNext(current.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
    const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

    const handleKeyDown = React.useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            /* Flipped relative to the canonical file: in RTL, forward is left. */
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollNext();
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollPrev();
            }
        },
        [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
        if (!api || !setApi) return;
        setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
        if (!api) return;
        onSelect(api);
        api.on("reInit", onSelect);
        api.on("select", onSelect);
        return () => {
            api.off("reInit", onSelect);
            api.off("select", onSelect);
        };
    }, [api, onSelect]);

    return (
        <CarouselContext.Provider
            value={{
                carouselRef,
                api,
                opts,
                scrollPrev,
                scrollNext,
                canScrollPrev,
                canScrollNext,
            }}
        >
            <section
                onKeyDownCapture={handleKeyDown}
                className={cn("relative", className)}
                data-slot="carousel"
                {...props}
            >
                {children}
            </section>
        </CarouselContext.Provider>
    );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
    const { carouselRef } = useCarousel();
    return (
        <div ref={carouselRef} className="overflow-hidden" data-slot="carousel-content">
            <div className={cn("-ms-4 flex", className)} {...props} />
        </div>
    );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            role="group"
            aria-roledescription="slide"
            data-slot="carousel-item"
            className={cn("min-w-0 shrink-0 grow-0 basis-full ps-4", className)}
            {...props}
        />
    );
}

function CarouselPrevious({
    className,
    variant = "outline",
    size = "icon",
    ...props
}: React.ComponentProps<typeof Button>) {
    const { scrollPrev, canScrollPrev } = useCarousel();
    return (
        <Button
            data-slot="carousel-previous"
            variant={variant}
            size={size}
            className={cn("rounded-full", className)}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <ChevronRight />
            <span className="sr-only">הקודם</span>
        </Button>
    );
}

function CarouselNext({
    className,
    variant = "outline",
    size = "icon",
    ...props
}: React.ComponentProps<typeof Button>) {
    const { scrollNext, canScrollNext } = useCarousel();
    return (
        <Button
            data-slot="carousel-next"
            variant={variant}
            size={size}
            className={cn("rounded-full", className)}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <ChevronLeft />
            <span className="sr-only">הבא</span>
        </Button>
    );
}

export {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    useCarousel,
};
