import Link from "next/link";

type Demo = {
    href: string;
    theme: "drop" | "routine" | "advice";
    company: string;
    sector: string;
    product: string;
    campaign: string;
    description: string;
};

const demos: Demo[] = [
    {
        href: "/cookies/",
        theme: "drop",
        company: "קמח ואור",
        sector: "מותג מאפים",
        product: "מהדורת זרם הטעמים",
        campaign: "מהדורה מוגבלת",
        description:
            "השקה של שלושה טעמים במהדורה אחת — פיסטוק, פטל ושוקולד מריר. הדגש על תנועה, על צבע ועל המעבר בין המוצרים בגלילה אחת רצופה.",
    },
    {
        href: "/skincare/",
        theme: "routine",
        company: "אווריס",
        sector: "מותג טיפוח",
        product: "שגרת אוגוסט",
        campaign: "שגרת טיפוח לקיץ",
        description:
            "מוצרים שמרכיבים יחד שגרה אחת לקיץ הישראלי. הדגש על עריכה נקייה, על בחירת מוצר ברורה ועל תחושת קלילות.",
    },
    {
        href: "/mortgage/",
        theme: "advice",
        company: "קומה ראשונה",
        sector: "ייעוץ משכנתאות",
        product: "פגישת סדר",
        campaign: "ייעוץ משכנתא",
        description:
            "עמוד להשארת פרטים לפני התחייבות ארוכה. הדגש על אמון, על בהירות ועל טופס רב-שלבי שנעים למלא בנייד.",
    },
];

// Placeholder art direction until each page is built.
function Preview({ theme }: { theme: Demo["theme"] }) {
    if (theme === "drop") {
        return <div className="relative h-full w-full overflow-hidden bg-drop-paper"></div>;
    }

    if (theme === "routine") {
        return (
            <div className="relative h-full w-full overflow-hidden bg-linear-to-b from-routine-paper to-routine-mist"></div>
        );
    }

    return <div className="relative h-full w-full overflow-hidden bg-advice-paper"></div>;
}

export default function Home() {
    return (
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-16 px-6 py-16 sm:gap-24 sm:px-8 sm:py-24">
            <header className="flex flex-col items-center gap-6 text-center">
                <p className="font-medium text-muted text-sm tracking-eyebrow">תיק עבודות</p>
                <div className="flex flex-col gap-4">
                    <h1 className="text-balance font-bold font-display text-5xl tracking-tight sm:text-5xl">
                        קמפיינים ודפי נחיתה
                    </h1>
                    <p className="text-pretty font-display text-muted text-xl sm:text-2xl">
                        עמודי נחיתה ואתרים פירסומיים למותגים בדיוניים.
                    </p>
                </div>
                <p className="max-w-2xl text-pretty text-base text-muted sm:text-lg">
                    כל עמוד נבנה כקמפיין עצמאי, עם שפה ויזואלית, מקצב ואינטראקציה משלו.
                    <br />
                    סט הדמואים נבנה כדי להראות טווח — מהשקת מוצר צבעונית ועד עמוד ליצירת לידים שנשען
                    על אמון ועל בהירות.
                </p>
                <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-subtle">
                    <li>עברית מלאה ו-RTL</li>
                    <li aria-hidden="true">·</li>
                    <li>מותאם לנייד</li>
                    <li aria-hidden="true">·</li>
                    <li>אתר סטטי, ללא צד שרת</li>
                </ul>
            </header>

            <main>
                {/* The whole card is the link, so the target stays large on touch and needs no hover. */}
                <ul className="flex flex-col gap-5 sm:gap-6">
                    {demos.map((demo, index) => (
                        <li key={demo.href}>
                            <Link
                                href={demo.href}
                                className={`group flex flex-col overflow-hidden rounded-md border border-border bg-surface outline-offset-4 transition-colors hover:border-border-strong focus-visible:outline-2 focus-visible:outline-foreground sm:flex-row ${
                                    index % 2 === 1 ? "sm:flex-row-reverse" : ""
                                }`}
                            >
                                <div className="h-32 sm:h-auto sm:w-56 sm:shrink-0">
                                    <Preview theme={demo.theme} />
                                </div>
                                <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                                    <div className="flex items-baseline gap-3 text-sm">
                                        <span className="text-subtle tabular-nums">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="font-semibold text-foreground">
                                            {demo.company}
                                        </span>
                                        <span className="text-subtle">{demo.sector}</span>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <h2 className="font-bold font-display text-2xl tracking-tight sm:text-3xl">
                                            {demo.campaign}
                                        </h2>
                                        <p className="text-base text-muted">{demo.product}</p>
                                    </div>
                                    <p className="text-pretty text-base text-muted">
                                        {demo.description}
                                    </p>
                                    <span className="mt-1 font-medium text-base underline decoration-border-strong underline-offset-4 transition-colors group-hover:decoration-foreground">
                                        לצפייה בעמוד
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>

            <footer className="flex flex-col items-center gap-3 border-border border-t pt-10 text-center">
                <p className="max-w-2xl text-pretty text-base text-muted">
                    כל המותגים, המוצרים והשירותים בעמודים אלה בדיוניים, ונוצרו לצורך תיק עבודות
                    בלבד. אין קשר בין השמות המוצגים לחברות או למוצרים קיימים.
                </p>
            </footer>
        </div>
    );
}
