"use client";

import { useRef } from "react";

import { Menu } from "lucide-react";

type MobileNavigationProps = {
    items: readonly {
        label: string;
        href: string;
    }[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
    const menuRef = useRef<HTMLDetailsElement>(null);

    function closeMenu() {
        menuRef.current?.removeAttribute("open");
    }

    return (
        <details className="mortgage-mobile-menu" ref={menuRef}>
            <summary aria-label="פתיחת ניווט">
                <Menu aria-hidden="true" />
            </summary>
            <nav aria-label="ניווט ראשי בנייד">
                {items.map((item) => (
                    <a href={item.href} key={item.href} onClick={closeMenu}>
                        {item.label}
                    </a>
                ))}
            </nav>
        </details>
    );
}
