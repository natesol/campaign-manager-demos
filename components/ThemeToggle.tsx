"use client";

import { useEffect, useState } from "react";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const options = [
    { value: "light", label: "בהיר", Icon: Sun },
    { value: "dark", label: "כהה", Icon: Moon },
    { value: "system", label: "לפי המערכת", Icon: Monitor },
];

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // The server cannot know the visitor's scheme, so the icon is only correct once
    // the client has resolved it. Rendering the same placeholder on both passes keeps
    // hydration quiet without hiding the control.
    useEffect(() => setMounted(true), []);

    const Current = mounted && resolvedTheme === "dark" ? Moon : Sun;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button variant="ghost" size="icon-sm" aria-label="ערכת צבעים">
                        <Current />
                    </Button>
                }
            />
            <DropdownMenuContent align="end" className="min-w-40">
                <DropdownMenuRadioGroup
                    value={mounted ? theme : undefined}
                    onValueChange={setTheme}
                >
                    {options.map(({ value, label, Icon }) => (
                        <DropdownMenuRadioItem key={value} value={value}>
                            <Icon />
                            {label}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
