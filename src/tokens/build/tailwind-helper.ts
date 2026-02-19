/**
 * Tailwind helper for merging presets.
 */

import { preset } from './preset';

type TailwindConfig = {
  presets?: unknown[];
  theme?: { extend?: { colors?: Record<string, unknown> } };
  darkMode?: unknown;
  [key: string]: unknown;
};

export const createTailwindConfig = (user: TailwindConfig): TailwindConfig => ({
  ...user,
  presets: [...(user.presets ?? []), preset],
});
