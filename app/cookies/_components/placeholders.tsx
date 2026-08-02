/*
 * Flat one-color shapes stand in for the product photography and brush strokes,
 * which do not exist yet. They carry composition and color, nothing more, and
 * every one of them is replaced by a real asset later.
 */

export function Disc({ tone, size }: { tone: string; size: string }) {
    return <span className={`block shrink-0 rounded-full ${tone} ${size}`} />;
}
