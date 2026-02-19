/**
 * TOKENS EXPORTS
 *
 * Re-exports for easy access to design tokens
 * This file is designed to work when imported by consumer projects
 */

const path = require('path');
const fs = require('fs');

const __filename = require.main?.filename || process.argv[1] || '';
const __dirname = path.dirname(__filename);

let libraryRoot = __dirname;
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

const colors = {
  ...primitiveColors,
  brand: brandColors,
  brandPrimitives,
  surfaces: surfacePrimitives,
  semantic: {
    text: textSemantic,
    background: backgroundSemantic,
    border: borderSemantic,
  },
  background: backgroundSemantic,
  border: borderSemantic,
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
