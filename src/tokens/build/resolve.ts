/**
 * Resolve token refs to CSS variable map.
 */

import { isTokenRef } from './refs';

type TokenInput = Record<string, unknown>;

const getValueByPath = (obj: TokenInput, path: string): unknown => {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
};

const flattenToCssVars = (obj: TokenInput, prefix: string[] = []): Record<string, string> => {
  const result: Record<string, string> = {};
  Object.entries(obj).forEach(([key, value]) => {
    const nextPath = [...prefix, key];
    if (value && typeof value === 'object' && !Array.isArray(value) && !isTokenRef(value)) {
      Object.assign(result, flattenToCssVars(value as TokenInput, nextPath));
      return;
    }
    if (isTokenRef(value)) {
      result[`--${nextPath.join('-')}`] = value.__ref;
      return;
    }
    if (typeof value === 'string' || typeof value === 'number') {
      result[`--${nextPath.join('-')}`] = String(value);
    }
  });
  return result;
};

export const resolveRefsToCssVars = (tokens: {
  primitives: TokenInput;
  surfacePrimitives: TokenInput;
  brandPrimitives: TokenInput;
  textSemantic: { light: TokenInput; dark: TokenInput };
  backgroundSemantic: { light: TokenInput; dark: TokenInput };
  borderSemantic: { light: TokenInput; dark: TokenInput };
}) => {
  const baseForResolve = {
    primitives: tokens.primitives,
    surfacePrimitives: tokens.surfacePrimitives,
    brandPrimitives: tokens.brandPrimitives,
  };
  const baseForVars = { primitives: tokens.primitives, surfacePrimitives: tokens.surfacePrimitives };
  const lightSemantic = {
    text: tokens.textSemantic.light,
    background: tokens.backgroundSemantic.light,
    border: tokens.borderSemantic.light,
  };
  const darkSemantic = {
    text: tokens.textSemantic.dark,
    background: tokens.backgroundSemantic.dark,
    border: tokens.borderSemantic.dark,
  };

  const resolveBrandRef = (ref: string): string | null => {
    if (ref.startsWith('brand.surfaces.surface-')) {
      const shade = ref.replace('brand.surfaces.surface-', '');
      const resolved = getValueByPath(baseForResolve, `surfacePrimitives.surface.${shade}`);
      return typeof resolved === 'string' || typeof resolved === 'number' ? String(resolved) : null;
    }
    if (ref.startsWith('brand.primary.primary-')) {
      const shade = ref.replace('brand.primary.primary-', '');
      const resolved = getValueByPath(baseForResolve, `brandPrimitives.primary.${shade}`);
      return typeof resolved === 'string' || typeof resolved === 'number' ? String(resolved) : null;
    }
    if (ref.startsWith('brand.accent.accent-')) {
      const shade = ref.replace('brand.accent.accent-', '');
      const resolved = getValueByPath(baseForResolve, `brandPrimitives.accent.${shade}`);
      return typeof resolved === 'string' || typeof resolved === 'number' ? String(resolved) : null;
    }
    if (ref.startsWith('brand.absolute.')) {
      const name = ref.replace('brand.absolute.', '');
      const resolved = getValueByPath(baseForResolve, `brandPrimitives.absolute.${name}`);
      return typeof resolved === 'string' || typeof resolved === 'number' ? String(resolved) : null;
    }
    return null;
  };

  const resolveSemantic = (semantic: TokenInput) => {
    const flattened = flattenToCssVars(semantic);
    return Object.fromEntries(
      Object.entries(flattened).map(([key, value]) => {
        if (value.startsWith('brand.')) {
          return [key, resolveBrandRef(value) ?? value];
        }
        if (value.startsWith('primitives.') || value.startsWith('surfacePrimitives.')) {
          const resolved = getValueByPath(baseForResolve, value);
          return [key, typeof resolved === 'string' || typeof resolved === 'number' ? String(resolved) : value];
        }
        return [key, value];
      })
    );
  };

  return {
    light: {
      ...flattenToCssVars(baseForVars),
      ...resolveSemantic(lightSemantic),
    },
    dark: {
      ...flattenToCssVars(baseForVars),
      ...resolveSemantic(darkSemantic),
    },
  } as const;
};
