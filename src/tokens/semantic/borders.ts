/**
 * SEMANTIC BORDER TOKENS
 *
 * Generated from figma-reference-tokens-studio.
 */

import { tokenRef } from '../build/refs';

export const borderSemantic = {
  light: {
    borderBase: tokenRef('brand.surfaces.surface-200'),
    borderBaseHover: tokenRef('primitives.base.black'),
    borderWarning: tokenRef('primitives.yellow.600'),
    borderSuccess: tokenRef('primitives.green.600'),
    borderDanger: tokenRef('primitives.red.600'),
    borderPrimary: tokenRef('brand.primary.primary-500'),
    boderSecondary: tokenRef('primitives.violet.500'),
    borderWarningHover: tokenRef('primitives.yellow.500'),
    borderSuccessHover: tokenRef('primitives.green.500'),
    borderDangerHover: tokenRef('primitives.red.500'),
    borderPrimaryHover: tokenRef('brand.primary.primary-600'),
    boderSecondaryHover: tokenRef('primitives.violet.600'),
    boderAccent: tokenRef('brand.accent.accent-500'),
    boderAccentHover: tokenRef('brand.accent.accent-600')
  },
  dark: {
    borderBase: tokenRef('brand.surfaces.surface-700'),
    borderBaseHover: tokenRef('primitives.base.white'),
    borderWarning: tokenRef('primitives.yellow.400'),
    borderSuccess: tokenRef('primitives.green.400'),
    borderDanger: tokenRef('primitives.red.400'),
    borderPrimary: tokenRef('brand.primary.primary-500'),
    boderSecondary: tokenRef('primitives.violet.500'),
    borderWarningHover: tokenRef('primitives.yellow.500'),
    borderSuccessHover: tokenRef('primitives.green.500'),
    borderDangerHover: tokenRef('primitives.red.500'),
    borderPrimaryHover: tokenRef('brand.primary.primary-400'),
    boderSecondaryHover: tokenRef('primitives.violet.400'),
    boderAccent: tokenRef('brand.accent.accent-500'),
    boderAccentHover: tokenRef('brand.accent.accent-400')
  },
} as const;

export type BorderSemantic = typeof borderSemantic;
