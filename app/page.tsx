import Link from "next/link";

import { ThemeToggle } from "./_components/ThemeToggle";

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

function copyFor(demo: Demo): DemoCopy {
    return lockedDemoCopy[demo.theme] ?? demo;
}

const qualities = ["עברית מלאה ו-RTL", "מותאם לכל מסך", "אתרים סטטיים"];

const previewColors: Record<Demo["theme"], string> = {
    cookies: "bg-campaign-cookies-paper",
    skincare: "bg-campaign-skincare-paper",
    mortgage: "bg-campaign-mortgage-paper",
};

const posterAccents: Record<Demo["theme"], string> = {
    cookies: "text-campaign-cookies-accent",
    skincare: "text-campaign-skincare-accent",
    mortgage: "text-campaign-mortgage-accent",
};

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

function PosterBands() {
    return (
        <ol>
            {demos.map((demo, index) => {
                const copy = copyFor(demo);

                return (
                    <li key={demo.href} className="flow-root">
                        <Link
                            href={demo.href}
                            className="group mx-auto my-8 flex w-full max-w-7xl flex-wrap items-center gap-6 px-4 py-5 transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-current focus-visible:-outline-offset-4 sm:px-6 lg:my-16 lg:gap-10 lg:px-8 lg:py-8 dark:hover:bg-zinc-900"
                        >
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
                                    className={`inline-flex items-center gap-3 self-start font-semibold text-sm ${fadeUntilHover}`}
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

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
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
                        אוסף קמפיינים דיגיטליים למותגים בדיוניים, שנבנו מקצה לקצה סביב רעיון אחד חד
                        ושפה שנאמנה לו בכל מסך.
                    </p>
                    <Qualities />
                </div>
            </header>

            <main>
                <PosterBands />
            </main>

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
