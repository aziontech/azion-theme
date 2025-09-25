/**
 * TOKENS EXPORTS
 *
 * Re-exports for easy access to design tokens
 * This file is designed to work when imported by consumer projects
 */

// Use dynamic imports with proper path resolution
const loadTokens = async () => {
  try {
    // Get the current module's directory
    const currentUrl = import.meta.url;
    const currentPath = currentUrl.replace('file://', '');
    const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/'));

    // Load from the library's own directory
    const primitiveModule = await import(currentDir + '/src/tokens/colors-primitive.js');
    const brandModule = await import(currentDir + '/src/tokens/colors-brand.js');

    return {
      primitiveColors: primitiveModule.default?.primitive || primitiveModule.primitive,
      brandColors: brandModule.default?.brand || brandModule.brand,
    };
  } catch (e) {
    console.warn('Could not load tokens via dynamic import, trying alternative method');
    return { primitiveColors: {}, brandColors: {} };
  }
};

// For synchronous environments, provide fallback
let primitiveColors = {};
let brandColors = {};

loadTokens().then(tokens => {
  primitiveColors = tokens.primitiveColors;
  brandColors = tokens.brandColors;
});

// Re-export using ES module syntax
export { primitiveColors, brandColors };

// Default export with both tokens
export default {
  primitive: primitiveColors,
  brand: brandColors,
};
