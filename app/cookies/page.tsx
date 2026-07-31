import type { Metadata } from "next";
import Link from "next/link";

import { FlavorRail } from "./_components/FlavorRail";
import { ReminderForm } from "./_components/ReminderForm";
import { ScrollReveal } from "./_components/ScrollReveal";

export const metadata: Metadata = {
    title: "מהדורה מוגבלת",
};

/* -------------------------------------------------------------------------- */
/* Data                                                                        */
/* -------------------------------------------------------------------------- */

type Flavor = {
    id: string;
    number: string;
    name: string;
    nameLines: [string, string];
    note: [string, string];
    lead: string;
    body: string;
    features: [string, string, string];
    /* Palette classes are spelled out so Tailwind can see them statically. */
    accent: string;
    accentRule: string;
    accentBorder: string;
    disc: string;
    ground: string;
};

const flavors: Flavor[] = [
    {
        id: "pistachio",
        number: "01",
        name: "קרם פיסטוק",
        nameLines: ["קרם", "פיסטוק"],
        note: ["עשירה", "ונמסה"],
        lead: "עשירה, קטיפתית, בלתי נשכחת.",
        body: "עוגייה חמאתית רכה במילוי קרם פיסטוק אמיתי, עם פיסטוקים קלויים קצוצים וקמצוץ מלח ים.",
        features: ["100% פיסטוק אמיתי", "חמאה איכותית", "קמצוץ מלח ים"],
        accent: "text-drop-pistachio",
        accentRule: "bg-drop-pistachio/50",
        accentBorder: "border-drop-pistachio/50",
        disc: "bg-drop-pistachio/25",
        ground: "from-drop-paper to-drop-pistachio-tint",
    },
    {
        id: "raspberry",
        number: "02",
        name: "פטל שוקולד לבן",
        nameLines: ["פטל", "שוקולד לבן"],
        note: ["פירותית", "ומרעננת"],
        lead: "פריכות, מתיקות עדינה וחמיצות פטל טבעית.",
        body: "עוגיית חמאה רכה במילוי פטל אמיתי ושוקולד לבן, עם פיסות פטל שלמות שמעניקות ביס מלא חיים.",
        features: ["פטל אמיתי", "שוקולד לבן איכותי", "קמצוץ מלח ים"],
        accent: "text-drop-raspberry",
        accentRule: "bg-drop-raspberry/50",
        accentBorder: "border-drop-raspberry/50",
        disc: "bg-drop-raspberry/20",
        ground: "from-drop-pistachio-tint to-drop-raspberry-tint",
    },
    {
        id: "cocoa",
        number: "03",
        name: "שוקולד מריר עם מלח ים",
        nameLines: ["שוקולד מריר", "וקמצוץ מלח ים"],
        note: ["עמוקה", "ומחממת"],
        lead: "עמוק, עשיר ומאוזן להפליא.",
        body: "עוגיית קקאו רכה עם שוקולד מריר מעולה וקמצוץ מלח ים שמדגיש כל ביס.",
        features: ["קקאו איכותי", "שוקולד מריר", "קמצוץ מלח ים"],
        accent: "text-drop-cocoa",
        accentRule: "bg-drop-cocoa/40",
        accentBorder: "border-drop-cocoa/40",
        disc: "bg-drop-cocoa/25",
        ground: "from-drop-raspberry-tint to-drop-cocoa-tint",
    },
];

const dropDetails = [
    { label: "תאריך", value: "03.09", caption: "יום שלישי" },
    { label: "שעה", value: "10:00", caption: "בבוקר" },
    { label: "איפה?", value: "בבתי קפה", caption: "נבחרים ברחבי הארץ" },
];

const footerColumns = [
    {
        title: "גלו עוד",
        links: ["הזמנות", "שאלות ותשובות", "מדיניות משלוחים", "מדיניות החזרות"],
    },
    { title: "הטעמים", links: ["קרם פיסטוק", "פטל שוקולד לבן", "שוקולד מריר"] },
    { title: "הסיפורים שלנו", links: ["הסיפור שלנו", "בלוג ומתכונים", "חדשות ועדכונים"] },
];

/* -------------------------------------------------------------------------- */
/* Placeholders                                                                */
/* -------------------------------------------------------------------------- */

/* Flat discs and rings stand in for product photography and the icon set, which
   are not licensed yet. They carry composition and colour, nothing more. */

function Disc({ tone, size }: { tone: string; size: string }) {
    return <span className={`block shrink-0 rounded-full ${tone} ${size}`} />;
}

/* Rectangular stand-in for the tray and packaging shots. */
function Plate({ tone, height }: { tone: string; height: string }) {
    return <span className={`block w-full rounded-md ${tone} ${height}`} />;
}

