"use client";

import { useEffect, useRef, useState } from "react";

import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MobileNavigationProps = {
    items: readonly {
        label: string;
        href: string;
    }[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        function handlePointerDown(event: PointerEvent) {
            if (!menuRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false);
                triggerRef.current?.focus();
            }
        }

        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    function closeMenu() {
        setIsOpen(false);
    }

    return (
        <div className="relative md:hidden" ref={menuRef}>
            <Button
                type="button"
                variant={isOpen ? "default" : "secondary"}
                size="icon-lg"
                className={cn(
                    "size-12 rounded-full",
                    isOpen &&
                        "bg-campaign-mortgage-accent text-white hover:bg-campaign-mortgage-accent/85",
                )}
                ref={triggerRef}
                aria-controls="mortgage-mobile-navigation"
                aria-expanded={isOpen}
                aria-label={isOpen ? "סגירת ניווט" : "פתיחת ניווט"}
                onClick={() => setIsOpen((open) => !open)}
            >
                {isOpen ? (
                    <X aria-hidden="true" className="size-5" />
                ) : (
                    <Menu aria-hidden="true" className="size-5" />
                )}
            </Button>
            <nav
                id="mortgage-mobile-navigation"
                aria-label="ניווט ראשי בנייד"
                className="absolute end-0 top-full z-50 mt-3 grid w-52 overflow-hidden rounded-2xl border border-border bg-popover p-2 text-popover-foreground shadow-lg"
                hidden={!isOpen}
            >
                {items.map((item) => (
                    <a
                        className={cn(
                            "rounded-xl px-4 py-3 font-semibold transition-colors",
                            "hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
                        )}
                        href={item.href}
                        key={item.href}
                        onClick={closeMenu}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </div>
    );
}
