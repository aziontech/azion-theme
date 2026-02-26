/**
 * Tailwind plugin to generate static light/dark utilities from semantic tokens.
 *
 * This avoids CSS variables by emitting concrete values for both themes.
 */

import { primitives } from '../primitives/colors';
import { surfacePrimitives, brandPrimitives } from '../primitives/brand';
import { textSemantic } from '../semantic/text';
import { backgroundSemantic } from '../semantic/backgrounds';
import { borderSemantic } from '../semantic/borders';
import { resolveRefsToCssVars } from './resolve';

type TokenUtilitiesOptions = {
  darkSelector?: string;
  extraDarkSelectors?: string[];
};

type Utilities = Record<string, Record<string, string>>;

type TailwindPluginApi = {
  addUtilities: (utilities: Utilities) => void;
};

type TailwindPlugin = (api: TailwindPluginApi) => void;

type TailwindPluginFactory = (handler: TailwindPlugin) => TailwindPlugin;

const createPlugin: TailwindPluginFactory = (handler) => handler;

const kebab = (value: string) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();

const stripPrefix = (value: string, prefix: string) =>
  value.startsWith(prefix) ? value.slice(prefix.length) : value;

const resolveTokenMaps = () =>
  resolveRefsToCssVars({
    primitives,
    surfacePrimitives,
    brandPrimitives,
    textSemantic,
    backgroundSemantic,
    borderSemantic,
  });

const getValue = (map: Record<string, string>, key: string) => map[`--${key}`];

const addUtility = (
  utilities: Utilities,
  darkUtilities: Utilities,
  selectors: string[],
  className: string,
  property: string,
  lightValue?: string,
  darkValue?: string
) => {
  if (lightValue) {
    utilities[className] = { [property]: lightValue };
  }
  if (darkValue) {
    selectors.forEach((selector) => {
      darkUtilities[`${selector} ${className}`] = { [property]: darkValue };
    });
  }
};

export const tokenUtilities = (options: TokenUtilitiesOptions = {}) => {
  const { light, dark } = resolveTokenMaps();
  const darkSelectors = [options.darkSelector ?? '.dark', ...(options.extraDarkSelectors ?? ['.azion.azion-dark'])];

  const utilities: Utilities = {};
  const darkUtilities: Utilities = {};

  Object.keys(backgroundSemantic.light).forEach((key) => {
    const suffix = kebab(stripPrefix(key, 'bg'));
    const className = `.bg-${suffix}`;
    addUtility(
      utilities,
      darkUtilities,
      darkSelectors,
      className,
      'backgroundColor',
      getValue(light, `background-${key}`),
      getValue(dark, `background-${key}`)
    );
  });

  const hasAccent = 'textColorAccent' in textSemantic.light;
  const accentKey = hasAccent ? 'textColorAccent' : 'textColorSecondary';
  const accentHoverKey = hasAccent ? 'textColorAccentHover' : 'textColorSecondaryHover';

  const textMap: Record<string, string> = {
    base: 'textColorBase',
    muted: 'textColorMuted',
    link: 'textColorLink',
    code: 'textColorCode',
    'muted-hover': 'textColorMutedHover',
    'link-hover': 'textColorLinkHover',
    'base-hover': 'textColorBaseHover',
    primary: 'textColorPrimary',
    'primary-hover': 'textColorPrimaryHover',
    accent: accentKey,
    'accent-hover': accentHoverKey,
  };

  Object.entries(textMap).forEach(([name, key]) => {
    const className = `.text-${name}`;
    addUtility(
      utilities,
      darkUtilities,
      darkSelectors,
      className,
      'color',
      getValue(light, `text-${key}`),
      getValue(dark, `text-${key}`)
    );
  });

  const borderMap: Record<string, string> = {
    base: 'borderBase',
    'base-hover': 'borderBaseHover',
    warning: 'borderWarning',
    success: 'borderSuccess',
    danger: 'borderDanger',
    primary: 'borderPrimary',
    'primary-hover': 'borderPrimaryHover',
    accent: 'boderAccent',
    'accent-hover': 'boderAccentHover',
    'warning-hover': 'borderWarningHover',
    'success-hover': 'borderSuccessHover',
    'danger-hover': 'borderDangerHover',
  };

  Object.entries(borderMap).forEach(([name, key]) => {
    const className = `.border-${name}`;
    addUtility(
      utilities,
      darkUtilities,
      darkSelectors,
      className,
      'borderColor',
      getValue(light, `border-${key}`),
      getValue(dark, `border-${key}`)
    );
  });

  return createPlugin(({ addUtilities }: TailwindPluginApi) => {
    addUtilities(utilities);
    addUtilities(darkUtilities);
  });
};

export default tokenUtilities;