function Glyph({ tone = "border-drop-cocoa/40" }: { tone?: string }) {
    return <span className={`block size-9 shrink-0 rounded-full border ${tone}`} />;
}

function TrioGlyph() {
    return (
        <span className="flex items-center justify-center gap-1.5">
            <Disc tone="bg-drop-pistachio/40" size="size-3" />
            <Disc tone="bg-drop-paper" size="size-3" />
            <Disc tone="bg-drop-raspberry/40" size="size-3" />
        </span>
    );
}

/* -------------------------------------------------------------------------- */
/* Sections                                                                    */
/* -------------------------------------------------------------------------- */

function SiteHeader() {
    return (
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-7 sm:px-10">
            <Link href="/" className="font-bold font-display text-2xl">
                קרמב.
            </Link>
            <nav className="hidden items-center gap-4 text-sm sm:flex">
                <a href="#pistachio" className="underline-offset-4 hover:underline">
                    הטעמים
                </a>
                <span className="text-drop-cocoa/30">/</span>
                <a href="#story" className="underline-offset-4 hover:underline">
                    הסיפור
                </a>
                <span className="text-drop-cocoa/30">/</span>
                <a href="#drop" className="underline-offset-4 hover:underline">
                    שאלות
                </a>
            </nav>
            <p className="text-drop-cocoa/70 text-sm tabular-nums">03.09 — 10:00</p>
        </header>
    );
}

/* Callout arrangements, matching where each label sits relative to its cookie
   in the approved mockup. */
const calloutLayout = {
    /* Label to the visual left of the cookie. */
    labelEnd: { row: "flex-row", tilt: "rotate-[20deg]" },
    /* Label to the visual right of the cookie. */
    labelStart: { row: "flex-row-reverse", tilt: "-rotate-[20deg]" },
} as const;

/* The whole group is the control, so selection works on touch and never needs hover. */
function HeroFlavor({
    flavor,
    size,
    layout,
}: {
    flavor: Flavor;
    size: string;
    layout: keyof typeof calloutLayout;
}) {
    const { row, tilt } = calloutLayout[layout];
    return (
        <a
            href={`#${flavor.id}`}
            className={`group flex items-start gap-3 outline-offset-4 focus-visible:outline-2 focus-visible:outline-drop-cocoa ${row}`}
        >
            <span className="transition-transform duration-700 group-hover:-translate-y-3">
                <Disc tone={flavor.disc} size={size} />
            </span>
            {/* Angled hairline tying the label to its cookie, as in the mockup. */}
            <span
                className={`mt-10 hidden h-px w-10 shrink-0 origin-center sm:block ${tilt} ${flavor.accentRule}`}
            />
            <span className="flex max-w-36 flex-col gap-1 pt-2">
                <span className={`font-bold font-display text-2xl tabular-nums ${flavor.accent}`}>
                    {flavor.number}
                </span>
                <span className="font-bold text-sm leading-snug">{flavor.name}</span>
                <span className="text-drop-cocoa/60 text-sm leading-snug">
                    {flavor.note[0]}
                    <br />
                    {flavor.note[1]}
                </span>
            </span>
        </a>
    );
}

function Hero() {
    const [pistachio, raspberry, cocoa] = flavors;
    return (
        <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-6 pt-6 pb-24 sm:block sm:h-[46rem] sm:px-10 sm:pb-0">
            <h1 className="text-balance text-center font-bold font-display text-6xl sm:absolute sm:inset-x-0 sm:top-[4%] sm:text-8xl">
                שלושה
                <br />
                טעמים
                <span className="mt-4 block text-4xl text-drop-pistachio sm:text-6xl">
                    מהדורה אחת.
                </span>
            </h1>

            <p className="max-w-sm text-balance text-center text-base text-drop-cocoa/70 sm:absolute sm:inset-x-0 sm:top-[58%] sm:mx-auto">
                שלושה טעמים בלתי נשכחים במהדורה אחת. בחרו את האהובה עליכם.
            </p>

            {/* Pistachio upper left, raspberry mid right, cocoa low centre. */}
            <div className="sm:absolute sm:end-[1%] sm:top-[8%]">
                <HeroFlavor flavor={pistachio} size="size-36 sm:size-56" layout="labelEnd" />
            </div>
            <div className="sm:absolute sm:start-[1%] sm:top-[30%]">
                <HeroFlavor flavor={raspberry} size="size-36 sm:size-52" layout="labelStart" />
            </div>
            <div className="sm:absolute sm:start-[26%] sm:top-[62%]">
                <HeroFlavor flavor={cocoa} size="size-36 sm:size-48" layout="labelEnd" />
            </div>
        </section>
    );
}

