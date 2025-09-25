/**
 * PRIMITIVE COLORS TOKENS
 *
 * Primitive colors extracted from Figma.
 */

// Primitive colors from Figma
export const primitiveColors = {
  // Base colors
  base: {
    white: '#fafafa',
    black: '#0a0a0a',
  },

  // Orange palette (primary)
  orange: {
    50: '#fff5ef',
    100: '#ffe7d8',
    200: '#ffcfb3',
    300: '#ffb180',
    400: '#ff8e4d',
    500: '#fe601f',
    600: '#d94a03',
    700: '#b03c02',
    800: '#8a2f02',
    900: '#692402',
    950: '#401602',
  },

  // Violet palette
  violet: {
    50: '#f6f6ff',
    100: '#ececff',
    200: '#d9d7fa',
    300: '#b5b1f4',
    400: '#9f9af1',
    500: '#8a84ec',
    600: '#756fe5',
    700: '#625bd5',
    800: '#524bbb',
    900: '#423f99',
    950: '#343279',
  },

  // Slate palette
  slate: {
    50: '#f8f7fc',
    100: '#f0eff8',
    200: '#e3e1f0',
    300: '#d3d2e6',
    400: '#c4c5d6',
    500: '#a3a8c9',
    600: '#7f849c',
    700: '#5e6e8d',
    800: '#3d4f6c',
    900: '#353040',
    950: '#13131a',
  },

  // Gray palette
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },

  // Neutral palette
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },

  // Blue palette
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },

  // Red palette
  red: {
    50: '#ffe5e5',
    100: '#ffcccc',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },

  // Yellow palette
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006',
  },

  // Green palette
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    900: '#14532d',
    950: '#052e16',
  },
} as const;

// Default export for easy import
export default {
  primitive: primitiveColors,
};
