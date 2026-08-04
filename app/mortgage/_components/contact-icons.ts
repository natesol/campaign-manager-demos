import type { ComponentType, SVGProps } from "react";

import { IconBrandFacebook, IconBrandWhatsapp } from "@tabler/icons-react";
import { Mail, Phone } from "lucide-react";

import type { ContactIconName } from "../content";

/* Two icon sets, because lucide dropped its brand marks: the generic glyphs stay
   lucide, the brands come from tabler. Typed by what both render into, and shared
   by the contact section and the footer, which draw from the same union. */
export const contactIcons: Record<ContactIconName, ComponentType<SVGProps<SVGSVGElement>>> = {
    phone: Phone,
    whatsapp: IconBrandWhatsapp,
    email: Mail,
    facebook: IconBrandFacebook,
};
