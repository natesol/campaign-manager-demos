export const mortgageContent = {
    company: "עיקר משכנתאות",
    /* `href` is where the link goes, `section` is the element that marks it as the
       one you are currently reading. They differ for the first item: it returns to
       the true top of the page, while the hero is what puts it in view. */
    navigation: [
        { label: "דף הבית", href: "#top", section: "hero" },
        { label: "שירותים", href: "#services", section: "services" },
        { label: "מי אנחנו", href: "#team", section: "team" },
        { label: "יצירת קשר", href: "#contact", section: "contact" },
    ],
    hero: {
        headline: ["משכנתא", "לא לוקחים", "בערך."],
        support: "שיחת מיפוי קצרה כדי להבין איפה אתם עומדים ומה כדאי לבדוק בהמשך.",
        cta: "קובעים שיחת מיפוי",
    },
    introduction: {
        label: "על החברה",
        opening: "עיקר משכנתאות מלווה אנשים שנמצאים לפני משכנתא חדשה או רוצים לבחון משכנתא קיימת.",
        continuation:
            "מתחילים בהבנת המצב, הנתונים והשאלות הפתוחות, ורק אחר כך מחליטים כיצד נכון להתקדם.",
        closing: "הכל מתחיל בשיחה קצרה, בלי התחייבות ובלי הבטחות מראש.",
    },
    services: {
        label: "השירותים שלנו",
        heading: "איך אנחנו יכולים לעזור",
        introduction:
            "כל משכנתא מתחילה מנתונים, צרכים והחלטות שונות. אנחנו בונים את הייעוץ לפי המקום שבו אתם נמצאים ומה שצריך לבדוק לפני שמתקדמים.",
        detailLabel: "למידע נוסף",
        detailStatus: "בקרוב",
        items: [
            {
                title: "תכנון משכנתא חדשה",
                body: "מגדירים מסגרת שמתאימה להכנסות, להתחייבויות ולהון העצמי לפני שמתקדמים לבנקים.",
                icon: "house",
                featured: true,
            },
            {
                title: "בדיקת יכולת ומסגרת",
                body: "עוברים על הנתונים הקיימים ובוחנים איזו מסגרת התחייבות נכון להמשיך לבדוק.",
                icon: "clipboard",
                featured: false,
            },
            {
                title: "בניית תמהיל משכנתא",
                body: "בוחנים מסלולים, תקופות ורמות סיכון כדי להבין אילו חלופות מתאימות לתמונה שלכם.",
                icon: "chart",
                featured: false,
            },
            {
                title: "ליווי מול הבנקים",
                body: "מכינים את המידע ואת השאלות שצריך לברר, ושומרים על סדר לאורך ההתנהלות.",
                icon: "bank",
                featured: false,
            },
            {
                title: "בדיקת משכנתא קיימת",
                body: "בודקים את התנאים, ההחזרים והצרכים שהשתנו כדי להבין מה דורש בחינה נוספת.",
                icon: "refresh",
                featured: false,
            },
        ],
    },
    process: {
        label: "איך אנחנו עובדים",
        heading: "כך נראה תהליך הייעוץ",
        introduction:
            "שיחת המיפוי היא נקודת ההתחלה. עוברים על המצב הקיים, מבינים אילו נתונים כבר נמצאים בידיכם ואילו שאלות עדיין דורשות בדיקה. לאחר מכן מגדירים את דרך העבודה המתאימה, את המידע שצריך להשלים ואת הצעדים שכדאי לבחון לפני שמקבלים החלטה.",
        steps: [
            {
                title: "ממפים את המצב",
                body: "עוברים על ההכנסות, ההתחייבויות, ההון העצמי, הנכס והמשכנתא הקיימת, אם ישנה.",
            },
            {
                title: "בודקים ובונים כיוון",
                body: "מזהים נתונים חסרים, בוחנים אפשרויות ומבינים כיצד החלטות שונות עשויות להשפיע על ההחזר ועל התהליך.",
            },
            {
                title: "מתקדמים עם תכנית",
                body: "מגדירים אילו מסמכים להכין, מה לברר מול הבנקים ומהו הצעד הבא שנכון לבצע.",
            },
        ],
    },
    position: {
        label: "הגישה שלנו",
        heading: "בלי הבטחות. עם שאלות נכונות.",
        support:
            "לא מבטיחים ריבית, אישור או חיסכון לפני שמבינים את התמונה המלאה. מתחילים מהנתונים, מהצרכים ומההחלטות שעומדות בפניכם.",
        principles: [
            {
                title: "בודקים את הנתונים",
                body: "עוברים על המידע הקיים ומזהים מה עדיין חסר לפני שמסיקים מסקנות.",
            },
            {
                title: "מסבירים את האפשרויות",
                body: "מציגים את המשמעות של כל אפשרות בשפה ברורה, בלי להחליט במקומכם.",
            },
            {
                title: "מגדירים את הצעד הבא",
                body: "מתקדמים רק לאחר שברור מה צריך להכין, לבדוק או לברר.",
            },
        ],
    },
    team: {
        label: "מי אנחנו",
        heading: "האנשים שמלווים אתכם",
        introduction:
            "עיקר משכנתאות היא צוות קטן של יועצי משכנתאות ואנשי ליווי. בכל תהליך יש איש קשר שמכיר את התמונה, מרכז את השאלות ומסייע לשמור על רצף ברור עד להחלטה.",
        featured: {
            name: "יעל רז",
            role: "מנהלת הייעוץ",
            bio: "מובילה את שיחות המיפוי, עוברת עם הלקוחות על התמונה הכלכלית ומגדירה את דרך העבודה.",
        },
        people: [
            {
                name: "איתי שלו",
                role: "יועץ משכנתאות",
                bio: "עוסק בבדיקת הנתונים, בבניית חלופות ובהכנת הלקוחות להתנהלות מול הבנקים.",
            },
            {
                name: "מיכל ברק",
                role: "יועצת משכנתאות",
                bio: "מלווה משכנתאות חדשות ובדיקות של משכנתאות קיימות, ומרכזת את השאלות שעולות בתהליך.",
            },
            {
                name: "עומר לוי",
                role: "קשרי לקוחות",
                bio: "מתאם את הפגישות, מרכז את המסמכים ושומר על תקשורת רציפה לאורך הייעוץ.",
            },
        ],
    },
    contact: {
        label: "יצירת קשר",
        heading: "בואו נבין מה נכון לבדוק",
        support:
            "השאירו פרטים ונחזור לשיחת מיפוי קצרה. נכיר את המצב, נענה על השאלות הראשונות ונבין יחד מה הצעד הבא.",
        /* Deliberately transparent placeholders. The company is fictional, so the
           number is a dummy and the social links point at each service's own home
           page rather than at invented accounts that would land on an error.
           `ltr` marks the labels that must not be reordered by the bidi algorithm. */
        methods: [
            { label: "שיחה טלפונית", icon: "phone", href: "tel:1234567890", ltr: false },
            { label: "WhatsApp", icon: "whatsapp", href: "https://www.whatsapp.com", ltr: true },
            { label: "Facebook", icon: "facebook", href: "https://www.facebook.com", ltr: true },
        ],
        form: {
            title: "לקראת שיחת המיפוי",
            fullName: "שם מלא",
            phone: "טלפון",
            stage: "באיזה שלב אתם?",
            placeholder: "בחרו אפשרות",
            options: ["כבר מצאנו נכס", "רק מתחילים לבדוק", "מתקרבים לחתימה", "בודקים משכנתא קיימת"],
            submit: "חזרו אליי",
            reset: "מילוי מחדש",
            notice: "הפרטים אינם נשלחים ואינם נשמרים בדמו.",
            success: "הפרטים לא נשלחו ולא נשמרו. זהו טופס הדגמה.",
        },
    },
    footer: {
        line: "ייעוץ משכנתאות שמתחיל בתמונה המלאה.",
        navigation: {
            title: "ניווט",
            links: [
                { label: "דף הבית", href: "#top" },
                { label: "אודות", href: "#about" },
                { label: "שירותים", href: "#services" },
                { label: "מאמרים", href: null },
                { label: "יצירת קשר", href: "#contact" },
            ],
        },
        services: {
            title: "שירותים",
            links: ["משכנתא חדשה", "מחזור משכנתא", "איחוד הלוואות", "בדיקת משכנתא קיימת"],
        },
        contact: {
            title: "יצירת קשר",
            links: [
                { label: "03-376-1320", icon: "phone" },
                { label: "WhatsApp", icon: "whatsapp" },
                { label: "hello@ikar-mashkanta.co.il", icon: "email" },
            ],
        },
        legal: ["מדיניות פרטיות", "הצהרת נגישות", "תנאי שימוש"],
        copyright: "© 2026 עיקר משכנתאות",
    },
} as const;

export type NavigationItem = (typeof mortgageContent.navigation)[number];
export type ServiceIconName = (typeof mortgageContent.services.items)[number]["icon"];
export type ContactIconName =
    | (typeof mortgageContent.contact.methods)[number]["icon"]
    | (typeof mortgageContent.footer.contact.links)[number]["icon"];
export type ContactFormContent = typeof mortgageContent.contact.form;
