import Link from "next/link";

export default function MortgageRoute() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-6 py-10">
      <header className="rounded border border-dashed border-black/25 p-6">
        <p className="mb-3 text-xs tracking-widest text-black/40">כותרת עליונה</p>
        <Link href="/" className="underline underline-offset-4">
          חזרה
        </Link>
      </header>

      <section className="rounded border border-dashed border-black/25 p-10">
        <p className="mb-3 text-xs tracking-widest text-black/40">גיבור</p>
        <h1 className="text-2xl font-bold">כותרת הקמפיין</h1>
        <p className="mt-2">משפט פתיחה קצר.</p>
      </section>

      <section className="rounded border border-dashed border-black/25 p-10">
        <p className="mb-3 text-xs tracking-widest text-black/40">תוכן ראשון</p>
        <p>בלוק תוכן.</p>
      </section>

      <section className="rounded border border-dashed border-black/25 p-10">
        <p className="mb-3 text-xs tracking-widest text-black/40">תוכן שני</p>
        <p>בלוק תוכן.</p>
      </section>

      <section className="rounded border border-dashed border-black/25 p-10">
        <p className="mb-3 text-xs tracking-widest text-black/40">קריאה לפעולה</p>
        <p>כפתור או טופס.</p>
      </section>

      <footer className="rounded border border-dashed border-black/25 p-6">
        <p className="mb-3 text-xs tracking-widest text-black/40">כותרת תחתונה</p>
        <p className="text-sm text-black/60">שורת גילוי נאות.</p>
      </footer>
    </div>
  );
}
