import { ThemeToggle } from "@/components/ThemeToggle";

// One line at every width: the three points read as a single strapline, so they
// never wrap or drop to a second row.
const qualities = ["עברית מלאה ו-RTL", "מותאם לכל מסך", "אתרים סטטיים"];

export function Hero() {
    return (
        // The closing rule sits on the hero block rather than on the header, so it
        // lines up with the rule under the top bar instead of running the extra
        // width of the header's own padding.
        <header className="mx-auto mb-16 w-full max-w-7xl px-4 sm:mb-24 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-border border-b py-6 text-sm">
                <p className="font-bold font-display">תיק עבודות</p>
                <div className="flex items-center gap-5">
                    <p>קמפיינים דיגיטליים / 2026</p>
                    <ThemeToggle />
                </div>
            </div>

            <div className="flex flex-col items-center gap-8 border-border border-b py-10 text-center lg:gap-10 lg:py-24">
                <p className="font-bold text-base text-subtle-foreground tracking-eyebrow">
                    פרויקטים נבחרים
                </p>
                <h1 className="max-w-6xl text-balance font-bold font-display text-3xl tracking-tight sm:text-5xl lg:text-6xl">
                    קמפיינים ודפי נחיתה{" "}
                    <span className="text-emphasis-foreground">שפשוט עובדים</span>
                </h1>
                <p className="max-w-2xl text-pretty text-lg">
                    אוסף קמפיינים דיגיטליים למותגים בדיוניים, שנבנו מקצה לקצה סביב רעיון אחד חד ושפה
                    שנאמנה לו בכל מסך.
                </p>
                <ul className="flex flex-nowrap items-center gap-2 whitespace-nowrap text-subtle-foreground text-xs sm:gap-3 sm:text-sm">
                    {qualities.map((quality, index) => (
                        <li key={quality} className="flex items-center gap-2 sm:gap-3">
                            {index > 0 && <span aria-hidden="true">/</span>}
                            <span>{quality}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
