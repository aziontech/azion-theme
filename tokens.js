/**
 * TOKENS EXPORTS
 *
 * Re-exports for easy access to design tokens
 * This file is designed to work when imported by consumer projects
 */

const path = require('path');
const fs = require('fs');

const fileName = typeof __filename !== 'undefined' ? __filename : require.main?.filename || process.argv[1] || '';
const dirName = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileName);

let libraryRoot = dirName;
while (!fs.existsSync(path.join(libraryRoot, 'package.json'))) {
  const parentDir = path.dirname(libraryRoot);
  if (parentDir === libraryRoot) break;
  libraryRoot = parentDir;
}

const primitivePath = path.join(libraryRoot, 'src/tokens/primitives/colors.js');
const brandPrimitivePath = path.join(libraryRoot, 'src/tokens/primitives/brand.js');
const brandPath = path.join(libraryRoot, 'src/tokens/colors-brand.js');
const textSemanticPath = path.join(libraryRoot, 'src/tokens/semantic/text.js');
const backgroundSemanticPath = path.join(libraryRoot, 'src/tokens/semantic/backgrounds.js');
const borderSemanticPath = path.join(libraryRoot, 'src/tokens/semantic/borders.js');

let primitiveColors = {};
let brandColors = {};
let brandPrimitives = {};
let surfacePrimitives = {};
let textSemantic = {};
let backgroundSemantic = {};
let borderSemantic = {};

try {
  if (fs.existsSync(primitivePath)) {
    const primitiveModule = require(primitivePath);
    primitiveColors = primitiveModule.primitives || primitiveModule.default?.primitives || primitiveModule;
  }

  if (fs.existsSync(brandPrimitivePath)) {
    const brandPrimitiveModule = require(brandPrimitivePath);
    brandPrimitives =
      brandPrimitiveModule.brandPrimitives ||
      brandPrimitiveModule.default?.brandPrimitives ||
      brandPrimitiveModule;
    surfacePrimitives =
      brandPrimitiveModule.surfacePrimitives ||
      brandPrimitiveModule.default?.surfacePrimitives ||
      surfacePrimitives;
    brandColors = brandPrimitiveModule.brandColors || brandPrimitiveModule.default?.brandColors || brandColors;
  }

  if (fs.existsSync(brandPath)) {
    const brandModule = require(brandPath);
    brandColors = brandModule.brand || brandModule.default?.brand || brandModule;
  }

  if (fs.existsSync(textSemanticPath)) {
    const textModule = require(textSemanticPath);
    textSemantic = textModule.textSemantic || textModule.default?.textSemantic || textModule;
  }

  if (fs.existsSync(backgroundSemanticPath)) {
    const backgroundSemanticModule = require(backgroundSemanticPath);
    backgroundSemantic =
      backgroundSemanticModule.backgroundSemantic ||
      backgroundSemanticModule.default?.backgroundSemantic ||
      backgroundSemanticModule;
  }

  if (fs.existsSync(borderSemanticPath)) {
    const borderSemanticModule = require(borderSemanticPath);
    borderSemantic = borderSemanticModule.borderSemantic || borderSemanticModule.default?.borderSemantic || borderSemanticModule;
  }
} catch (e) {
  console.warn('Could not load tokens from library path, using fallbacks');
}

const primitivePalette =
  primitiveColors && typeof primitiveColors === 'object' ? { ...primitiveColors } : {};
if (primitivePalette.base) {
  delete primitivePalette.base;
}

const absolutePalette =
  brandPrimitives?.absolute && typeof brandPrimitives.absolute === 'object'
    ? {
        white: brandPrimitives.absolute.white,
        black: brandPrimitives.absolute.black,
      }
    : {};

const semanticColorVars = {
  text: {
    base: 'var(--text-textColorBase)',
    muted: 'var(--text-textColorMuted)',
    link: 'var(--text-textColorLink)',
    code: 'var(--text-textColorCode)',
    mutedHover: 'var(--text-textColorMutedHover)',
    linkHover: 'var(--text-textColorLinkHover)',
    baseHover: 'var(--text-textColorBaseHover)',
    primary: 'var(--text-textColorPrimary)',
    primaryHover: 'var(--text-textColorPrimaryHover)',
    accent: 'var(--text-textColorSecondary)',
    accentHover: 'var(--text-textColorSecondaryHover)',
  },
  background: {
    layer1: 'var(--background-bgLayer1)',
    layer2: 'var(--background-bgLayer2)',
    base: 'var(--background-bgBase)',
    canvas: 'var(--background-bgCanvas)',
    layer1Hover: 'var(--background-bgLayer1Hover)',
    layer2Hover: 'var(--background-bgLayer2Hover)',
  },
  border: {
    base: 'var(--border-borderBase)',
    baseHover: 'var(--border-borderBaseHover)',
    warning: 'var(--border-borderWarning)',
    success: 'var(--border-borderSuccess)',
    danger: 'var(--border-borderDanger)',
    primary: 'var(--border-borderPrimary)',
    accent: 'var(--border-boderAccent)',
    warningHover: 'var(--border-borderWarningHover)',
    successHover: 'var(--border-borderSuccessHover)',
    dangerHover: 'var(--border-borderDangerHover)',
    primaryHover: 'var(--border-borderPrimaryHover)',
    accentHover: 'var(--border-boderAccentHover)',
  },
};

const tailwindAliases = {
  canvas: semanticColorVars.background.canvas,
  layer1: semanticColorVars.background.layer1,
  layer2: semanticColorVars.background.layer2,
  layer1Hover: semanticColorVars.background.layer1Hover,
  layer2Hover: semanticColorVars.background.layer2Hover,
  base: semanticColorVars.border.base,
  baseHover: semanticColorVars.border.baseHover,
  warning: semanticColorVars.border.warning,
  success: semanticColorVars.border.success,
  danger: semanticColorVars.border.danger,
  primary: semanticColorVars.border.primary,
  accent: semanticColorVars.border.accent,
  warningHover: semanticColorVars.border.warningHover,
  successHover: semanticColorVars.border.successHover,
  dangerHover: semanticColorVars.border.dangerHover,
  primaryHover: semanticColorVars.border.primaryHover,
  accentHover: semanticColorVars.border.accentHover,
};

const colors = {
  ...primitivePalette,
  ...absolutePalette,
  ...tailwindAliases,
  brand: brandColors,
  brandPrimitives,
  surfaces: surfacePrimitives,
  ...semanticColorVars,
  semantic: semanticColorVars,
};

module.exports = {
  colors,
  primitiveColors,
  brandColors,
  brandPrimitives,
  surfacePrimitives,
  textSemantic,
  backgroundSemantic,
  borderSemantic,
};

module.exports.colors = colors;
module.exports.primitiveColors = primitiveColors;
module.exports.brandColors = brandColors;
module.exports.brandPrimitives = brandPrimitives;
module.exports.surfacePrimitives = surfacePrimitives;
module.exports.textSemantic = textSemantic;
module.exports.backgroundSemantic = backgroundSemantic;
module.exports.borderSemantic = borderSemantic;
