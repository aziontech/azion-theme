/**
 * BRAND + SURFACE PRIMITIVES TOKENS
 *
 * Generated from figma-reference-tokens-studio.
 */

import { brandColors } from '../colors-brand';

export const surfacePrimitives = {
  surface: {
    '0': '#ffffff',
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#e5e5e5',
    '300': '#d4d4d4',
    '400': '#a3a3a3',
    '500': '#737373',
    '600': '#525252',
    '700': '#404040',
    '800': '#262626',
    '900': '#171717',
    '950': '#0a0a0a'
  }
} as const;

export const brandPrimitives = {
  accent: {
    '50': '#f6f6ff',
    '100': '#ececff',
    '200': '#d9d7fa',
    '300': '#b5b1f4',
    '400': '#9f9af1',
    '500': '#8a84ec',
    '600': '#756fe5',
    '700': '#625bd5',
    '800': '#524bbb',
    '900': '#423f99',
    '950': '#343279'
  },
  primary: {
    '50': '#fff5ef',
    '100': '#ffe7d8',
    '200': '#ffcfb3',
    '300': '#ffb180',
    '400': '#ff8e4d',
    '500': '#fe601f',
    '600': '#d94a03',
    '700': '#b03c02',
    '800': '#8a2f02',
    '900': '#692402',
    '950': '#401602'
  },
  absolute: {
    white: '#fafafa',
    black: '#0a0a0a'
  }
} as const;

export type SurfacePrimitives = typeof surfacePrimitives;
export type BrandPrimitives = typeof brandPrimitives;

export { brandColors };

export default {
  brandColors,
  brandPrimitives,
  surfacePrimitives,
};
