import Link from "next/link";

export default function CookiesRoute() {
    return (
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-6 py-10">
            <header className="rounded border border-black/25 border-dashed p-6">
                <p className="mb-3 text-black/40 text-xs tracking-widest">כותרת עליונה</p>
                <Link href="/" className="underline underline-offset-4">
                    חזרה
                </Link>
            </header>

            <section className="rounded border border-black/25 border-dashed p-10">
                <p className="mb-3 text-black/40 text-xs tracking-widest">גיבור</p>
                <h1 className="font-bold text-2xl">כותרת הקמפיין</h1>
                <p className="mt-2">משפט פתיחה קצר.</p>
            </section>

            <section className="rounded border border-black/25 border-dashed p-10">
                <p className="mb-3 text-black/40 text-xs tracking-widest">תוכן ראשון</p>
                <p>בלוק תוכן.</p>
            </section>

            <section className="rounded border border-black/25 border-dashed p-10">
                <p className="mb-3 text-black/40 text-xs tracking-widest">תוכן שני</p>
                <p>בלוק תוכן.</p>
            </section>

            <section className="rounded border border-black/25 border-dashed p-10">
                <p className="mb-3 text-black/40 text-xs tracking-widest">קריאה לפעולה</p>
                <p>כפתור או טופס.</p>
            </section>

            <footer className="rounded border border-black/25 border-dashed p-6">
                <p className="mb-3 text-black/40 text-xs tracking-widest">כותרת תחתונה</p>
                <p className="text-black/60 text-sm">שורת גילוי נאות.</p>
            </footer>
        </div>
    );
}
