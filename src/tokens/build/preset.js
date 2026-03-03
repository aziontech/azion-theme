/**
 * Tailwind preset for Azion tokens.
 */

export const preset = {
  theme: {
    extend: {
      colors: {
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
          accent: 'var(--text-textColorAccent)',
          accentHover: 'var(--text-textColorAccentHover)',
          secondary: 'var(--text-textColorSecondary)',
          secondaryHover: 'var(--text-textColorSecondaryHover)',
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
          secondary: 'var(--border-borderSecondary)',
          accent: 'var(--border-borderAccent)',
          warningHover: 'var(--border-borderWarningHover)',
          successHover: 'var(--border-borderSuccessHover)',
          dangerHover: 'var(--border-borderDangerHover)',
          primaryHover: 'var(--border-borderPrimaryHover)',
          secondaryHover: 'var(--border-borderSecondaryHover)',
          accentHover: 'var(--border-borderAccentHover)',
        },
      },
    },
  },
  darkMode: ['class', '.dark', '.azion.azion-dark'],
};

export default preset;
