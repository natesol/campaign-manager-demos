import type { LucideIcon } from "lucide-react";
import { Droplet, Flower, Leaf, Mail, MapPin, Moon, Phone, Shield, Sun, Waves } from "lucide-react";

/*
 * The campaign copy follows the approved full-page design. שגרת טיפוח is a
 * fixed phrase; neither שגרה nor טיפוח stands alone for it.
 */

export const brand = "בדיוק לעונה";

export const navigation = [
    { label: "שגרת הטיפוח", href: "#routine" },
    { label: "המוצרים", href: "#products" },
];

export const primaryCta = { label: "להכיר את שגרת הטיפוח", href: "#routine" };

export const hero = {
    /* Coral periods, as in the approved hero. */
    headline: [
        { text: "הקיץ הגיע", dot: true },
        { text: "שגרת הטיפוח", dot: false },
        { text: "מתחלפת", dot: true },
    ],
    support: "ניקוי ולחות בבוקר ובערב, והגנה מהשמש במהלך היום.",
    cue: "לשגרת הטיפוח",
};

/* The morning-and-evening mosaic: three copy cards woven between six images. */
export const routine = {
    eyebrow: "שגרת טיפוח",
    heading: "בוקר וערב",
    support: "שגרת טיפוח מדויקת שמתאימה לקצב הקיץ – קלה, יעילה, ונותנת לעור בדיוק מה שהוא צריך.",
    cards: {
        morning: {
            icon: Sun as LucideIcon,
            title: "בוקר",
            body: "ניקוי, לחות, הגנה. שלושה שלבים פשוטים שעובדים יחד להגנה גבוהה לאורך כל היום.",
        },
        evening: {
            icon: Moon as LucideIcon,
            title: "ערב",
            body: "ניקוי ולחות. שני שלבים הכרחיים להתחדשות של הלילה.",
        },
        protection: {
            icon: Shield as LucideIcon,
            title: "הגנה יומיומית",
            body: "קרם הגנה SPF 50 קליל עם ספקטרום רחב שומר על העור מפני קרני UVA/UVB לאורך כל היום.",
        },
    },
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
        caption: "מנקה בעדינות ומרענן את העור, מכין את העור להמשך היום.",
    },
    {
        id: "moisturizer",
        step: "2",
        label: "לחות",
        name: "קרם לחות",
        descriptor: "MOISTURIZER",
        caption: "מספקת לחות ואיזון לעור רך, גמיש וזוהר.",
    },
    {
        id: "sunscreen",
        step: "3",
        label: "הגנה",
        name: "קרם הגנה SPF 50",
        descriptor: "SPF 50",
        caption: "הגנה רחבת טווח UVA/UVB לשמירה על העור לאורך כל היום.",
    },
];

export const sequence = {
    headingLines: ["שגרת בוקר פשוטה,", "תוצאות לאורך כל היום"],
    cta: { label: "לשגרת הטיפוח המלאה", href: "#routine" },
};

export const testimonials = {
    headingLines: ["אלפי לקוחות", "כבר מרגישים את ההבדל"],
    reviews: [
        {
            quote: "מוצרי הקיץ האהובים עליי. לא שומניים, קלילים ומכינים את העור לקיץ.",
            name: "נועה, 29",
            skin: "עור רגיל",
            icon: Waves as LucideIcon,
        },
        {
            quote: "השילוב של ניקוי עדין, לחות והגנה יוצר תחושה נינוחה כל היום.",
            name: "מיכל, 34",
            skin: "עור מעורב",
            icon: Droplet as LucideIcon,
        },
        {
            quote: "העור שלי נראה הרבה יותר בריא. המרקם קל, הניקיון לא מייבש וההגנה מושלמת לימים חמים.",
            name: "רוני, 26",
            skin: "עור רגיש",
            icon: Leaf as LucideIcon,
        },
        {
            quote: "הפכתי את שגרת הטיפוח לחלק מהבוקר שלי. שלושה שלבים וזהו – פשוט וקל.",
            name: "דנה, 31",
            skin: "עור יבש",
            icon: Flower as LucideIcon,
        },
        {
            quote: "קרם ההגנה הכי נעים שהשתמשתי בו. קליל, נספג מהר ולא משאיר תחושה דביקה.",
            name: "שיר, 27",
            skin: "עור שמן",
            icon: Sun as LucideIcon,
        },
    ],
    cta: { label: "לקריאת חוות דעת נוספות", href: "#hero" },
};

export const glow = {
    headingLines: ["עור קליל,", "מוגן וזוהר", "כל הקיץ"],
    body: "הקיץ קורא לשגרת טיפוח חכמה וקלה: ניקוי עדין, לחות מאוזנת והגנה יעילה מהשמש. כך תשמרי על עור רענן, נוח ומואר – בכל יום ובכל מזג אוויר.",
    cta: { label: "לגלות את כל המוצרים", href: "#products" },
};

export const finalCta = {
    heading: "מוכנה לקבל עור זוהר, בריא ומוגן?",
    support: "הצטרפי לאלפי נשים שכבר מרגישות את ההבדל.",
    /* A demonstrative dead control, by explicit user decision. */
    cta: { label: "לרכישה עכשיו", href: "#hero" },
};

export const footer = {
    brandLine: "טיפוח חכם. עור שמרגיש טוב. כל יום.",
    nav: {
        title: "ניווט",
        items: [
            { label: "המוצרים שלנו", href: "#products" },
            { label: "שגרת הטיפוח", href: "#routine" },
            { label: "אודות", href: "#hero" },
            { label: "שאלות נפוצות", href: "#hero" },
            { label: "צור קשר", href: "#hero" },
        ],
    },
    service: {
        title: "שירות לקוחות",
        items: ["משלוחים והחזרות", "תנאי שימוש", "מדיניות פרטיות"],
    },
    contact: {
        title: "צרי קשר",
        items: [
            { icon: Mail as LucideIcon, value: "info@skincare.co.il", ltr: true },
            { icon: Phone as LucideIcon, value: "03-1234567", ltr: true },
            { icon: MapPin as LucideIcon, value: "תל אביב, ישראל", ltr: false },
        ],
    },
    rights: "© בדיוק לעונה. כל הזכויות שמורות.",
};
