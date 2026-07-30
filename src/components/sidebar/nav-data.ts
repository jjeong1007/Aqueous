import type { LucideIcon } from "lucide-react";
import { Palette, SwatchBook } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

/** Design system docs sections */
export const navSections: NavSection[] = [
  {
    title: "Foundation",
    items: [
      {
        label: "Colors",
        href: "/foundation/colors",
        icon: Palette,
      },
    ],
  },
  {
    title: "Tokens",
    items: [
      {
        label: "Colors",
        href: "/tokens/colors",
        icon: SwatchBook,
      },
    ],
  },
  {
    title: "Components",
    items: [],
  },
];
