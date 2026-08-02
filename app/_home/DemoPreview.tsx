import type { Demo } from "./demos";

// Stands in for the campaign screenshot that has not been taken yet. It carries
// the campaign's own paper so each band still reads as that campaign.
const paper: Record<Demo["theme"], string> = {
    cookies: "bg-campaign-cookies-paper",
    skincare: "bg-campaign-skincare-paper",
    mortgage: "bg-campaign-mortgage-paper",
};

export function DemoPreview({ theme }: { theme: Demo["theme"] }) {
    return (
        <div
            aria-hidden="true"
            className={`relative isolate h-full w-full overflow-hidden ${paper[theme]}`}
        >
            <div className="absolute inset-5 border border-border-strong/60 sm:inset-7">
                <div className="absolute inset-x-0 top-0 flex items-center justify-between border-border-strong/60 border-b px-4 py-3 text-subtle-foreground text-xs">
                    <span>PREVIEW</span>
                    <span className="h-2 w-2 rounded-full bg-border-strong" />
                </div>
                <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2">
                    <span className="h-2 w-2/3 rounded-full bg-border-strong/60" />
                    <span className="h-2 w-2/5 rounded-full bg-border-strong/60" />
                </div>
            </div>
            <span className="absolute inset-0 flex items-center justify-center pt-5 font-medium text-muted-foreground text-xs tracking-eyebrow">
                תצוגה מקדימה בהמשך
            </span>
        </div>
    );
}