/* Chapters alternate side by index, so the journey never reads as one repeated template. */
function FlavorChapter({ flavor, index }: { flavor: Flavor; index: number }) {
    const productFirst = index % 2 === 1;
    return (
        <section
            id={flavor.id}
            aria-labelledby={`${flavor.id}-heading`}
            className={`scroll-mt-24 bg-linear-to-b py-24 sm:py-36 ${flavor.ground}`}
        >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 sm:grid-cols-2 sm:gap-16 sm:px-10">
                <ScrollReveal className={`flex flex-col gap-6 ${productFirst ? "sm:order-2" : ""}`}>
                    <Glyph tone={flavor.accentBorder} />
                    <h2
                        id={`${flavor.id}-heading`}
                        className={`font-bold font-display text-5xl sm:text-6xl ${flavor.accent}`}
                    >
                        {flavor.nameLines[0]}
                        <br />
                        {flavor.nameLines[1]}
                    </h2>
                    <p className="text-pretty text-drop-cocoa/85 text-xl">{flavor.lead}</p>
                    <span className={`block h-px w-16 ${flavor.accentRule}`} />
                    <p className="max-w-md text-pretty text-base text-drop-cocoa/75">
                        {flavor.body}
                    </p>
                    <ul className="mt-2 flex flex-col gap-5">
                        {flavor.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-4 text-base">
                                <Glyph tone={flavor.accentBorder} />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </ScrollReveal>
                <ScrollReveal
                    delay={120}
                    className={`flex justify-center ${productFirst ? "sm:order-1" : ""}`}
                >
                    <Disc tone={flavor.disc} size="size-64 sm:size-96" />
                </ScrollReveal>
            </div>
        </section>
    );
}

function StorySection() {
    return (
        <section
            id="story"
            aria-labelledby="story-heading"
            className="scroll-mt-24 bg-drop-cocoa-tint py-24 sm:py-36"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-6 text-center sm:px-10">
                <TrioGlyph />
                <div className="flex flex-col gap-5">
                    <h2 id="story-heading" className="font-bold font-display text-4xl sm:text-5xl">
                        שלושה טעמים.
                        <span className="block text-drop-pistachio">מהדורה אחת.</span>
                    </h2>
                    <p className="mx-auto max-w-xl text-pretty text-base text-drop-cocoa/75">
                        שלוש קלאסיקות, שלושה רגעי אושר, במהדורה מוגבלת למי שאוהבים טעם אמיתי.
                    </p>
                </div>
                <div className="w-full max-w-3xl">
                    <Plate tone="bg-drop-paper" height="h-64 sm:h-96" />
                </div>
            </div>
        </section>
    );
}

function DropDetails() {
    return (
        <section
            id="drop"
            aria-labelledby="drop-heading"
            className="scroll-mt-24 bg-drop-paper py-24 sm:py-36"
        >
            <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-12 px-6 text-center sm:px-10">
                <Glyph />
                <div className="flex flex-col gap-4">
                    <h2 id="drop-heading" className="font-bold font-display text-4xl sm:text-5xl">
                        מתי ואיפה?
                    </h2>
                    <p className="text-pretty text-base text-drop-cocoa/75">
                        מהדורה מוגבלת.
                        <br />
                        מגיעים — ונעלמים.
                    </p>
                </div>

                <dl className="grid w-full gap-10 sm:grid-cols-3 sm:gap-0">
                    {dropDetails.map((detail, index) => (
                        <div
                            key={detail.label}
                            className={`flex flex-col items-center gap-3 sm:px-8 ${
                                index > 0 ? "sm:border-drop-raspberry/35 sm:border-e" : ""
                            }`}
                        >
                            <Glyph />
                            <dt className="font-bold text-base text-drop-pistachio">
                                {detail.label}
                            </dt>
                            <dd className="flex flex-col gap-1">
                                <span className="font-bold font-display text-2xl tabular-nums">
                                    {detail.value}
                                </span>
                                <span className="text-drop-cocoa/70 text-sm">{detail.caption}</span>
                            </dd>
                        </div>
                    ))}
                </dl>

                <div className="flex flex-col items-center gap-4">
                    <TrioGlyph />
                    <p className="text-drop-cocoa/70 text-sm">
                        הכמות מוגבלת מאוד — כל עוד יש, זה שלנו.
                    </p>
                </div>
            </div>
        </section>
    );
}

function ReminderSection() {
    return (
        <section
            id="reminder"
            aria-labelledby="reminder-heading"
            className="scroll-mt-24 bg-drop-paper pb-24 sm:pb-36"
        >
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-6 text-center sm:px-10">
                <Glyph />
                <h2 id="reminder-heading" className="font-bold font-display text-4xl sm:text-5xl">
                    אל תישארו
                    <span className="block text-drop-raspberry">מחוץ לדרופ.</span>
                </h2>
                <p className="text-pretty text-base text-drop-cocoa/75">
                    הירשמו עכשיו וקבלו תזכורת לפני שהמהדורה המוגבלת נפתחת.
                </p>

                <ReminderForm />

                <p className="text-drop-cocoa/60 text-sm">
                    לא נשלח ספאם, וניתן לבטל את ההרשמה בכל עת.
                </p>
            </div>
        </section>
    );
}

function BrandStory() {
    return (
        <section className="bg-drop-paper pb-24 sm:pb-36">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-6 text-center sm:px-10">
                <div className="w-full max-w-2xl">
                    <Plate tone="bg-drop-cocoa-tint" height="h-64 sm:h-80" />
                </div>
                <h2 className="font-bold font-display text-3xl sm:text-4xl">
                    שלושה טעמים.
                    <span className="block text-drop-pistachio">מהדורה אחת.</span>
                </h2>
                <span className="flex items-center gap-6">
                    <Glyph tone="border-drop-pistachio/50" />
                    <Glyph tone="border-drop-cocoa/40" />
                    <Glyph tone="border-drop-raspberry/50" />
                </span>
                <p className="text-pretty text-base text-drop-cocoa/75">
                    אנחנו מאמינים בפשטות טובה, בחומרי גלם משובחים, וברגעים הקטנים שהופכים יום רגיל
                    לחגיגה קטנה. <strong className="font-bold">תודה שאתם חלק מהמסע שלנו.</strong>
                </p>
                <div className="flex flex-col gap-2">
                    <p className="font-bold font-display text-3xl">קרמב.</p>
                    <p className="text-drop-cocoa/70 text-sm">מאפים. אנשים. תשוקה.</p>
                </div>
            </div>
        </section>
    );
}

function SiteFooter() {
    return (
        <footer className="border-drop-cocoa/15 border-t bg-drop-paper">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10">
                <div className="grid gap-10 sm:grid-cols-4">
                    {footerColumns.map((column) => (
                        <div key={column.title} className="flex flex-col gap-4">
                            <p className="font-bold text-base">{column.title}</p>
                            <ul className="flex flex-col gap-2">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#drop"
                                            className="text-drop-cocoa/70 text-sm underline-offset-4 hover:underline"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="flex flex-col gap-4">
                        <p className="font-bold font-display text-2xl">קרמב.</p>
                        <p className="text-drop-cocoa/70 text-sm">
                            מאפייה ישראלית של אנשים שאוהבים לאפות בשבילכם.
                        </p>
                        <span className="flex gap-3">
                            <Glyph />
                            <Glyph />
                            <Glyph />
                        </span>
                    </div>
                </div>

                <dl className="grid gap-8 border-drop-cocoa/15 border-t pt-10 sm:grid-cols-3">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <Glyph />
                        <dt className="font-bold text-base">דברו איתנו</dt>
                        <dd className="text-drop-cocoa/70 text-sm">
                            ימים א׳—ה׳, 9:00—17:00
                            <br />
                            03-1234567
                        </dd>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <Glyph />
                        <dt className="font-bold text-base">כתבו לנו</dt>
                        <dd className="text-drop-cocoa/70 text-sm">
                            נשמח לשמוע מכם
                            <br />
                            hello@krembo.co.il
                        </dd>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center">
                        <Glyph />
                        <dt className="font-bold text-base">צריך עזרה?</dt>
                        <dd className="text-drop-cocoa/70 text-sm">
                            אנחנו כאן בשבילכם
                            <br />
                            צרו איתנו קשר
                        </dd>
                    </div>
                </dl>

                <div className="flex flex-col items-center gap-3 border-drop-cocoa/15 border-t pt-8 text-center">
                    <TrioGlyph />
                    <p className="text-drop-cocoa/60 text-sm">
                        © קרמב. כל הזכויות שמורות. · תנאי שימוש · מדיניות פרטיות · הצהרת נגישות
                    </p>
                    <p className="text-drop-cocoa/55 text-sm">
                        קמפיין בדיוני שנוצר לצורך תיק עבודות. המותג, המוצרים ופרטי הקשר אינם
                        אמיתיים.
                    </p>
                </div>
            </div>
        </footer>
    );
}

/* -------------------------------------------------------------------------- */

export default function CookiesRoute() {
    const railFlavors = flavors.map((flavor) => ({
        id: flavor.id,
        name: flavor.name,
        dot: flavor.accentRule,
        label: flavor.accent,
    }));

    return (
        <div className="flex flex-1 flex-col bg-drop-paper text-drop-cocoa">
            <FlavorRail flavors={railFlavors} />
            <SiteHeader />
            <Hero />
            {flavors.map((flavor, index) => (
                <FlavorChapter key={flavor.id} flavor={flavor} index={index} />
            ))}
            <StorySection />
            <DropDetails />
            <ReminderSection />
            <BrandStory />
            <SiteFooter />
        </div>
    );
}
