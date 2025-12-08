// Importação de tokens fixos (não variam com o tema)
import { primitiveColors } from './colors-primitive';
import { brandColors } from './colors-brand';
import { surfaceColors } from './colors-surfaces';
import textColors from './colors-text';

// Tipos para o plugin do Tailwind
type TailwindThemeFunction = {
  (path: string): any;
  <TDefaultValue>(path: string, defaultValue: TDefaultValue): TDefaultValue;
};

// Tipos para o plugin do Tailwind
type TailwindPluginUtils = {
  addUtilities: (utilities: Record<string, any>, variants?: string[]) => void;
  addVariant: (name: string, callback: (helpers: {
    modifySelectors: (modifier: (options: { className: string }) => string) => void;
    separator: string;
  }) => void) => void;
  e: (className: string) => string;
  theme: TailwindThemeFunction;
  variants: (plugin: string, variants: string[]) => void;
  config: <T = any>(path?: string, defaultValue?: T) => T;
};

type ThemeMode = 'light' | 'dark';

/**
 * Combina os tokens de todos os arquivos específicos
 * para criar o tema completo
 */
const theme = {
  light: {
    colors: {
      // Tokens fixos
      ...primitiveColors,
      ...brandColors,
      
      // Tokens que variam com o tema
      ...surfaceColors.light,
      
      // Cores de texto
      ...textColors.light
    },
  },
  dark: {
    colors: {
      // Tokens fixos (mesmos do light)
      ...primitiveColors,
      ...brandColors,
      
      // Tokens que variam com o tema
      ...surfaceColors.dark,
      
      // Cores de texto
      ...textColors.dark
    },
  },
} as const;

// Tipos para TypeScript
type Theme = typeof theme;
type ThemeColors = Theme['light']['colors'] | Theme['dark']['colors'];

/**
 * Obtém as cores do tema atual
 */
function getThemeColors(mode: ThemeMode = 'light'): ThemeColors {
  return mode === 'dark' ? theme.dark.colors : theme.light.colors;
}

/**
 * Configuração para o Tailwind CSS
 * Este objeto pode ser usado diretamente no arquivo tailwind.config.js
 */
export const tailwindTheme = {
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        // Inclui todas as cores, mas as de texto só funcionarão com text-*
        ...theme.light.colors,
      },
    },
  },
  plugins: [
    // Plugin para garantir que as cores de texto só funcionem com text-*
    function({ addVariant, e }: TailwindPluginUtils) {
      // Adiciona variantes para hover, focus, etc. apenas para cores de texto
      const variants = ['hover', 'focus', 'disabled', 'group-hover', 'dark'];
      
      variants.forEach((variant) => {
        addVariant(`${variant}:text-`, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${e(`${variant}${separator}text-${className}`)}`;
          });
        });
      });
    },
  ],
};

// Exporta o tema completo por padrão
export default theme;
