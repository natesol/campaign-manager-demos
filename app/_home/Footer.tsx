import { ThemeToggle } from "@/components/ThemeToggle";

export function Footer() {
    return (
        // Mirrors the hero: margin and padding on the container, the rule on the
        // inner block so it lines up with the hero's rules.
        <footer className="mx-auto below-sm:mt-16 mt-24 w-full max-w-7xl below-lg:px-6 below-sm:px-4 px-8">
            <div className="flex flex-wrap items-end justify-between below-lg:gap-6 gap-8 border-border border-t below-lg:pt-10 pt-14 below-lg:pb-8 pb-10">
                <p className="font-black font-display text-xl">
                    סוף העמוד.
                    <br />
                    תחילת הרעיון.
                </p>
                <p className="max-w-xl text-sm text-subtle-foreground">
                    כל המותגים, המוצרים והשירותים המוצגים כאן בדיוניים ונוצרו לצורך תיק העבודות
                    בלבד. אין קשר ביניהם לבין חברות או מוצרים קיימים.
                </p>
                <ThemeToggle />
            </div>
        </footer>
    );
}
