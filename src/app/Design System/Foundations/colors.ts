/**
 * DESIGN SYSTEM LAW — READ BEFORE TOUCHING THIS FILE
 *
 * The only colors that exist in this app are defined in figmaBrand, figmaNeutral,
 * figmaAccent*, figmaSemantic*, figmaText, and figmaBackground (including figmaAccentPink).
 *
 * You may NOT:
 *   - Add a hardcoded hex anywhere in src/
 *   - Use a Tailwind arbitrary color value like bg-[#fff]
 *   - Create a new named color without it first existing in Figma
 *   - Import color values from anywhere other than this file
 *
 * If a color you need is not here, the answer is NOT to add it here.
 * The answer is to raise it with the designer, get it added to Figma, and
 * then — and only then — add it to this file.
 *
 * Source: Figma — "Nyck Design System"
 * (https://www.figma.com/design/2EE2SiO1iiNP2OSaqK2Wra/Nyck-Design-System?node-id=337-612)
 */

/** Figma: Brand Colors */
export const figmaBrand = {
    'Brand 100': '#F7FAFF',
    /** Softer blue wash — large panels, secondary surfaces */
    'Brand 105': '#F3F7FF',
    /** Blue wash band — section headers, elevated strips */
    'Brand 125': '#E3EDFF',
    'Brand 200': '#E9F1FF',
    /** Light brand blue — soft glows, ambient shadows */
    'Brand 250': '#A9CCFF',
    /** Vivid indigo — gradient stops with Brand 500 */
    'Brand 450': '#3700FE',
    'Brand 500': '#0E6DF9',
    'Brand 600': '#0553C7',
    'Brand 700': '#3C4E6B',
    'Brand 800': '#18273F',
  } as const;
  
  /** Figma: Neutral Colors */
  export const figmaNeutral = {
    White: '#FFFFFF',
    'Neutral 100': '#F7F7F7',
    'Neutral 200': '#EDEDED',
    'Neutral 300': '#E1E1E1',
    'Neutral 400': '#9E9E9E',
    'Neutral 500': '#626262',
    'Neutral 700': '#37393D',
    Black: '#000000',
  } as const;
  
  /** Figma: Accent — Yellow */
  export const figmaAccentYellow = {
    'Yellow 100': '#FCF7EA',
    'Yellow 200': '#FAEEE4',
    'Yellow 500': '#E1B32B',
    'Yellow 600': '#F37E03',
    'Yellow 700': '#9A7A1D',
  } as const;
  
  /** Figma swatch names say "Red"; hues are purple/magenta in the doc. */
  export const figmaAccentRed = {
    'Red 100': '#F7EEFA',
    'Red 200': '#EEE8F9',
    'Red 500': '#B459D0',
    'Red 600': '#8853E2',
    'Red 700': '#7B2D91',
  } as const;
  
  export const figmaAccentGreen = {
    'Green 100': '#FCF7EA',
    'Green 500': '#E1B32B',
    'Green 700': '#9A7A1D',
  } as const;
  
  export const figmaAccentPurple = {
    'Purple 100': '#FCF7EA',
    'Purple 500': '#E1B32B',
    'Purple 700': '#9A7A1D',
  } as const;
  
  export const figmaAccentMagenta = {
    'Magenta 100': '#FCF7EA',
    'Magenta 500': '#E1B32B',
    'Magenta 700': '#9A7A1D',
  } as const;
  
  /** Figma: Accent — Pink (glows, gradients with brand blue) */
  export const figmaAccentPink = {
    'Pink 500': '#FF75C1',
  } as const;
  
  export const figmaAccentTeal = {
    'Teal 100': '#FCF7EA',
    'Teal 500': '#E1B32B',
    'Teal 700': '#9A7A1D',
  } as const;
  
  export const figmaSemanticSuccess = {
    'Success 100': '#E8F5E9',
    'Success 500': '#1B9B26',
    'Success 700': '#0C6813',
  } as const;
  
  export const figmaSemanticError = {
    'Error 100': '#FDE7E7',
    'Error 150': '#FFDBDB',
    'Error 500': '#DD0404',
    'Error 700': '#970000',
  } as const;
  
  export const figmaSemanticWarning = {
    'Warning 100': '#FFF3E0',
    'Warning 500': '#E68A00',
    'Warning 700': '#B36B00',
  } as const;
  
  export const figmaSemanticInfo = {
    'Info 100': '#E3F2FD',
    'Info 500': '#0E6DF9',
    'Info 700': '#0553C7',
  } as const;
  
  export const figmaText = {
    'text-primary': '#000000',
    'text-secondary': '#626262',
    'text-tertiary': '#9E9E9E',
    'text-link': '#0E6DF9',
    'text-success': '#1B9B26',
    'text-error': '#DD0404',
    'text-inverse': '#FFFFFF',
  } as const;
  
  export const figmaBackground = {
    'bg-primary': '#FFFFFF',
    'bg-secondary': '#F7F7F7',
    'bg-tertiary': '#EDEDED',
    'bg-hover': '#E9F1FF',
    'bg-inverse': '#18273F',
  } as const;
  
  /**
   * Figma: Toast / notification surfaces — "Toasts" (node 211:27)
   * https://www.figma.com/design/2EE2SiO1iiNP2OSaqK2Wra/Nyck-Design-System?node-id=211-27
   *
   * Values alias semantic + neutral tokens; no unique hex outside the design system.
   */
  export const figmaToast = {
    'toast-success-bg': figmaSemanticSuccess['Success 100'],
    'toast-success-icon': figmaSemanticSuccess['Success 500'],
    'toast-error-bg': figmaSemanticError['Error 100'],
    'toast-error-icon': figmaSemanticError['Error 500'],
    'toast-warning-bg': figmaSemanticWarning['Warning 100'],
    'toast-warning-icon': figmaSemanticWarning['Warning 500'],
    'toast-neutral-bg': figmaNeutral.White,
    'toast-neutral-border': figmaNeutral['Neutral 300'],
    'toast-text': figmaText['text-primary'],
  } as const;
  
  export const figma = {
    brand: figmaBrand,
    neutral: figmaNeutral,
    accent: {
      yellow: figmaAccentYellow,
      red: figmaAccentRed,
      green: figmaAccentGreen,
      purple: figmaAccentPurple,
      magenta: figmaAccentMagenta,
      pink: figmaAccentPink,
      teal: figmaAccentTeal,
    },
    semantic: {
      success: figmaSemanticSuccess,
      error: figmaSemanticError,
      warning: figmaSemanticWarning,
      info: figmaSemanticInfo,
    },
    text: figmaText,
    background: figmaBackground,
    toast: figmaToast,
  } as const;
  
  /** RGB for Accent Red 500 (#B459D0) — used with alpha in gradients. */
  const RED_500_RGB = '180, 89, 208';
  /** RGB for Brand 450 (#3700FE) — vivid indigo gradient stops. */
  const BRAND_450_RGB = '55, 0, 254';
  /** RGB for Brand 500 (#0E6DF9). */
  const BRAND_500_RGB = '14, 109, 249';
  /** RGB for Accent Pink 500 — must match figmaAccentPink['Pink 500']. */
  const ACCENT_PINK_500_RGB = '255, 117, 193';
  
  /**
   * Tailwind `nyck.*` utilities — every value references an approved figma* token
   * or an rgba() derived only from Brand 500 or Accent Red 500 RGB.
   */
  export const nyckTailwindColors = {
    light: figmaBrand['Brand 100'],
    dark: figmaNeutral['Neutral 700'],
    blue: figmaBrand['Brand 500'],
    'marketing-purple': figmaBrand['Brand 500'],
    black: figmaNeutral.Black,
    white: figmaNeutral.White,
    'layout-bg': figmaNeutral['Neutral 100'],
    'sidebar-active': figmaBrand['Brand 200'],
    'sidebar-profile-bg': figmaNeutral['Neutral 200'],
    amber: figmaSemanticWarning['Warning 500'],
    'amber-bg': figmaSemanticWarning['Warning 100'],
    coral: figmaSemanticError['Error 500'],
    'coral-bg': figmaSemanticError['Error 100'],
    purple: figmaAccentPurple['Purple 500'],
    'purple-bg': figmaAccentPurple['Purple 100'],
    green: figmaSemanticSuccess['Success 500'],
    'green-bg': figmaSemanticSuccess['Success 100'],
    rose: figmaSemanticError['Error 500'],
    'rose-bg': figmaSemanticError['Error 100'],
    'rose-label-bg': figmaSemanticError['Error 100'],
    'icon-blue': figmaBrand['Brand 500'],
    'icon-blue-bg': figmaBrand['Brand 200'],
    bg: figmaNeutral['Neutral 100'],
    text: figmaText['text-primary'],
    border: figmaNeutral['Neutral 300'],
    'card-border': figmaNeutral['Neutral 200'],
    'header-border': figmaNeutral['Neutral 200'],
    'button-gray': figmaNeutral['Neutral 200'],
    'button-blue': figmaBrand['Brand 500'],
    'text-secondary': figmaText['text-secondary'],
    'text-muted': figmaNeutral['Neutral 700'],
    'dark-navy': figmaBrand['Brand 800'],
    'slate-blue': figmaBrand['Brand 800'],
    'slate-gray': figmaNeutral['Neutral 500'],
    'gray-text': figmaNeutral['Neutral 500'],
    orange: figmaSemanticWarning['Warning 500'],
    'primary-blue': figmaBrand['Brand 500'],
    'light-blue-bg': figmaBrand['Brand 100'],
    divider: figmaNeutral['Neutral 300'],
    'input-border': figmaNeutral['Neutral 400'],
    'table-header-bg': figmaNeutral['Neutral 100'],
    'sticky-header-bg': figmaNeutral['Neutral 100'],
    'row-hover': figmaNeutral['Neutral 100'],
    'success-green': figmaSemanticSuccess['Success 500'],
    'text-subtle': figmaText['text-secondary'],
    'settings-border': figmaNeutral['Neutral 300'],
    'settings-error': figmaSemanticError['Error 500'],
    'settings-error-bg': figmaSemanticError['Error 100'],
    'settings-success-bg': figmaSemanticSuccess['Success 100'],
    'surface-tertiary': figmaBackground['bg-tertiary'],
    'success-pill-text': figmaSemanticSuccess['Success 700'],
    'overlay-scrim': `${figmaBrand['Brand 800']}CC`,
    'marketing-purple-30': `rgba(${BRAND_500_RGB}, 0.3)`,
    'marketing-purple-50': `rgba(${BRAND_500_RGB}, 0.5)`,
    'marketing-pink-30': `rgba(${RED_500_RGB}, 0.3)`,
    'marketing-pink-50': `rgba(${RED_500_RGB}, 0.5)`,
    'brand-blue-30': `rgba(${BRAND_500_RGB}, 0.3)`,
    'brand-blue-50': `rgba(${BRAND_500_RGB}, 0.5)`,
    'marketing-glow-blue': figmaBrand['Brand 200'],
    'marketing-pink-solid': figmaAccentRed['Red 500'],
    /** Former root `theme.extend.colors` — use `text-nyck-*` / `border-nyck-*` utilities */
    'text-main': figmaText['text-primary'],
    'border-light': figmaNeutral['Neutral 300'],
    'close-bg': figmaNeutral['Neutral 100'],
    'modal-close-bg': figmaNeutral['Neutral 100'],
    'text-secondary-fit': figmaText['text-secondary'],
    /** Semantic Success 500 (#1B9B26) — animation ring */
    'attention-pulse-ring': 'rgba(27, 155, 38, 0.7)',
    'attention-pulse-ring-transparent': 'rgba(27, 155, 38, 0)',
    /** Auth hero: Brand 500 + Accent Red 500 @ 0.698 + Brand 500 */
    'login-hero-gradient': `linear-gradient(135deg, ${figmaBrand['Brand 500']} 0%, rgba(${RED_500_RGB}, 0.698) 50%, ${figmaBrand['Brand 500']} 100%)`,
    /** Brand 800 @ 15% — shadow on calendar event chips */
    'brand-800-shadow-015': 'rgba(24, 39, 63, 0.15)',
    /** Accent Red 500 @ 75% — legacy glow (purple/magenta doc swatch) */
    'accent-red-glow-075': `rgba(${RED_500_RGB}, 0.75)`,
  
    /** Brand blue wash — large panels (figmaBrand Brand 105) */
    'brand-soft-surface': figmaBrand['Brand 105'],
    /** Brand blue wash — header / band surfaces (figmaBrand Brand 125) */
    'brand-soft-header': figmaBrand['Brand 125'],
  
    /** Accent Pink 500 @ 75% — soft magenta glow (e.g. split card shadow, top) */
    'shadow-accent-pink-075': `rgba(${ACCENT_PINK_500_RGB}, 0.75)`,
    /** Brand 250 — soft blue glow (e.g. split card shadow, bottom) */
    'shadow-brand-blue-soft': figmaBrand['Brand 250'],
    /** Brand 450 + Accent Pink @ 70% + Brand 500 — marketing / icon orbs */
    'gradient-brand-violet-magenta': `linear-gradient(141deg, ${figmaBrand['Brand 450']} -31.25%, rgba(${ACCENT_PINK_500_RGB}, 0.70) 42.16%, ${figmaBrand['Brand 500']} 99.46%)`,
    /**
     * Customize Output — AI draft instructions textarea frame (Developer Hand-Off).
     * Equivalent to #3700FE → #FF75C1 @ alpha 0xB2/255 → #0E6DF9.
     */
    'gradient-ai-instructions-border': `linear-gradient(90deg, ${figmaBrand['Brand 450']} 0%, rgba(${ACCENT_PINK_500_RGB}, ${178 / 255}) 50%, ${figmaBrand['Brand 500']} 100%)`,
    /**
     * Nyck-highlighted inventory / data table columns — Brand 450, Accent Pink 500,
     * Brand 500 @ 10% alpha (soft horizontal wash).
     */
    'gradient-nyck-table-highlight-soft-bg': `linear-gradient(90deg, rgba(${BRAND_450_RGB}, 0.1), rgba(${ACCENT_PINK_500_RGB}, 0.1), rgba(${BRAND_500_RGB}, 0.1))`,
    /**
     * Nyck-branded column header title (background-clip text) —
     * Brand 450 → Accent Pink 500 → Brand 500.
     */
    'gradient-nyck-table-header-text': `linear-gradient(170deg, ${figmaBrand['Brand 450']} 31%, rgba(${ACCENT_PINK_500_RGB}, 0.8) 42%, ${figmaBrand['Brand 500']} 100%)`,
  } as const;
  