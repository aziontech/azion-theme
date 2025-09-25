/**
 * BRAND COLORS TOKENS
 *
 * Organized brand colors consuming primitive colors.
 */

// Import primitive colors
import { primitiveColors } from './colors-primitive';

/** Brand colors organized by specification */
export const brandColors = {
  orange: primitiveColors.orange[500],
  darkOrange: primitiveColors.orange[600],
  lavander: primitiveColors.violet[500],
  darkLavander: primitiveColors.slate[900],
  blackLavander: primitiveColors.slate[950],
  gray: primitiveColors.neutral[200],
  darkGray: primitiveColors.neutral[700],
  blackGray: primitiveColors.neutral[900],
  white: primitiveColors.base.white,
  black: primitiveColors.base.black,
} as const;

// Default export for easy import
export default {
  brand: brandColors,
};
