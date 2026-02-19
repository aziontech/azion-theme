/**
 * SEMANTIC BACKGROUND TOKENS
 *
 * Generated from figma-reference-tokens-studio.
 */

import { tokenRef } from '../build/refs';

export const backgroundSemantic = {
  light: {
    bgLayer1: tokenRef('brand.surfaces.surface-0'),
    bgLayer2: tokenRef('brand.surfaces.surface-50'),
    bgBase: tokenRef('brand.surfaces.surface-0'),
    bgCanvas: tokenRef('brand.surfaces.surface-100'),
    bgLayer1Hover: tokenRef('brand.surfaces.surface-50'),
    bgLayer2Hover: tokenRef('brand.surfaces.surface-100')
  },
  dark: {
    bgLayer1: tokenRef('brand.surfaces.surface-800'),
    bgLayer2: tokenRef('brand.surfaces.surface-700'),
    bgBase: tokenRef('brand.surfaces.surface-900'),
    bgCanvas: tokenRef('brand.surfaces.surface-950'),
    bgLayer1Hover: tokenRef('brand.surfaces.surface-700'),
    bgLayer2Hover: tokenRef('brand.surfaces.surface-600')
  },
} as const;

export type BackgroundSemantic = typeof backgroundSemantic;
