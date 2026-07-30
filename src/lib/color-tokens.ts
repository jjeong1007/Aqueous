import {
  Background,
  Brand,
  Green,
  Neutral,
  Orange,
  Pink,
  Purple,
  Red,
  Slate,
  Teal,
  Yellow,
} from "@/Design System/Foundations/colors";

export type ColorTokenEntry = {
  name: string;
  hex: string;
  primitive: string;
  /** Color/attribute segment, e.g. brand, danger, accentgray */
  attribute: string;
};

const primitives: Record<string, string> = {
  ...Brand,
  ...Neutral,
  ...Green,
  ...Red,
  ...Orange,
  ...Yellow,
  ...Purple,
  ...Pink,
  ...Teal,
  ...Slate,
};

const STATE_SUFFIXES = ["-hover", "-pressed", "-disabled"] as const;

function findPrimitive(hex: string): string {
  const normalized = hex.toUpperCase();
  const match = Object.entries(primitives).find(
    ([, value]) => value.toUpperCase() === normalized,
  );
  return match?.[0] ?? "—";
}

/** Extracts attribute from color-background-{attribute}[-state] */
export function getBackgroundAttribute(tokenName: string): string {
  const withoutPrefix = tokenName.replace(/^color-background-/, "");
  for (const suffix of STATE_SUFFIXES) {
    if (withoutPrefix.endsWith(suffix)) {
      return withoutPrefix.slice(0, -suffix.length);
    }
  }
  return withoutPrefix;
}

export const backgroundColorTokens: ColorTokenEntry[] = Object.entries(
  Background,
).map(([name, hex]) => ({
  name,
  hex,
  primitive: findPrimitive(hex),
  attribute: getBackgroundAttribute(name),
}));

export type ColorTokenGroup = {
  attribute: string;
  tokens: ColorTokenEntry[];
  description: string;
};

/** Brief usage notes shown under each attribute group on the tokens page. */
export const backgroundAttributeDescriptions: Record<string, string> = {
  brand:
    "Use for brand-tinted surfaces and primary product backgrounds tied to Nyck identity.",
  neutral:
    "Default platform surfaces — page backgrounds, panels, and neutral containers used across the product.",
  selected:
    "Use when a surface is actively selected or highlighted in a list, table, or nav.",
  danger:
    "Use for destructive or error-related backgrounds such as danger modals and critical alerts.",
  warning:
    "Use for cautionary backgrounds such as warning banners and attention states.",
  success:
    "Use for positive confirmation backgrounds such as success toasts and completed states.",
  info: "Use for informational backgrounds that call attention without implying success or danger.",
  accentgray:
    "Use for backgrounds when there is no meaning tied to the color — a hint of gray for tags and chips.",
  accentgreen:
    "Use for backgrounds when there is no meaning tied to the color — a hint of green for tags and chips.",
  accentred:
    "Use for backgrounds when there is no meaning tied to the color — a hint of red for tags and chips.",
  accentorange:
    "Use for backgrounds when there is no meaning tied to the color — a hint of orange for tags and chips.",
  accentyellow:
    "Use for backgrounds when there is no meaning tied to the color — a hint of yellow for tags and chips.",
  accentpurple:
    "Use for backgrounds when there is no meaning tied to the color — a hint of purple for tags and chips.",
  accentpink:
    "Use for backgrounds when there is no meaning tied to the color — a hint of pink for tags and chips.",
  accentteal:
    "Use for backgrounds when there is no meaning tied to the color — a hint of teal for tags and chips.",
  accentslate:
    "Use for backgrounds when there is no meaning tied to the color — a hint of slate for tags and chips.",
};

export function groupTokensByAttribute(
  tokens: ColorTokenEntry[],
): ColorTokenGroup[] {
  const groups: ColorTokenGroup[] = [];

  for (const token of tokens) {
    const last = groups[groups.length - 1];
    if (last && last.attribute === token.attribute) {
      last.tokens.push(token);
    } else {
      groups.push({
        attribute: token.attribute,
        tokens: [token],
        description:
          backgroundAttributeDescriptions[token.attribute] ??
          `Background tokens for the ${token.attribute} attribute.`,
      });
    }
  }

  return groups;
}
