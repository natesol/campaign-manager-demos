import Link from "next/link";

import { ThemeToggle } from "./ThemeToggle";

type Demo = {
    href: string;
    theme: "cookies" | "skincare" | "mortgage";
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
        theme: "cookies",
        company: "קמח ואור",
        sector: "מותג מאפים",
        product: "מהדורת זרם הטעמים",
        campaign: "מהדורה מוגבלת",
        description:
            "השקה של שלושה טעמים במהדורה אחת: פיסטוק, פטל ושוקולד מריר. עמוד שנבנה סביב תנועה, צבע והמעבר בין המוצרים בגלילה אחת רצופה.",
    },
    {
        href: "/skincare/",
        theme: "skincare",
        company: "אווריס",
        sector: "מותג טיפוח",
        product: "שגרת אוגוסט",
        campaign: "שגרת טיפוח לקיץ",
        description:
            "מוצרים שמתחברים לשגרה אחת לקיץ הישראלי. עמוד עם עריכה נקייה, בחירת מוצר ברורה ותחושת קלילות שנשמרת בכל מסך.",
    },
    {
        href: "/mortgage/",
        theme: "mortgage",
        company: "קומה ראשונה",
        sector: "ייעוץ משכנתאות",
        product: "פגישת סדר",
        campaign: "ייעוץ משכנתא",
        description:
            "עמוד להשארת פרטים לפני התחייבות ארוכה. השפה נשענת על אמון ובהירות, ומובילה לטופס רב-שלבי שנעים למלא גם בנייד.",
    },
];

