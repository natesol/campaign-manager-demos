/*
 * Flat one-color shapes stand in for the product photography, which does not
 * exist yet. They carry the family silhouette and color, nothing more: two
 * matching lavender tubes framing the unique white-and-coral pump bottle.
 */

export function Tube({ height = "h-40" }: { height?: string }) {
    return (
        <span className={`flex w-16 flex-col items-center ${height}`}>
            <span className="h-full w-full rounded-t-lg rounded-b-2xl bg-campaign-skincare-lavender/70" />
        </span>
    );
}

export function PumpBottle({ height = "h-32" }: { height?: string }) {
    return (
        <span className={`flex w-12 flex-col items-center ${height}`}>
            <span className="h-8 w-5 rounded-t-md bg-campaign-skincare-coral" />
            <span className="h-full w-full rounded-md border border-campaign-skincare-lavender/50 bg-white" />
        </span>
    );
}

/* The unified trio on its transparent platform: tubes framing the pump bottle,
   a fine binding ellipse, and small glass spheres beside the stage. */
export function Trio() {
    return (
        <span className="relative flex items-end justify-center gap-8 pb-8">
            <span className="absolute inset-x-0 bottom-2 h-10 rounded-[50%] bg-campaign-skincare-lavender/25" />
            <span className="absolute inset-x-[-6%] bottom-24 h-28 rounded-[50%] border border-campaign-skincare-lavender/60" />
            <span className="absolute -start-2 bottom-4 size-8 rounded-full border border-campaign-skincare-lavender/60 bg-white/60" />
            <span className="absolute -end-1 bottom-10 size-5 rounded-full border border-campaign-skincare-lavender/60 bg-white/60" />
            <span className="relative">
                <Tube />
            </span>
            <span className="relative">
                <PumpBottle />
            </span>
            <span className="relative">
                <Tube />
            </span>
        </span>
    );
}
