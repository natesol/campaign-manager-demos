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

// Every variant resolves copy the same way, so comparing them shows layout differences
// and nothing else. The mortgage campaign has no approved copy yet, so it keeps its
// placeholder here rather than borrowing a voice it has not earned.
function copyFor(demo: Demo): DemoCopy {
    return lockedDemoCopy[demo.theme] ?? demo;
}

const qualities = ["עברית מלאה ו-RTL", "מותאם לכל מסך", "אתרים סטטיים"];

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

// Poster bands: each campaign gets a full-width ground in its own palette, and an
// accent reserved for the oversized numeral so it only ever carries large text.
const posterGrounds: Record<Demo["theme"], string> = {
    drop: "bg-drop-ground text-foreground",
    routine: "bg-routine-ground text-foreground",
    advice: "bg-advice-ground text-foreground",
};

const posterAccents: Record<Demo["theme"], string> = {
    drop: "text-drop-raspberry",
    routine: "text-routine-lilac",
    advice: "text-advice-emerald",
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

// Full-bleed poster bands, shared by the root and by /home-2 so the two pages differ
// in their framing only. Each band is one campaign on its own barely-tinted ground.
//
// The bands carry no hover or active treatment beyond the arrow nudge, and that is
// deliberate. Once DemoPreview gives way to the real campaign previews, the previews
// themselves supply the movement a hover needs, and that is enough on its own. Any
// treatment added here in the meantime would only end up competing with it.
function PosterBands() {
    return (
        <ol>
            {demos.map((demo, index) => {
                const copy = copyFor(demo);

                return (
                    <li key={demo.href} className={posterGrounds[demo.theme]}>
                        <Link
                            href={demo.href}
                            className="group block focus-visible:outline-2 focus-visible:outline-current focus-visible:-outline-offset-4"
                        >
                            <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:items-center">
                                <div className="flex flex-col gap-6 lg:col-span-5">
                                    <div className="flex items-center gap-5">
                                        <span
                                            className={`font-display text-5xl tabular-nums leading-none ${posterAccents[demo.theme]}`}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <p className="text-sm">
                                            <span className="block font-semibold">
                                                {copy.company}
                                            </span>
                                            <span className="block">{copy.sector}</span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <p className="font-medium text-sm tracking-eyebrow">
                                            {copy.product}
                                        </p>
                                        <h2 className="whitespace-pre-line text-balance font-bold font-display text-3xl tracking-tight sm:text-5xl">
                                            {copy.campaign}
                                        </h2>
                                        <p className="max-w-xl text-pretty text-base">
                                            {copy.description}
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center gap-3 self-start border-current border-b pb-1 font-semibold text-sm">
                                        לצפייה בפרויקט
                                        <span
                                            aria-hidden="true"
                                            className="transition-transform group-hover:-translate-x-1"
                                        >
                                            ←
                                        </span>
                                    </span>
                                </div>
                                <div className="aspect-video overflow-hidden rounded-sm border border-current/20 lg:col-span-7">
                                    <DemoPreview theme={demo.theme} />
                                </div>
                            </div>
                        </Link>
                    </li>
                );
            })}
        </ol>
    );
}

export function WorkingHome() {
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
                            פרויקטים נבחרים
                        </p>
                        <h1 className="text-balance font-bold font-display text-4xl tracking-tight sm:text-6xl">
                            קמפיינים שנבנו
                            <span className="block text-subtle">להיראות אחרת.</span>
                        </h1>
                    </div>
                    <div className="flex flex-col gap-7 lg:col-span-4">
                        <p className="text-pretty text-lg text-muted">
                            אוסף קמפיינים דיגיטליים למותגים בדיוניים, שנבנו מקצה לקצה סביב רעיון אחד
                            חד ושפה שנאמנה לו בכל מסך.
                        </p>
                        <Qualities />
                    </div>
                </div>
            </header>

            <main>
                <PosterBands />
            </main>

            <footer>
                <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 pt-14 pb-10 sm:px-8 lg:grid-cols-12 lg:items-end">
                    <p className="font-bold font-display text-xl lg:col-span-4">
                        סוף העמוד.
                        <br />
                        תחילת הרעיון.
                    </p>
                    <div className="lg:col-span-8 lg:justify-self-end">
                        <Disclaimer />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export function PosterHome() {
    return (
        <div className="min-h-screen bg-surface">
            <header className="mx-auto w-full max-w-7xl px-6 sm:px-8">
                <div className="flex items-center justify-between border-border border-b py-6 text-sm">
                    <p className="font-bold font-display">תיק עבודות</p>
                    <p className="text-subtle">קמפיינים דיגיטליים / 2026</p>
                </div>
                <div className="flex flex-col gap-12 py-20 sm:py-28">
                    <h1 className="max-w-5xl text-balance font-bold font-display text-4xl tracking-tight sm:text-6xl">
                        לכל קמפיין
                        <span className="block text-subtle">יש צבע משלו.</span>
                    </h1>
                    <div className="grid gap-8 border-border border-t pt-10 lg:grid-cols-2 lg:items-end">
                        <p className="max-w-2xl text-pretty text-lg text-muted">
                            שלושה מותגים בדיוניים, ולכל אחד שפה ויזואלית שנבנתה רק בשבילו.
                        </p>
                        <div className="lg:justify-self-end">
                            <Qualities />
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <PosterBands />
            </main>

            <footer className="border-border border-t bg-background">
                <div className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8">
                    <Disclaimer />
                </div>
            </footer>
        </div>
    );
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
                    {demos.map((demo, index) => {
                        const copy = copyFor(demo);

                        return (
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
                                            {copy.company} / {copy.sector}
                                        </p>
                                        <div>
                                            <h2 className="whitespace-pre-line font-bold font-display text-2xl tracking-tight">
                                                {copy.campaign}
                                            </h2>
                                            <p className="mt-1 text-muted text-sm">
                                                {copy.product}
                                            </p>
                                        </div>
                                        <p className="max-w-2xl text-pretty text-muted text-sm">
                                            {copy.description}
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
                        );
                    })}
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
                    {demos.map((demo, index) => {
                        const copy = copyFor(demo);

                        return (
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
                                                {copy.company}
                                                <span className="block font-normal">
                                                    {copy.sector}
                                                </span>
                                            </p>
                                            <span className="font-display tabular-nums">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <p className="mb-2 font-medium text-sm">{copy.product}</p>
                                        <h2 className="whitespace-pre-line text-balance font-bold font-display text-3xl tracking-tight">
                                            {copy.campaign}
                                        </h2>
                                        <p className="mt-5 text-pretty text-base">
                                            {copy.description}
                                        </p>
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
                        );
                    })}
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
