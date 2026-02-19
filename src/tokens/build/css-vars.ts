/**
 * CSS variables initializer for tokens.
 */

import { primitives } from '../primitives/colors';
import { surfacePrimitives, brandPrimitives } from '../primitives/brand';
import { textSemantic } from '../semantic/text';
import { backgroundSemantic } from '../semantic/backgrounds';
import { borderSemantic } from '../semantic/borders';
import { resolveRefsToCssVars } from './resolve';

export const createCssVars = () =>
  resolveRefsToCssVars({
    primitives,
    surfacePrimitives,
    brandPrimitives,
    textSemantic,
    backgroundSemantic,
    borderSemantic,
  });

export const cssVarsString = () => {
  const { light, dark } = createCssVars();
  const format = (vars: Record<string, string>) =>
    Object.entries(vars)
      .map(([key, value]) => `  ${key}: ${value};`)
      .join('\n');

  return [
    `:root, [data-theme=light], .azion.azion-light {\n${format(light)}\n}`,
    `[data-theme=dark], .dark, .azion.azion-dark {\n${format(dark)}\n}`,
  ].join('\n\n');
};

export const injectCssVars = () => {
  const style = document.createElement('style');
  style.setAttribute('data-azion-tokens', 'true');
  style.textContent = cssVarsString();
  document.head.appendChild(style);
  return style;
};
