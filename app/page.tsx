import Link from "next/link";

const demos = [
  { href: "/cookies/", label: "עוגיות" },
  { href: "/skincare/", label: "טיפוח" },
  { href: "/mortgage/", label: "משכנתא" },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-6 py-10">
      <header className="rounded border border-dashed border-black/25 p-6">
        <p className="mb-3 text-xs tracking-widest text-black/40">כותרת עליונה</p>
        <h1 className="text-2xl font-bold">דמו קמפיינים</h1>
      </header>

      <section className="rounded border border-dashed border-black/25 p-6">
        <p className="mb-3 text-xs tracking-widest text-black/40">פתיח</p>
        <p>תיאור קצר של הסט.</p>
      </section>

      <main className="rounded border border-dashed border-black/25 p-6">
        <p className="mb-3 text-xs tracking-widest text-black/40">רשימת הדמואים</p>
        <ul className="flex flex-col gap-3">
          {demos.map((demo) => (
            <li key={demo.href}>
              <Link href={demo.href} className="underline underline-offset-4">
                {demo.label}
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className="rounded border border-dashed border-black/25 p-6">
        <p className="mb-3 text-xs tracking-widest text-black/40">כותרת תחתונה</p>
        <p className="text-sm text-black/60">שורת גילוי נאות.</p>
      </footer>
    </div>
  );
}
