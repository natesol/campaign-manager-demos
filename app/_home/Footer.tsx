export function Footer() {
    return (
        // Mirrors the hero: margin and padding on the container, the rule on the
        // inner block so it lines up with the hero's rules.
        <footer className="mx-auto mt-16 w-full max-w-7xl px-4 sm:mt-24 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6 border-border border-t pt-10 pb-8 lg:gap-8 lg:pt-14 lg:pb-10">
                <p className="font-bold font-display text-xl">
                    סוף העמוד.
                    <br />
                    תחילת הרעיון.
                </p>
                <p className="max-w-2xl text-sm text-subtle-foreground">
                    כל המותגים, המוצרים והשירותים המוצגים כאן בדיוניים ונוצרו לצורך תיק העבודות
                    בלבד. אין קשר ביניהם לבין חברות או מוצרים קיימים.
                </p>
            </div>
        </footer>
    );
}
