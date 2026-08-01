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

type DemoCopy = Pick<Demo, "company" | "sector" | "product" | "campaign" | "description">;

const demos: Demo[] = [
    {
        href: "/cookies/",
        theme: "drop",
        company: "קמח ואור",
        sector: "מותג מאפים",
        product: "מהדורת זרם הטעמים",
        campaign: "מהדורה מוגבלת",
        description:
            "השקה של שלושה טעמים במהדורה אחת: פיסטוק, פטל ושוקולד מריר. עמוד שנבנה סביב תנועה, צבע והמעבר בין המוצרים בגלילה אחת רצופה.",
    },
    {
        href: "/skincare/",
        theme: "routine",
        company: "אווריס",
        sector: "מותג טיפוח",
        product: "שגרת אוגוסט",
        campaign: "שגרת טיפוח לקיץ",
        description:
            "מוצרים שמתחברים לשגרה אחת לקיץ הישראלי. עמוד עם עריכה נקייה, בחירת מוצר ברורה ותחושת קלילות שנשמרת בכל מסך.",
    },
    {
        href: "/mortgage/",
        theme: "advice",
        company: "קומה ראשונה",
        sector: "ייעוץ משכנתאות",
        product: "פגישת סדר",
        campaign: "ייעוץ משכנתא",
        description:
            "עמוד להשארת פרטים לפני התחייבות ארוכה. השפה נשענת על אמון ובהירות, ומובילה לטופס רב-שלבי שנעים למלא גם בנייד.",
    },
];

const lockedDemoCopy: Partial<Record<Demo["theme"], DemoCopy>> = {
    drop: {
        company: "קרמב.",
        sector: "קמפיין עוגיות",
        product: "מהדורה מוגבלת",
        campaign: "שלושה טעמים.\nמהדורה אחת.",
        description:
            "קרם פיסטוק, פטל ושוקולד לבן, ושוקולד מריר עם מלח ים. שלושה טעמים בלתי נשכחים במהדורה אחת.",
    },
    routine: {
        company: "בדיוק לעונה",
        sector: "קמפיין טיפוח לקיץ",
        product: "שגרת טיפוח לבוקר ולערב",
        campaign: "הקיץ הגיע.\nשגרת הטיפוח מתחלפת.",
        description: "ניקוי ולחות בבוקר ובערב, והגנה מהשמש במהלך היום.",
    },
};

const qualities = ["עברית מלאה ו-RTL", "מותאם לכל מסך", "אתר סטטי"];

const previewColors: Record<Demo["theme"], string> = {
    drop: "bg-drop-paper",
    routine: "bg-linear-to-b from-routine-paper to-routine-mist",
    advice: "bg-advice-paper",
};

const boldCardColors: Record<Demo["theme"], string> = {
    drop: "bg-drop-paper text-drop-cocoa",
    routine: "bg-routine-mist text-routine-deep",
    advice: "bg-advice-brass text-foreground",
};

function DemoPreview({ theme, compact = false }: { theme: Demo["theme"]; compact?: boolean }) {
    return (
        <div
            aria-hidden="true"
            className={`relative isolate h-full w-full overflow-hidden ${previewColors[theme]}`}
        >
            <div className="absolute inset-5 border border-border-strong/60 sm:inset-7">
                <div className="absolute inset-x-0 top-0 flex items-center justify-between border-border-strong/60 border-b px-4 py-3 text-subtle text-xs">
                    <span>PREVIEW</span>
                    <span className="h-2 w-2 rounded-full bg-border-strong" />
                </div>
                {!compact && (
                    <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2">
                        <span className="h-2 w-2/3 rounded-full bg-border-strong/60" />
                        <span className="h-2 w-2/5 rounded-full bg-border-strong/60" />
                    </div>
                )}
            </div>
            <span className="absolute inset-0 flex items-center justify-center pt-5 font-medium text-muted text-xs tracking-eyebrow">
                תצוגה מקדימה בהמשך
            </span>
        </div>
    );
}

function Qualities({ inverted = false }: { inverted?: boolean }) {
    return (
        <ul
            className={`flex flex-wrap gap-x-5 gap-y-2 text-sm ${inverted ? "text-border" : "text-subtle"}`}
        >
            {qualities.map((quality, index) => (
                <li key={quality} className="flex items-center gap-5">
                    {index > 0 && <span aria-hidden="true">/</span>}
                    <span>{quality}</span>
                </li>
            ))}
        </ul>
    );
}

function Disclaimer({ inverted = false }: { inverted?: boolean }) {
    return (
        <p className={`max-w-2xl text-sm ${inverted ? "text-border" : "text-subtle"}`}>
            כל המותגים, המוצרים והשירותים המוצגים כאן בדיוניים ונוצרו לצורך תיק העבודות בלבד. אין
            קשר ביניהם לבין חברות או מוצרים קיימים.
        </p>
    );
}

