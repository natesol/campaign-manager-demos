export type Demo = {
    href: string;
    theme: "cookies" | "skincare" | "mortgage";
    company: string;
    sector: string;
    product: string;
    /* The campaign line, split where the campaign's own page paints its accent. */
    campaign: { text: string; accent?: boolean }[];
    description: string;
};

// Each entry carries its campaign's own approved identity and lead copy, kept
// here as the home page's data rather than imported from pages still in motion.
export const demos: Demo[] = [
    {
        href: "/cookies/",
        theme: "cookies",
        company: "קרמב.",
        sector: "קמפיין עוגיות",
        product: "מהדורה מוגבלת",
        campaign: [{ text: "שלושה טעמים\n" }, { text: "דרופ אחד.", accent: true }],
        description:
            "קרם פיסטוק, פטל ושוקולד לבן ושוקולד מריר ומלח ים. שלושה טעמים במהדורה חד-פעמית ובכמות מוגבלת.",
    },
    {
        href: "/skincare/",
        theme: "skincare",
        company: "בדיוק לעונה",
        sector: "קמפיין טיפוח לקיץ",
        product: "שגרת טיפוח לבוקר ולערב",
        campaign: [
            { text: "הקיץ הגיע" },
            { text: ".", accent: true },
            { text: "\nשגרת הטיפוח מתחלפת" },
            { text: ".", accent: true },
        ],
        description: "ניקוי ולחות בבוקר ובערב, והגנה מהשמש במהלך היום.",
    },
    {
        href: "/mortgage/",
        theme: "mortgage",
        company: "עיקר משכנתאות",
        sector: "ייעוץ משכנתאות",
        product: "שיחת מיפוי",
        campaign: [{ text: "משכנתא\nלא לוקחים " }, { text: "בערך.", accent: true }],
        description: "שיחת מיפוי קצרה כדי להבין איפה אתם עומדים ומה כדאי לבדוק בהמשך.",
    },
];
