import Link from "next/link";

export default function MortgageRoute() {
  return (
    <main
      lang="he"
      dir="rtl"
      className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-16"
    >
      <h1 className="text-2xl font-bold">/mortgage/</h1>
      <Link href="/" className="underline underline-offset-4">
        /
      </Link>
    </main>
  );
}
