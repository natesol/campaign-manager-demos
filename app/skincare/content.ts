import type { LucideIcon } from "lucide-react";
import { Droplet, Heart, Leaf, Moon, Shield, Sun } from "lucide-react";

/*
 * The campaign copy. The headline, support, product-family line, product
 * captions, CTA, closing lines, and disclosure are approved copy from the
 * concept record (docs/demos/2-seasonal-skincare/v1/) and must not be reworded
 * without a new approval. The section leads follow the v3 hero's language.
 *
 * שגרת טיפוח is a fixed phrase; neither שגרה nor טיפוח stands alone for it.
 */

export const brand = "בדיוק לעונה";

export const navigation = [
    { label: "שגרת הטיפוח", href: "#routine" },
    { label: "המוצרים", href: "#products" },
];

export const primaryCta = { label: "להכיר את שגרת הטיפוח", href: "#routine" };

export const hero = {
    /* Coral periods, as in the approved v3 hero. */
    headline: [
        { text: "הקיץ הגיע", dot: true },
        { text: "שגרת הטיפוח", dot: false },
        { text: "מתחלפת", dot: true },
    ],
    support: "ניקוי ולחות בבוקר ובערב, והגנה מהשמש במהלך היום.",
    cue: "לשגרת הטיפוח",
};

export type Product = {
    id: "cleanser" | "moisturizer" | "sunscreen";
    step: string;
    label: string;
    name: string;
    /* English packaging descriptor, part of the approved label grid. */
    descriptor: string;
    caption: string;
};

export const products: Product[] = [
    {
        id: "cleanser",
        step: "1",
        label: "ניקוי",
        name: "ג'ל ניקוי",
        descriptor: "CLEANSING GEL",
        caption: "פותח את הבוקר וסוגר את היום.",
    },
    {
        id: "moisturizer",
        step: "2",
        label: "לחות",
        name: "קרם לחות",
        descriptor: "MOISTURIZER",
        caption: "מגיע אחרי הניקוי, בבוקר ובערב.",
    },
    {
        id: "sunscreen",
        step: "3",
        label: "הגנה",
        name: "קרם הגנה SPF 50",
        descriptor: "SPF 50",
        caption: "השלב האחרון לפני שיוצאים.",
    },
];

export const summer = {
    heading: "עור קליל, מוגן וזוהר כל הקיץ",
    body: [
        "השמש חזקה יותר, הימים ארוכים יותר, והעור זקוק לטיפוח שמותאם לעונה.",
        "שגרת הטיפוח שלנו משלבת ניקוי עדין, לחות מאוזנת והגנה גבוהה מהשמש, לעור בריא, רענן וחיוני.",
    ],
    cta: { label: "לכל המוצרים", href: "#products" },
};

export const routine = {
    heading: "בוקר וערב",
    support: "שגרת טיפוח אחת שמשתנה עם היום.",
    morning: {
        icon: Sun as LucideIcon,
        title: "בוקר",
        body: "ניקוי, לחות והגנה. שלושה שלבים שעובדים יחד לאורך כל היום.",
        items: ["ג'ל ניקוי", "קרם לחות", "קרם הגנה SPF 50"],
    },
    evening: {
        icon: Moon as LucideIcon,
        title: "ערב",
        body: "ניקוי ולחות. שני שלבים שמרגיעים ומחדשים את העור בלילה.",
        items: ["ג'ל ניקוי", "קרם לחות"],
    },
};

export const sequence = {
    heading: { text: "שלושה מוצרים לשגרת טיפוח אחת", dot: true },
};

export const formulas = {
    heading: "פורמולות קלילות לתוצאות מרשימות",
    features: [
        {
            icon: Droplet as LucideIcon,
            title: "לחות לאורך כל היום",
            caption: "מרכיבים פעילים לשמירה על לחות, רכות וזוהר.",
        },
        {
            icon: Shield as LucideIcon,
            title: "הגנה מתקדמת",
            caption: "הגנה רחבת טווח SPF 50 מפני קרני UVA/UVB.",
        },
        {
            icon: Leaf as LucideIcon,
            title: "קליל ולא דביק",
            caption: "נמרח בקלות, נספג במהירות ומתאים לשימוש יומיומי.",
        },
        {
            icon: Heart as LucideIcon,
            title: "מתאים לכל סוגי העור",
            caption: "פורמולות עדינות, בלי רכיבים מיותרים.",
        },
    ],
};

export const moment = {
    heading: { text: "מהבוקר עד הערב, בדיוק לעונה", dot: true },
    support: "שלושת המוצרים עובדים יחד ומשתנים עם היום.",
};

export const closing = {
    heading: { text: "שלושה מוצרים, מהבוקר עד הערב", dot: true },
    support: "ג'ל ניקוי וקרם לחות לבוקר ולערב. קרם הגנה SPF 50 לפני שיוצאים.",
};

export const footer = {
    nav: [
        { label: "שגרת הטיפוח", href: "#hero" },
        { label: "המוצרים", href: "#products" },
        { label: "בוקר וערב", href: "#routine" },
    ],
    disclosure: "קונספט בדיוני לתיק עבודות. המותג והמוצרים אינם אמיתיים.",
};
