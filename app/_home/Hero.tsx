// One line at every width: the three points read as a single strapline, so they
// never wrap or drop to a second row.
const qualities = ["עברית מלאה ו-RTL", "מותאם לכל מסך", "אתרים סטטיים"];

export function Hero() {
    return (
        // The closing rule sits on the hero block rather than on the header, so it
        // lines up with the rule under the top bar instead of running the extra
        // width of the header's own padding.
        <header className="mx-auto below-sm:mb-16 mb-24 w-full max-w-7xl below-lg:px-6 below-sm:px-4 px-8">
            <div className="flex items-center justify-between border-border border-b py-6 text-sm">
                <p className="font-bold font-display">תיק עבודות</p>
                <p>קמפיינים דיגיטליים / 2026</p>
            </div>

            <div className="flex flex-col items-center below-lg:gap-8 gap-10 border-border border-b below-lg:py-10 py-24 text-center">
                <p className="font-bold text-base text-subtle-foreground tracking-eyebrow">
                    פרויקטים נבחרים
                </p>
                <h1 className="max-w-6xl text-balance font-black font-display below-lg:text-5xl below-sm:text-4xl text-6xl tracking-tight">
                    קמפיינים ודפי נחיתה{" "}
                    <span className="text-emphasis-foreground">שפשוט עובדים</span>
                </h1>
                <p className="max-w-2xl text-pretty text-lg">
                    אוסף קמפיינים דיגיטליים למותגים בדיוניים, שנבנו מקצה לקצה סביב רעיון אחד חד ושפה
                    שנאמנה לו בכל מסך.
                </p>
                <ul className="flex flex-nowrap items-center below-sm:gap-2 gap-3 whitespace-nowrap below-sm:text-xs text-sm text-subtle-foreground">
                    {qualities.map((quality, index) => (
                        <li key={quality} className="flex items-center below-sm:gap-2 gap-3">
                            {index > 0 && <span aria-hidden="true">/</span>}
                            <span>{quality}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
