"use client";

import { useEffect, useRef, useState } from "react";

import { Menu, X } from "lucide-react";

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
        <div
            className={isOpen ? "mortgage-mobile-menu is-open" : "mortgage-mobile-menu"}
            ref={menuRef}
        >
            <button
                type="button"
                ref={triggerRef}
                aria-controls="mortgage-mobile-navigation"
                aria-expanded={isOpen}
                aria-label={isOpen ? "סגירת ניווט" : "פתיחת ניווט"}
                onClick={() => setIsOpen((open) => !open)}
            >
                {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
            <nav id="mortgage-mobile-navigation" aria-label="ניווט ראשי בנייד" hidden={!isOpen}>
                {items.map((item) => (
                    <a href={item.href} key={item.href} onClick={closeMenu}>
                        {item.label}
                    </a>
                ))}
            </nav>
        </div>
    );
}
