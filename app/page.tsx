import Link from "next/link";

const demos = [
  { href: "/cookies/", label: "Cookies" },
  { href: "/skincare/", label: "Skincare" },
  { href: "/mortgage/", label: "Mortgage" },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-6 py-10">
      <header className="rounded border border-dashed border-black/25 p-6">
        <p className="mb-3 text-xs uppercase tracking-widest text-black/40">
          header
        </p>
        <h1 className="text-2xl font-bold">Campaign demos</h1>
      </header>

      <section className="rounded border border-dashed border-black/25 p-6">
        <p className="mb-3 text-xs uppercase tracking-widest text-black/40">
          intro
        </p>
        <p>Short description of the set.</p>
      </section>

      <main className="rounded border border-dashed border-black/25 p-6">
        <p className="mb-3 text-xs uppercase tracking-widest text-black/40">
          demo list
        </p>
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
        <p className="mb-3 text-xs uppercase tracking-widest text-black/40">
          footer
        </p>
        <p className="text-sm text-black/60">Disclosure line.</p>
      </footer>
    </div>
  );
}
