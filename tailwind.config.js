/**
 * CONFIGURATION OF TAILWIND CSS
 *
 * This configuration uses tokens to setting usefull tailwind classes.
 */

import primitiveColors from './src/tokens/colors-primitive.js';
import brandColors from './src/tokens/colors-brand.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        base: primitiveColors.base,

        // Primitive colors
        orange: primitiveColors.orange,
        violet: primitiveColors.violet,
        slate: primitiveColors.slate,
        gray: primitiveColors.gray,
        neutral: primitiveColors.neutral,
        blue: primitiveColors.blue,
        red: primitiveColors.red,
        yellow: primitiveColors.yellow,
        green: primitiveColors.green,

        // Brand Colors
        brand: brandColors.brand,

        // Alias for semantic colors
        primary: primitiveColors.orange[500],
        success: primitiveColors.green[500],
        warning: primitiveColors.yellow[500],
        error: primitiveColors.red[500],
        info: primitiveColors.blue[500],
      },
    },
  },
  plugins: [],
};
