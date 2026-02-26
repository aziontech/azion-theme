/**
 * Token reference helpers.
 */

export type TokenRef = { __ref: string };

export const tokenRef = (path: string): TokenRef => ({ __ref: path });

export const isTokenRef = (value: unknown): value is TokenRef =>
  typeof value === 'object' && value !== null && '__ref' in value;