const lockedDemoCopy: Partial<Record<Demo["theme"], DemoCopy>> = {
    cookies: {
        company: "קרמב.",
        sector: "קמפיין עוגיות",
        product: "מהדורה מוגבלת",
        campaign: "שלושה טעמים.\nמהדורה אחת.",
        description:
            "קרם פיסטוק, פטל ושוקולד לבן, ושוקולד מריר עם מלח ים. שלושה טעמים בלתי נשכחים במהדורה אחת.",
    },
    skincare: {
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
    cookies: "bg-campaign-cookies-paper",
    skincare: "bg-campaign-skincare-paper",
    mortgage: "bg-campaign-mortgage-paper",
};

const boldCardColors: Record<Demo["theme"], string> = {
    cookies: "bg-campaign-cookies-paper text-campaign-cookies-ink",
    skincare: "bg-campaign-skincare-paper text-campaign-skincare-ink",
    mortgage: "bg-campaign-mortgage-paper text-campaign-mortgage-ink",
};

// Poster bands: each campaign gets a full-width ground in its own palette, and an
// accent reserved for the oversized numeral so it only ever carries large text.
const posterGrounds: Record<Demo["theme"], string> = {
    cookies: "bg-campaign-cookies-band text-foreground",
    skincare: "bg-campaign-skincare-band text-foreground",
    mortgage: "bg-campaign-mortgage-band text-foreground",
};

const posterAccents: Record<Demo["theme"], string> = {
    cookies: "text-campaign-cookies-accent",
    skincare: "text-campaign-skincare-accent",
    mortgage: "text-campaign-mortgage-accent",
};

// The supporting lines of a poster card sit back until the card is hovered. The
// campaign name and its description never fade: they are what the card is for.
const fadeUntilHover = "opacity-80 transition-opacity group-hover:opacity-100";

function DemoPreview({ theme, compact = false }: { theme: Demo["theme"]; compact?: boolean }) {
    return (
        <div
            aria-hidden="true"
            className={`relative isolate h-full w-full overflow-hidden ${previewColors[theme]}`}
        >
            <div className="absolute inset-5 border border-border-strong/60 sm:inset-7">
                <div className="absolute inset-x-0 top-0 flex items-center justify-between border-border-strong/60 border-b px-4 py-3 text-subtle-foreground text-xs">
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
            <span className="absolute inset-0 flex items-center justify-center pt-5 font-medium text-muted-foreground text-xs tracking-eyebrow">
                תצוגה מקדימה בהמשך
            </span>
        </div>
    );
}

// One line at every width: the three points read as a single strapline, so they
// never wrap or drop to a second row.
function Qualities() {
    return (
        <ul className="flex flex-nowrap items-center gap-2 whitespace-nowrap text-subtle-foreground text-xs sm:gap-3 sm:text-sm">
            {qualities.map((quality, index) => (
                <li key={quality} className="flex items-center gap-2 sm:gap-3">
                    {index > 0 && <span aria-hidden="true">/</span>}
                    <span>{quality}</span>
                </li>
            ))}
        </ul>
    );
}

function Disclaimer() {
    return (
        <p className="max-w-2xl text-sm text-subtle-foreground">
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
                    <li key={demo.href} className={`flow-root ${posterGrounds[demo.theme]}`}>
                        {/* The band is full-bleed but the link is not. It spans the
                            content column only, and most of the vertical space is its
                            margin rather than its padding, so the band keeps its height
                            while the quiet space around the card stays unclickable.
                            flow-root on the li keeps that margin from collapsing out of
                            the colored ground. */}
                        <Link
                            href={demo.href}
                            className="group mx-auto my-8 flex w-full max-w-7xl flex-wrap items-center gap-6 px-4 py-5 focus-visible:outline-2 focus-visible:outline-current focus-visible:-outline-offset-4 sm:px-6 lg:my-16 lg:gap-10 lg:px-8 lg:py-8"
                        >
                            {/* Text asks for a readable column, the preview for one
                                step more, both from the container scale. Side by side
                                while they fit, stacked when they do not. */}
                            <div className="flex grow basis-md flex-col gap-4 lg:gap-6">
                                <div
                                    className={`flex items-center gap-4 lg:gap-5 ${fadeUntilHover}`}
                                >
                                    <span
                                        className={`font-display text-4xl tabular-nums leading-none lg:text-5xl ${posterAccents[demo.theme]}`}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <p className="text-sm">
                                        <span className="block font-semibold">{copy.company}</span>
                                        <span className="block">{copy.sector}</span>
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p
                                        className={`font-medium text-sm tracking-eyebrow ${fadeUntilHover}`}
                                    >
                                        {copy.product}
                                    </p>
                                    <h2 className="whitespace-pre-line text-balance font-bold font-display text-3xl tracking-tight sm:text-4xl xl:text-5xl">
                                        {copy.campaign}
                                    </h2>
                                    <p className="max-w-xl text-pretty text-base">
                                        {copy.description}
                                    </p>
                                </div>
                                <span
                                    className={`inline-flex items-center gap-3 self-start border-current border-b pb-1 font-semibold text-sm ${fadeUntilHover}`}
                                >
                                    לצפייה בפרויקט
                                    <span
                                        aria-hidden="true"
                                        className="transition-transform group-hover:-translate-x-1"
                                    >
                                        ←
                                    </span>
                                </span>
                            </div>
                            <div className="aspect-video grow basis-lg overflow-hidden rounded-sm border border-current/20">
                                <DemoPreview theme={demo.theme} />
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
        <div className="min-h-screen bg-background text-foreground">
            {/* The closing rule sits on the hero block rather than on the header, so
                it lines up with the rule under the top bar instead of running the
                extra width of the header's own padding. The margin below it keeps the
                first campaign band from butting straight up against the rule. */}
            <header className="mx-auto mb-16 w-full max-w-7xl px-4 sm:mb-24 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between border-border border-b py-6 text-sm">
                    <p className="font-bold font-display">תיק עבודות</p>
                    <div className="flex items-center gap-5">
                        <p>קמפיינים דיגיטליים / 2026</p>
                        <ThemeToggle />
                    </div>
                </div>
                {/* Each block asks for a named content width from the container
                    scale — the same steps max-w-* uses — and the row wraps when two
                    no longer fit. No breakpoint and no invented number decides it. */}
                <div className="flex flex-wrap items-end gap-8 border-border border-b py-10 lg:gap-10 lg:py-24">
                    <div className="grow basis-xl">
                        <p className="mb-5 font-bold text-base text-subtle-foreground tracking-eyebrow">
                            פרויקטים נבחרים
                        </p>
                        {/* 750 sits between the scale's bold and black. Rubik is a
                            variable font, so it is a real instance rather than a
                            synthesized one, and the title is the only place that wants
                            it — hence an inline value, not a token nothing else uses. */}
                        <h1 className="text-balance font-[750] font-display text-3xl xs:text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block">קמפיינים שנבנו</span>
                            {/* The full stop stays in the body ink: it punctuates the
                                sentence rather than belonging to the tinted phrase. */}
                            <span className="block text-emphasis-foreground">
                                להיראות אחרת<span className="text-foreground">.</span>
                            </span>
                        </h1>
                    </div>
                    <div className="flex grow basis-sm flex-col gap-5 lg:gap-7">
                        <p className="text-pretty text-lg text-muted-foreground">
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

            {/* Mirrors the header: margin and padding on the container, the rule on
                the inner block so it lines up with the header's rules. */}
            <footer className="mx-auto mt-16 w-full max-w-7xl px-4 sm:mt-24 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-end justify-between gap-6 border-border border-t pt-10 pb-8 lg:gap-8 lg:pt-14 lg:pb-10">
                    <p className="font-bold font-display text-xl">
                        סוף העמוד.
                        <br />
                        תחילת הרעיון.
                    </p>
                    <Disclaimer />
                </div>
            </footer>
        </div>
    );
}

export function PosterHome() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between border-border border-b py-6 text-sm">
                    <p className="font-bold font-display">תיק עבודות</p>
                    <p>קמפיינים דיגיטליים / 2026</p>
                </div>
                <div className="flex flex-col gap-12 py-20 sm:py-28">
                    <h1 className="max-w-5xl text-balance font-bold font-display text-4xl tracking-tight sm:text-6xl">
                        לכל קמפיין
                        <span className="block text-subtle-foreground">יש צבע משלו.</span>
                    </h1>
                    <div className="grid gap-8 border-border border-t pt-10 lg:grid-cols-2 lg:items-end">
                        <p className="max-w-2xl text-pretty text-lg text-muted-foreground">
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

            <footer className="border-border border-t bg-muted">
                <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-8">
                    <Disclaimer />
                </div>
            </footer>
        </div>
    );
}

