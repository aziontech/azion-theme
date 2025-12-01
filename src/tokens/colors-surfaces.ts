/**
 * SURFACE COLORS TOKENS
 *
 * Surface color tokens for both light and dark themes.
 * These tokens are used across the application to maintain consistency.
 */

// Helper function to create rgba colors from hex
const withAlpha = (hexColor: string, alpha: number) => {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  
  // 3 digits
  if (hexColor.length === 4) {
    r = parseInt(hexColor[1] + hexColor[1], 16);
    g = parseInt(hexColor[2] + hexColor[2], 16);
    b = parseInt(hexColor[3] + hexColor[3], 16);
  } 
  // 6 digits
  else if (hexColor.length === 7) {
    r = parseInt(hexColor.substring(1, 3), 16);
    g = parseInt(hexColor.substring(3, 5), 16);
    b = parseInt(hexColor.substring(5, 7), 16);
  }
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Base surface colors
export const surfaceColors = {
  // Light Theme
  light: {
    // Surface scale - these are the base values that others reference
    surface0: '#ffffff',
    surface50: '#f9fafb',
    surface100: '#f4f4f4',
    surface200: '#eeeeee',
    surface300: '#e8e8e8',
    surface400: '#e3e3e3',
    surface500: '#dddddd',
    surface600: '#d3d3d3',
    surface700: '#c9c9c9',
    surface800: '#b5b5b5',
    surface900: '#a7a7a7',

    // Semantic surfaces - all reference the scale values
    surfaceGround: 'var(--surface-50, #f9fafb)',
    surfaceSection: 'var(--surface-0, #ffffff)',
    surfaceCard: 'var(--surface-0, #ffffff)',
    surfaceOverlay: 'var(--surface-0, #ffffff)',
    surfaceBorder: 'var(--surface-100, #f4f4f4)',
    surfaceHover: withAlpha('var(--surface-900, #a7a7a7)', 0.04), // Using surface-900 with 4% opacity
    
    // Additional surface states
    surfaceCodeHighlight: 'var(--surface-50, #f9fafb)',
    surfaceDropdownHover: withAlpha('var(--surface-900, #a7a7a7)', 0.04),
    surfaceHighlightFocus: withAlpha('var(--surface-900, #a7a7a7)', 0.04),
    surfaceTabviewNavLink: withAlpha('var(--surface-900, #a7a7a7)', 0.04)
  },
  
  // Dark Theme
  dark: {
    // Surface scale - base values
    surface0: '#0a0a0a',
    surface50: '#111111',
    surface100: '#171717',
    surface200: '#222222',
    surface300: '#282828',
    surface400: '#2e2e2e',
    surface500: '#353535',
    surface600: '#3e3e3e',
    surface700: '#4a4a4a',
    surface800: '#5e5e5e',
    surface900: '#7d7d7d',

    // Semantic surfaces - all reference the scale values
    surfaceGround: 'var(--surface-0, #0a0a0a)',
    surfaceSection: 'var(--surface-100, #171717)',
    surfaceCard: 'var(--surface-200, #222222)',
    surfaceOverlay: 'var(--surface-0, #0a0a0a)',
    surfaceBorder: 'var(--surface-300, #282828)',
    surfaceHover: withAlpha('var(--surface-0, #f5f5f5)', 0.08), // Using surface-0 with 8% opacity
    
    // Additional surface states
    surfaceCodeHighlight: withAlpha('var(--surface-900, #7d7d7d)', 0.5),
    surfaceDropdownHover: withAlpha('var(--surface-0, #f5f5f5)', 0.08),
    surfaceHighlightFocus: withAlpha('var(--surface-0, #f5f5f5)', 0.08),
    surfaceTabviewNavLink: withAlpha('var(--surface-0, #f5f5f5)', 0.08)
  }
};

// Export type for better TypeScript support
export type SurfaceColors = typeof surfaceColors;