export type ChangeType = "added" | "changed" | "removed" | "fixed";

export type ChangeEntry = {
  type: ChangeType;
  title: string;
  description: string;
  timestamp: string;
};

export type VersionEntry = {
  version: string;
  date: string;
  changes: ChangeEntry[];
};

export const changelog: VersionEntry[] = [
  {
    version: "Unreleased",
    date: "2026-07-31",
    changes: [
      {
        type: "added",
        title: "Border semantic tokens",
        description:
          "18 tokens covering brand, focused, input, selected, danger, warning, success, info, disabled, and 9 accent categories.",
        timestamp: "2026-07-31",
      },
      {
        type: "added",
        title: "Border section on All Tokens page",
        description:
          "Renders border tokens with the same grouped format as background tokens, including descriptions and copy-to-clipboard.",
        timestamp: "2026-07-31",
      },
      {
        type: "added",
        title: "Table of contents filtering",
        description:
          "Clicking Background, Border, or All Tokens in the sidebar now filters the visible sections.",
        timestamp: "2026-07-31",
      },
      {
        type: "added",
        title: "Overview page",
        description:
          "Added /overview as the new landing page with design system title, placeholder description, version display, and full changelog.",
        timestamp: "2026-07-31",
      },
    ],
  },
  {
    version: "0.1.0",
    date: "2026-07-30",
    changes: [
      {
        type: "added",
        title: "Primitive color palettes",
        description:
          "Brand, Neutral, Green, Red, Orange, Yellow, Purple, Pink, Teal, Slate scales with full numeric ranges (50-950).",
        timestamp: "2026-07-30T15:39:00-05:00",
      },
      {
        type: "added",
        title: "Background semantic tokens",
        description:
          "40 tokens covering brand, neutral, selected, danger, warning, success, info, and 9 accent categories, each with default/hover/pressed/disabled states.",
        timestamp: "2026-07-30T15:39:00-05:00",
      },
      {
        type: "added",
        title: "Text semantic tokens",
        description:
          "Primary, secondary, tertiary, navigation, and brand text colors.",
        timestamp: "2026-07-30T15:39:00-05:00",
      },
      {
        type: "added",
        title: "Icon semantic tokens",
        description:
          "Primary, secondary, brand, and inverse icon colors.",
        timestamp: "2026-07-30T15:39:00-05:00",
      },
      {
        type: "added",
        title: "All Tokens page",
        description:
          "Searchable token reference at /tokens/colors with grouped rows, copyable token names, light value preview cards, and dark value placeholders.",
        timestamp: "2026-07-30T15:39:00-05:00",
      },
      {
        type: "added",
        title: "Primitive color foundation page",
        description:
          "Visual palette display at /foundation/colors.",
        timestamp: "2026-07-30T15:39:00-05:00",
      },
      {
        type: "added",
        title: "Sidebar navigation",
        description:
          "Global sidebar with icon-based nav, section grouping, and avatar.",
        timestamp: "2026-07-30T15:39:00-05:00",
      },
      {
        type: "added",
        title: "Slate primitive scale",
        description:
          "Added full slate-50 through slate-950 range.",
        timestamp: "2026-07-30T15:48:00-05:00",
      },
      {
        type: "added",
        title: "Typography foundation file",
        description:
          "Created typography.ts scaffold.",
        timestamp: "2026-07-30T19:49:00-05:00",
      },
      {
        type: "added",
        title: "Token page redesign",
        description:
          "Updated layout with table-of-contents sidebar, attribute group descriptions, and improved column grid.",
        timestamp: "2026-07-30T19:49:00-05:00",
      },
    ],
  },
];
