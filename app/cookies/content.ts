import type { StaticImageData } from "next/image";

import type { LucideIcon } from "lucide-react";
import { Bean, Calendar, Candy, Cherry, Clock, Droplet, MapPin, Nut, Sparkles } from "lucide-react";

import pistachioHeroImage from "./_assets/cookie-drop_asset-01_hero-pistachio_v1.webp";
import raspberryHeroImage from "./_assets/cookie-drop_asset-02_hero-raspberry-white-chocolate_v1.webp";
import cocoaHeroImage from "./_assets/cookie-drop_asset-03_hero-dark-chocolate-sea-salt_v1.webp";
import pistachioSectionImage from "./_assets/cookie-drop_asset-04_section-pistachio_v1.webp";
import raspberrySectionImage from "./_assets/cookie-drop_asset-05_section-raspberry-white-chocolate_v2.webp";
import cocoaSectionImage from "./_assets/cookie-drop_asset-06_section-dark-chocolate-sea-salt_v2.webp";

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
    heroImage: StaticImageData;
    sectionImage: StaticImageData;
    imageAlt: string;
    /* Palette classes are spelled out so Tailwind can see them statically. */
    accent: string;
    rule: string;
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
        heroImage: pistachioHeroImage,
        sectionImage: pistachioSectionImage,
        imageAlt: "עוגיית קרם פיסטוק גדולה עם פיסטוקים קלויים ומשיחת פיסטוק",
        accent: "text-campaign-cookies-pistachio",
        rule: "bg-campaign-cookies-pistachio/50",
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
        heroImage: raspberryHeroImage,
        sectionImage: raspberrySectionImage,
        imageAlt: "עוגיית פטל ושוקולד לבן גדולה עם פטל, שוקולד לבן ומשיחת פטל",
        accent: "text-campaign-cookies-raspberry",
        rule: "bg-campaign-cookies-raspberry/50",
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
        heroImage: cocoaHeroImage,
        sectionImage: cocoaSectionImage,
        imageAlt: "עוגיית שוקולד מריר גדולה עם שוקולד, מלח ים ומשיחת קקאו",
        accent: "text-campaign-cookies-chocolate",
        rule: "bg-campaign-cookies-chocolate/50",
    },
];

export const [pistachio, raspberry, cocoa] = flavors;

export const releaseMarker = "03.09 — 10:00";

/* Visual order in the RTL header: הדרופ / הטעמים / הסיפור. */
export const navigation = [
    { label: "הדרופ", href: "#hero" },
    { label: "הטעמים", href: "#flavors" },
    { label: "הסיפור", href: "#story" },
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
