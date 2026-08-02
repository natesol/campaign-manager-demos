import type { LucideIcon } from "lucide-react";
import { Bean, Calendar, Candy, Cherry, Clock, Droplet, MapPin, Nut, Sparkles } from "lucide-react";

/*
 * Every Hebrew string here is approved copy from the concept record
 * (docs/demos/1-cookie-drop/cookie-drop_approved-concept.md) and must not be
 * reworded without a new approval.
 *
 * Wherever the three flavors appear together they keep one order:
 * pistachio, raspberry, chocolate.
 */

export type Flavor = {
    id: "pistachio" | "raspberry" | "cocoa";
    number: string;
    name: string;
    nameLines: [string, string];
    lead: string;
    body: string;
    icon: LucideIcon;
    features: { icon: LucideIcon; label: string }[];
    /* Palette classes are spelled out so Tailwind can see them statically. */
    accent: string;
    rule: string;
    disc: string;
    brush: string;
};

export const flavors: Flavor[] = [
    {
        id: "pistachio",
        number: "01",
        name: "קרם פיסטוק",
        nameLines: ["קרם", "פיסטוק"],
        lead: "עשירה, קרמית וקראנצ'ית",
        body: "עוגייה זהובה עם פיסטוק קלוי, קרם פיסטוק עדין וקמצוץ מלח ים.",
        icon: Nut,
        features: [
            { icon: Nut, label: "פיסטוק קלוי" },
            { icon: Droplet, label: "קרם פיסטוק עדין" },
            { icon: Sparkles, label: "קמצוץ מלח ים" },
        ],
        accent: "text-campaign-cookies-pistachio",
        rule: "bg-campaign-cookies-pistachio/50",
        disc: "bg-campaign-cookies-pistachio/25",
        brush: "bg-campaign-cookies-pistachio/15",
    },
    {
        id: "raspberry",
        number: "02",
        name: "פטל ושוקולד לבן",
        nameLines: ["פטל", "ושוקולד לבן"],
        lead: "פירותית, מתוקה ומרעננת",
        body: "עוגייה זהובה עם פטל אמיתי ושוקולד לבן, טריות מתוקה שמעניקה ביס מלא חיים.",
        icon: Cherry,
        features: [
            { icon: Cherry, label: "פטל אמיתי" },
            { icon: Candy, label: "שוקולד לבן" },
            { icon: Sparkles, label: "קמצוץ מלח ים" },
        ],
        accent: "text-campaign-cookies-raspberry",
        rule: "bg-campaign-cookies-raspberry/50",
        disc: "bg-campaign-cookies-raspberry/20",
        brush: "bg-campaign-cookies-raspberry/10",
    },
    {
        id: "cocoa",
        number: "03",
        name: "שוקולד מריר ומלח ים",
        nameLines: ["שוקולד מריר", "ומלח ים"],
        lead: "עמוק, עשיר ומאוזן להפליא",
        body: "עוגיית קקאו רכה עם שוקולד מריר מעולה וקמצוץ מלח ים שמדגיש כל ביס.",
        icon: Bean,
        features: [
            { icon: Bean, label: "קקאו איכותי" },
            { icon: Candy, label: "שוקולד מריר" },
            { icon: Sparkles, label: "קמצוץ מלח ים" },
        ],
        accent: "text-campaign-cookies-chocolate",
        rule: "bg-campaign-cookies-chocolate/50",
        disc: "bg-campaign-cookies-chocolate/25",
        brush: "bg-campaign-cookies-chocolate/10",
    },
];

export const [pistachio, raspberry, cocoa] = flavors;

export const releaseMarker = "03.09 — 10:00";

/* The header navigation; הדרופ closes the list and leads to the action. */
export const navigation = [
    { label: "הטעמים", href: "#flavors" },
    { label: "הסיפור", href: "#story" },
    { label: "הדרופ", href: "#reminder" },
];

/* The side rail's stops, in page order. */
export const sections = [
    { id: "hero", label: "פתיחה", dot: "bg-foreground", accent: "text-foreground" },
    {
        id: "pistachio",
        label: "קרם פיסטוק",
        dot: "bg-campaign-cookies-pistachio",
        accent: "text-campaign-cookies-pistachio",
    },
    {
        id: "raspberry",
        label: "פטל ושוקולד לבן",
        dot: "bg-campaign-cookies-raspberry",
        accent: "text-campaign-cookies-raspberry",
    },
    {
        id: "cocoa",
        label: "שוקולד מריר ומלח ים",
        dot: "bg-campaign-cookies-chocolate",
        accent: "text-campaign-cookies-chocolate",
    },
    { id: "story", label: "דרופ אחד", dot: "bg-foreground", accent: "text-foreground" },
    { id: "reminder", label: "תזכורת", dot: "bg-foreground", accent: "text-foreground" },
];

export const dropDetails: {
    icon: LucideIcon;
    label: string;
    value: string;
    caption: string;
    accent: string;
}[] = [
    {
        icon: Calendar,
        label: "תאריך",
        value: "03.09",
        caption: "יום שלישי",
        accent: "text-campaign-cookies-pistachio",
    },
    {
        icon: Clock,
        label: "שעה",
        value: "10:00",
        caption: "בבוקר",
        accent: "text-campaign-cookies-raspberry",
    },
    {
        icon: MapPin,
        label: "איפה?",
        value: "בבתי קפה",
        caption: "נבחרים ברחבי הארץ",
        accent: "text-campaign-cookies-chocolate",
    },
];

export const footer = {
    brandLine: "מאפים. אנשים. תשוקה.",
    nav: [
        { label: "הדרופ", href: "#hero" },
        { label: "הטעמים", href: "#flavors" },
        { label: "הסיפור", href: "#story" },
        { label: "תזכורת", href: "#reminder" },
    ],
    info: ["שאלות ותשובות", "משלוחים", "החזרות"],
    /* Days and hours stay separate fields: the hours run must render inside its
       own LTR context, or the bidi algorithm displays the range reversed. */
    contact: {
        email: "hello@krembo.co.il",
        phone: "03-1234567",
        days: "א׳–ה׳",
        hours: "09:00–17:00",
    },
    legal: ["תנאי שימוש", "מדיניות פרטיות", "הצהרת נגישות"],
    rights: "© קרמב. כל הזכויות שמורות.",
};
