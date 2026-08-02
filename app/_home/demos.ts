export type Demo = {
    href: string;
    theme: "cookies" | "skincare" | "mortgage";
    company: string;
    sector: string;
    product: string;
    campaign: string;
    description: string;
};

// Cookies and skincare carry the copy from their approved concept records. The
// mortgage campaign has no approved concept yet, so its copy is a placeholder.
export const demos: Demo[] = [
    {
        href: "/cookies/",
        theme: "cookies",
        company: "קרמב.",
        sector: "קמפיין עוגיות",
        product: "מהדורה מוגבלת",
        campaign: "שלושה טעמים.\nמהדורה אחת.",
        description:
            "קרם פיסטוק, פטל ושוקולד לבן, ושוקולד מריר עם מלח ים. שלושה טעמים בלתי נשכחים במהדורה אחת.",
    },
    {
        href: "/skincare/",
        theme: "skincare",
        company: "בדיוק לעונה",
        sector: "קמפיין טיפוח לקיץ",
        product: "שגרת טיפוח לבוקר ולערב",
        campaign: "הקיץ הגיע.\nשגרת הטיפוח מתחלפת.",
        description: "ניקוי ולחות בבוקר ובערב, והגנה מהשמש במהלך היום.",
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
