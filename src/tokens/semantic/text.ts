/**
 * SEMANTIC TEXT TOKENS
 *
 * Generated from figma-reference-tokens-studio.
 */

import { tokenRef } from '../build/refs';

export const textSemantic = {
  light: {
    textColorBase: tokenRef('primitives.neutral.900'),
    textColorMuted: tokenRef('primitives.neutral.600'),
    textColorLink: tokenRef('primitives.blue.600'),
    textColorCode: tokenRef('primitives.neutral.600'),
    textColorMutedHover: tokenRef('primitives.neutral.500'),
    textColorLinkHover: tokenRef('primitives.blue.700'),
    textColorBaseHover: tokenRef('primitives.neutral.800'),
    textColorPrimary: tokenRef('brand.primary.primary-500'),
    textColorPrimaryHover: tokenRef('brand.primary.primary-600'),
    textColorSecondary: tokenRef('primitives.violet.500'),
    textColorSecondaryHover: tokenRef('primitives.violet.600'),
    textColorAccent: tokenRef('brand.accent.accent-500'),
    textColorAccentHover: tokenRef('brand.accent.accent-600')
  },
  dark: {
    textColorBase: tokenRef('primitives.neutral.50'),
    textColorMuted: tokenRef('primitives.neutral.400'),
    textColorLink: tokenRef('primitives.blue.300'),
    textColorCode: tokenRef('primitives.neutral.400'),
    textColorMutedHover: tokenRef('primitives.neutral.500'),
    textColorLinkHover: tokenRef('primitives.blue.300'),
    textColorBaseHover: tokenRef('primitives.neutral.200'),
    textColorPrimary: tokenRef('brand.primary.primary-500'),
    textColorPrimaryHover: tokenRef('brand.primary.primary-400'),
    textColorSecondary: tokenRef('primitives.violet.500'),
    textColorSecondaryHover: tokenRef('primitives.violet.400'),
    textColorAccent: tokenRef('brand.accent.accent-500'),
    textColorAccentHover: tokenRef('brand.accent.accent-400')
  },
} as const;

export type TextSemantic = typeof textSemantic;
