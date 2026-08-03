export function AccentBurst({ className = "" }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className={`pointer-events-none overflow-visible text-campaign-skincare-coral ${className}`}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
        >
            <path d="M3 10V2" />
            <path d="m7 12 6-6" />
            <path d="M9 17h8" />
        </svg>
    );
}

export function AccentedFirstWord({
    text,
    accentClassName = "-start-4 -top-2 size-5",
}: {
    text: string;
    accentClassName?: string;
}) {
    const [firstWord, ...remainingWords] = text.split(" ");

    return (
        <>
            <span className="relative inline-block">
                {firstWord}
                <AccentBurst className={`absolute ${accentClassName}`} />
            </span>
            {remainingWords.length > 0 && ` ${remainingWords.join(" ")}`}
        </>
    );
}
