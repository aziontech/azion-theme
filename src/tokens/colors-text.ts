/**
 * TEXT COLORS TOKENS
 * 
 * Cores de texto para temas claro e escuro.
 * Referenciam as cores primitivas de colors-primitive.ts
 */

import { primitiveColors } from './colors-primitive';

const { orange, blue, neutral, violet } = primitiveColors;

type TextColorTheme = {
  light: Record<string, string>;
  dark: Record<string, string>;
};

/**
 * Tokens de cor de texto para temas claro e escuro
 */
export const textColors: TextColorTheme = {
  light: {
    // Cores base
    'text-color-base': neutral[900],
    'text-color-muted': neutral[600],
    'text-color-code': neutral[600],
    
    // Cores temáticas
    'text-color-primary': orange[500],
    'text-color-secondary': violet[500],
    'text-color-link': blue[600],
    
    // Estados hover
    'text-color-base-hover': neutral[800],
    'text-color-muted-hover': neutral[500],
    'text-color-primary-hover': orange[600],
    'text-color-secondary-hover': violet[600],
    'text-color-link-hover': blue[700],
    
    // Compatibilidade (antigos nomes)
    'text-base': neutral[900],
    'text-muted': neutral[600],
    'text-primary': orange[500],
    'text-link': blue[600],
  },
  dark: {
    // Cores base
    'text-color-base': neutral[50],
    'text-color-muted': neutral[400],
    'text-color-code': neutral[400],
    
    // Cores temáticas
    'text-color-primary': orange[500],
    'text-color-secondary': violet[400],
    'text-color-link': blue[400],
    
    // Estados hover
    'text-color-base-hover': neutral[200],
    'text-color-muted-hover': neutral[500],
    'text-color-primary-hover': orange[400],
    'text-color-secondary-hover': violet[400],
    'text-color-link-hover': blue[300],
    
    // Compatibilidade (antigos nomes)
    'text-base': neutral[50],
    'text-muted': neutral[400],
    'text-primary': orange[500],
    'text-link': blue[400],
  },
};

// Exporta como padrão para compatibilidade
export default textColors;