export function MinimalHome() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between border-border border-b py-6 text-sm">
                    <p className="font-semibold">תיק עבודות</p>
                    <p className="text-subtle-foreground">03 פרויקטים</p>
                </div>
                <div className="flex flex-col gap-10 py-20 sm:py-28">
                    <h1 className="max-w-4xl text-balance font-display font-medium text-4xl tracking-tight sm:text-5xl">
                        עמודי נחיתה עם רעיון ברור,
                        <span className="text-subtle-foreground"> בלי רעש מסביב.</span>
                    </h1>
                    <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
                        <p className="max-w-2xl text-pretty text-lg text-muted-foreground">
                            שלושה קמפיינים למותגים בדיוניים, כל אחד עם שפה, מקצב ואינטראקציה
                            שמתאימים בדיוק לסיפור שהוא צריך לספר.
                        </p>
                        <div className="lg:justify-self-end">
                            <Qualities />
                        </div>
                    </div>
                </div>
            </header>

            <main className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-8 sm:pb-32">
                <ol className="border-border border-t">
                    {demos.map((demo, index) => {
                        const copy = copyFor(demo);

                        return (
                            <li key={demo.href} className="border-border border-b">
                                <Link
                                    href={demo.href}
                                    className="group grid gap-7 py-8 outline-offset-4 focus-visible:outline-2 focus-visible:outline-foreground sm:grid-cols-[auto_1fr] sm:py-10 lg:grid-cols-[5rem_1fr_18rem_auto] lg:items-center"
                                >
                                    <span className="text-sm text-subtle-foreground tabular-nums">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm text-subtle-foreground">
                                            {copy.company} / {copy.sector}
                                        </p>
                                        <div>
                                            <h2 className="whitespace-pre-line font-bold font-display text-2xl tracking-tight">
                                                {copy.campaign}
                                            </h2>
                                            <p className="mt-1 text-muted-foreground text-sm">
                                                {copy.product}
                                            </p>
                                        </div>
                                        <p className="max-w-2xl text-pretty text-muted-foreground text-sm">
                                            {copy.description}
                                        </p>
                                    </div>
                                    <div className="h-32 overflow-hidden rounded-sm border border-border sm:col-start-2 lg:col-start-auto">
                                        <DemoPreview theme={demo.theme} compact />
                                    </div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border-strong text-lg transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background sm:col-start-2 sm:justify-self-end lg:col-start-auto">
                                        <span className="sr-only">לצפייה בפרויקט</span>
                                        <span aria-hidden="true">←</span>
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ol>
            </main>

            <footer className="mx-auto w-full max-w-6xl border-border border-t px-4 py-10 sm:px-8">
                <Disclaimer />
            </footer>
        </div>
    );
}

export function BoldHome() {
    return (
        <div className="dark min-h-screen bg-background text-foreground">
            <header className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between border-border border-b py-6 text-sm">
                    <p className="font-bold font-display">PORTFOLIO / תיק עבודות</p>
                    <p className="text-subtle-foreground">2026</p>
                </div>
                <div className="py-16 sm:py-24">
                    <p className="mb-6 font-semibold text-sm text-subtle-foreground tracking-eyebrow">
                        שלושה מותגים. שלוש שפות.
                    </p>
                    <h1 className="max-w-6xl text-balance font-bold font-display text-4xl tracking-tight sm:text-7xl">
                        רעיונות שגורמים
                        <span className="text-campaign-cookies-accent"> למוצר לבלוט,</span>
                        <span className="text-campaign-skincare-accent"> לסיפור לזרום</span>
                        <span className="text-campaign-mortgage-accent"> ולאנשים לפעול.</span>
                    </h1>
                    <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-end">
                        <p className="max-w-2xl text-pretty text-lg text-subtle-foreground">
                            אוסף קמפיינים דיגיטליים למותגים בדיוניים, שנבנו מקצה לקצה סביב רעיון אחד
                            חד ושפה שנאמנה לו בכל מסך.
                        </p>
                        <div className="lg:justify-self-end">
                            <Qualities />
                        </div>
                    </div>
                </div>
            </header>

            <main className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-8 sm:pb-32">
                <ol className="grid gap-5 lg:grid-cols-3">
                    {demos.map((demo, index) => {
                        const copy = copyFor(demo);

                        return (
                            <li key={demo.href}>
                                <Link
                                    href={demo.href}
                                    className={`group flex h-full flex-col overflow-hidden rounded-sm outline-offset-4 focus-visible:outline-2 focus-visible:outline-background ${boldCardColors[demo.theme]}`}
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

            <footer className="border-border border-t">
                <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-8 lg:grid-cols-2 lg:items-end">
                    <p className="font-bold font-display text-2xl">העבודה מדברת. הרעיון מוביל.</p>
                    <div className="lg:justify-self-end">
                        <Disclaimer />
                    </div>
                </div>
            </footer>
        </div>
    );
}
