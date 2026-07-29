import Link from "next/link";

const demos = [
  { href: "/cookies/", label: "Cookies" },
  { href: "/skincare/", label: "Skincare" },
  { href: "/mortgage/", label: "Mortgage" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-6 py-16">
      <h1 className="text-2xl font-bold">Campaign demos</h1>
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
  );
}
