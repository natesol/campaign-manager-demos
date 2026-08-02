type BrandMarkProps = {
    compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
    return (
        <span
            className={
                compact ? "mortgage-brand-mark mortgage-brand-mark--compact" : "mortgage-brand-mark"
            }
        >
            <span className="mortgage-brand-mark__stem" />
            <span className="mortgage-brand-mark__corner" />
            <span className="mortgage-brand-mark__dot" />
        </span>
    );
}
