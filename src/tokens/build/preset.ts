/**
 * Tailwind preset for Azion tokens.
 */

type TailwindConfig = {
  theme?: { extend?: { colors?: Record<string, unknown> } };
  darkMode?: unknown;
};

export const preset: Partial<TailwindConfig> = {
  theme: {
    extend: {
      colors: {
        base: 'var(--text-textColorBase)',
        muted: 'var(--text-textColorMuted)',
        link: 'var(--text-textColorLink)',
        code: 'var(--text-textColorCode)',
        mutedHover: 'var(--text-textColorMutedHover)',
        linkHover: 'var(--text-textColorLinkHover)',
        baseHover: 'var(--text-textColorBaseHover)',
        primary: 'var(--text-textColorPrimary)',
        primaryHover: 'var(--text-textColorPrimaryHover)',
        accent: 'var(--text-textColorSecondary)',
        accentHover: 'var(--text-textColorSecondaryHover)',
        text: {
          base: 'var(--text-textColorBase)',
          muted: 'var(--text-textColorMuted)',
          link: 'var(--text-textColorLink)',
          code: 'var(--text-textColorCode)',
          mutedHover: 'var(--text-textColorMutedHover)',
          linkHover: 'var(--text-textColorLinkHover)',
          baseHover: 'var(--text-textColorBaseHover)',
          primary: 'var(--text-textColorPrimary)',
          primaryHover: 'var(--text-textColorPrimaryHover)',
          accent: 'var(--text-textColorSecondary)',
          accentHover: 'var(--text-textColorSecondaryHover)',
        },
        background: {
          layer1: 'var(--background-bgLayer1)',
          layer2: 'var(--background-bgLayer2)',
          base: 'var(--background-bgBase)',
          canvas: 'var(--background-bgCanvas)',
          layer1Hover: 'var(--background-bgLayer1Hover)',
          layer2Hover: 'var(--background-bgLayer2Hover)',
        },
        border: {
          base: 'var(--border-borderBase)',
          baseHover: 'var(--border-borderBaseHover)',
          warning: 'var(--border-borderWarning)',
          success: 'var(--border-borderSuccess)',
          danger: 'var(--border-borderDanger)',
          primary: 'var(--border-borderPrimary)',
          accent: 'var(--border-boderAccent)',
          warningHover: 'var(--border-borderWarningHover)',
          successHover: 'var(--border-borderSuccessHover)',
          dangerHover: 'var(--border-borderDangerHover)',
          primaryHover: 'var(--border-borderPrimaryHover)',
          accentHover: 'var(--border-boderAccentHover)',
        },
      },
    },
  },
  darkMode: ['class', '.dark', '.azion.azion-dark'],
};