function EditorialLayout({ working }: { working: boolean }) {
    return (
        <div className="min-h-screen bg-surface">
            <header className="mx-auto w-full max-w-7xl px-6 sm:px-8">
                <div className="flex items-center justify-between border-border border-b py-6 text-sm">
                    <p className="font-bold font-display">תיק עבודות</p>
                    <p className="text-subtle">קמפיינים דיגיטליים / 2026</p>
                </div>
                <div className="grid gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-8">
                        <p className="mb-5 font-medium text-muted text-sm tracking-eyebrow">
                            {working ? "פרויקטים נבחרים" : "שלושה פרויקטים נבחרים"}
                        </p>
                        <h1 className="text-balance font-bold font-display text-4xl tracking-tight sm:text-6xl">
                            קמפיינים שנבנו
                            <span className="block text-subtle">כדי להרגיש אחרת.</span>
                        </h1>
                    </div>
                    <div className="flex flex-col gap-7 lg:col-span-4">
                        <p className="text-pretty text-lg text-muted">
                            {working
                                ? "אוסף קמפיינים דיגיטליים למותגים בדיוניים, שנבנו מקצה לקצה סביב רעיון אחד חד ושפה שנאמנה לו בכל מסך."
                                : "אוסף דפי נחיתה למותגים בדיוניים. לכל פרויקט רעיון, שפה ויזואלית וקצב משלו, מהשקת מוצר צבעונית ועד מסע שמבוסס על אמון."}
                        </p>
                        <Qualities />
                    </div>
                </div>
            </header>

            <main className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-8 sm:pb-28">
                <ol className="border-border border-t">
                    {demos.map((demo, index) => {
                        const copy = working ? (lockedDemoCopy[demo.theme] ?? demo) : demo;

                        return (
                            <li key={demo.href} className="border-border border-b">
                                <Link
                                    href={demo.href}
                                    className={`group gap-8 outline-offset-4 focus-visible:outline-2 focus-visible:outline-foreground ${
                                        working
                                            ? `my-4 flex flex-col px-4 py-4 transition-colors hover:bg-hover active:bg-border lg:items-stretch ${
                                                  index % 2 === 1
                                                      ? "lg:flex-row-reverse"
                                                      : "lg:flex-row"
                                              }`
                                            : "grid py-10 sm:py-14 lg:grid-cols-12 lg:items-stretch"
                                    }`}
                                >
                                    <div
                                        className={`aspect-video overflow-hidden rounded-sm border border-border ${
                                            working ? "flex-1" : "lg:col-span-7"
                                        }`}
                                    >
                                        <DemoPreview theme={demo.theme} />
                                    </div>
                                    <div
                                        className={`flex flex-col ${
                                            working ? "flex-auto" : "lg:col-span-5 lg:py-3"
                                        }`}
                                    >
                                        <div className="mb-10 flex items-baseline justify-between gap-4">
                                            <p className="font-semibold text-muted text-sm">
                                                {copy.company} / {copy.sector}
                                            </p>
                                            <span className="font-display text-sm text-subtle tabular-nums">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <p className="font-medium text-muted text-sm">
                                                {copy.product}
                                            </p>
                                            <h2 className="whitespace-pre-line text-balance font-bold font-display text-3xl tracking-tight sm:text-4xl">
                                                {copy.campaign}
                                            </h2>
                                            <p className="max-w-xl text-pretty text-base text-muted">
                                                {copy.description}
                                            </p>
                                        </div>
                                        <span className="mt-8 inline-flex items-center gap-3 self-start border-foreground border-b pb-1 font-semibold text-sm transition-colors group-hover:border-subtle group-hover:text-muted lg:mt-auto">
                                            לצפייה בפרויקט
                                            <span
                                                aria-hidden="true"
                                                className={
                                                    working
                                                        ? "transition-transform group-hover:-translate-x-1"
                                                        : undefined
                                                }
                                            >
                                                ←
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ol>
            </main>

            <footer className="border-border border-t bg-background">
                <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 sm:px-8 lg:grid-cols-12 lg:items-end">
                    <p className="font-bold font-display text-xl lg:col-span-4">
                        סוף העמוד. תחילת הרעיון.
                    </p>
                    <div className="lg:col-span-8 lg:justify-self-end">
                        <Disclaimer />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export function EditorialHome() {
    return <EditorialLayout working={false} />;
}

export function WorkingHome() {
    return <EditorialLayout working />;
}

export function MinimalHome() {
    return (
        <div className="min-h-screen bg-surface">
            <header className="mx-auto w-full max-w-6xl px-6 sm:px-8">
                <div className="flex items-center justify-between border-border border-b py-6 text-sm">
                    <p className="font-semibold">תיק עבודות</p>
                    <p className="text-subtle">03 פרויקטים</p>
                </div>
                <div className="flex flex-col gap-10 py-20 sm:py-28">
                    <h1 className="max-w-4xl text-balance font-display font-medium text-4xl tracking-tight sm:text-5xl">
                        עמודי נחיתה עם רעיון ברור,
                        <span className="text-subtle"> בלי רעש מסביב.</span>
                    </h1>
                    <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
                        <p className="max-w-2xl text-pretty text-lg text-muted">
                            שלושה קמפיינים למותגים בדיוניים, כל אחד עם שפה, מקצב ואינטראקציה
                            שמתאימים בדיוק לסיפור שהוא צריך לספר.
                        </p>
                        <div className="lg:justify-self-end">
                            <Qualities />
                        </div>
                    </div>
                </div>
            </header>

            <main className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8 sm:pb-32">
                <ol className="border-border border-t">
                    {demos.map((demo, index) => (
                        <li key={demo.href} className="border-border border-b">
                            <Link
                                href={demo.href}
                                className="group grid gap-7 py-8 outline-offset-4 focus-visible:outline-2 focus-visible:outline-foreground sm:grid-cols-[auto_1fr] sm:py-10 lg:grid-cols-[5rem_1fr_18rem_auto] lg:items-center"
                            >
                                <span className="text-sm text-subtle tabular-nums">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="flex flex-col gap-3">
                                    <p className="text-sm text-subtle">
                                        {demo.company} / {demo.sector}
                                    </p>
                                    <div>
                                        <h2 className="font-bold font-display text-2xl tracking-tight">
                                            {demo.campaign}
                                        </h2>
                                        <p className="mt-1 text-muted text-sm">{demo.product}</p>
                                    </div>
                                    <p className="max-w-2xl text-pretty text-muted text-sm">
                                        {demo.description}
                                    </p>
                                </div>
                                <div className="h-32 overflow-hidden rounded-sm border border-border sm:col-start-2 lg:col-start-auto">
                                    <DemoPreview theme={demo.theme} compact />
                                </div>
                                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border-strong text-lg transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-surface sm:col-start-2 sm:justify-self-end lg:col-start-auto">
                                    <span className="sr-only">לצפייה בפרויקט</span>
                                    <span aria-hidden="true">←</span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ol>
            </main>

            <footer className="mx-auto w-full max-w-6xl border-border border-t px-6 py-10 sm:px-8">
                <Disclaimer />
            </footer>
        </div>
    );
}

export function BoldHome() {
    return (
        <div className="min-h-screen bg-foreground text-surface">
            <header className="mx-auto w-full max-w-7xl px-6 sm:px-8">
                <div className="flex items-center justify-between border-muted border-b py-6 text-sm">
                    <p className="font-bold font-display">PORTFOLIO / תיק עבודות</p>
                    <p className="text-border">2026</p>
                </div>
                <div className="py-16 sm:py-24">
                    <p className="mb-6 font-semibold text-border text-sm tracking-eyebrow">
                        שלושה מותגים. שלוש שפות.
                    </p>
                    <h1 className="max-w-6xl text-balance font-bold font-display text-4xl tracking-tight sm:text-7xl">
                        רעיונות שגורמים
                        <span className="text-drop-raspberry"> למוצר לבלוט,</span>
                        <span className="text-routine-mist"> לסיפור לזרום</span>
                        <span className="text-advice-brass"> ולאנשים לפעול.</span>
                    </h1>
                    <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-end">
                        <p className="max-w-2xl text-pretty text-border text-lg">
                            אוסף קמפיינים דיגיטליים למותגים בדיוניים, שנבנו מקצה לקצה סביב רעיון אחד
                            חד ושפה שנאמנה לו בכל מסך.
                        </p>
                        <div className="lg:justify-self-end">
                            <Qualities inverted />
                        </div>
                    </div>
                </div>
            </header>

            <main className="mx-auto w-full max-w-7xl px-6 pb-24 sm:px-8 sm:pb-32">
                <ol className="grid gap-5 lg:grid-cols-3">
                    {demos.map((demo, index) => (
                        <li key={demo.href}>
                            <Link
                                href={demo.href}
                                className={`group flex h-full flex-col overflow-hidden rounded-sm outline-offset-4 focus-visible:outline-2 focus-visible:outline-surface ${boldCardColors[demo.theme]}`}
                            >
                                <div className="aspect-video border-foreground/20 border-b">
                                    <DemoPreview theme={demo.theme} />
                                </div>
                                <div className="flex flex-1 flex-col p-6 sm:p-8">
                                    <div className="mb-14 flex items-start justify-between gap-4 text-sm">
                                        <p className="font-semibold">
                                            {demo.company}
                                            <span className="block font-normal">{demo.sector}</span>
                                        </p>
                                        <span className="font-display tabular-nums">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <p className="mb-2 font-medium text-sm">{demo.product}</p>
                                    <h2 className="text-balance font-bold font-display text-3xl tracking-tight">
                                        {demo.campaign}
                                    </h2>
                                    <p className="mt-5 text-pretty text-base">{demo.description}</p>
                                    <span className="mt-10 flex items-center justify-between border-current border-t pt-4 font-bold text-sm lg:mt-auto">
                                        לצפייה בפרויקט
                                        <span
                                            aria-hidden="true"
                                            className="text-xl transition-transform group-hover:-translate-x-1"
                                        >
                                            ←
                                        </span>
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ol>
            </main>

            <footer className="border-muted border-t">
                <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 sm:px-8 lg:grid-cols-2 lg:items-end">
                    <p className="font-bold font-display text-2xl">העבודה מדברת. הרעיון מוביל.</p>
                    <div className="lg:justify-self-end">
                        <Disclaimer inverted />
                    </div>
                </div>
            </footer>
        </div>
    );
}
