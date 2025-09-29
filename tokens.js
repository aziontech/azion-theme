/**
 * TOKENS EXPORTS
 *
 * Re-exports for easy access to design tokens
 * This file is designed to work when imported by consumer projects
 */

// For Node.js environments, use require with proper path resolution
const path = require('path');
const fs = require('fs');

// Get the current file's directory
const __filename = require.main?.filename || process.argv[1] || '';
const __dirname = path.dirname(__filename);

// Find the library root by looking for package.json
let libraryRoot = __dirname;
while (!fs.existsSync(path.join(libraryRoot, 'package.json'))) {
  const parentDir = path.dirname(libraryRoot);
  if (parentDir === libraryRoot) break;
  libraryRoot = parentDir;
}

// Load the token files from the library
const primitivePath = path.join(libraryRoot, 'src/tokens/colors-primitive.js');
const brandPath = path.join(libraryRoot, 'src/tokens/colors-brand.js');

let primitiveColors = {};
let brandColors = {};

try {
  if (fs.existsSync(primitivePath)) {
    const primitiveModule = require(primitivePath);
    primitiveColors = primitiveModule.primitive || primitiveModule.default?.primitive || primitiveModule;
  }

  if (fs.existsSync(brandPath)) {
    const brandModule = require(brandPath);
    brandColors = brandModule.brand || brandModule.default?.brand || brandModule;
  }
} catch (e) {
  console.warn('Could not load tokens from library path, using fallbacks');
}

// Re-export as CommonJS
module.exports = {
  primitiveColors,
  brandColors,
};

// Also export individual modules
module.exports.primitiveColors = primitiveColors;
module.exports.brandColors = brandColors;
