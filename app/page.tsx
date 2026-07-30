import Link from "next/link";

const demos = [
    { href: "/cookies/", label: "עוגיות" },
    { href: "/skincare/", label: "טיפוח" },
    { href: "/mortgage/", label: "משכנתא" },
];

export default function Home() {
    return (
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-6 py-10">
            <header className="rounded border border-black/25 border-dashed p-6">
                <p className="mb-3 text-black/40 text-xs tracking-widest">כותרת עליונה</p>
                <h1 className="font-bold text-2xl">דמו קמפיינים</h1>
            </header>

            <section className="rounded border border-black/25 border-dashed p-6">
                <p className="mb-3 text-black/40 text-xs tracking-widest">פתיח</p>
                <p>תיאור קצר של הסט.</p>
            </section>

            <main className="rounded border border-black/25 border-dashed p-6">
                <p className="mb-3 text-black/40 text-xs tracking-widest">רשימת הדמואים</p>
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

            <footer className="rounded border border-black/25 border-dashed p-6">
                <p className="mb-3 text-black/40 text-xs tracking-widest">כותרת תחתונה</p>
                <p className="text-black/60 text-sm">שורת גילוי נאות.</p>
            </footer>
        </div>
    );
}
