
<h1 align="center">azion-theme</h1>

![production](https://github.com/aziontech/azion-theme/actions/workflows/release.yml/badge.svg)

<p align="center">
    <img
        src="./doc/cover-image.png"
        width="1200px"
    />
</p>

The Azion Theme repository is focused on sharing our style kit across interfaces and should be used in all company projects, including Azion Console Kit, Azion Site, Landing Pages, and all user interactions with Azion.

## 📋 Table of Contents

- [Installation](#-installation)
- [Usage](#-usage)
- [Development](#-development)
- [Design Tokens](#-design-tokens)
- [Links](#-links)

## 🚀 Installation

To install the `azion-theme` project, you need to follow the command. Choose one of your preferences: npm or yarn:

```bash
npm install azion-theme --save
# or
yarn add azion-theme
```

Alternatively, you can configure the `package.json` file by adding the dependency:

```json
{
  "dependencies": {
    "azion-theme": "^1.4.0"
  }
}
```

After updating the `package.json` file, run `npm install` in the root of your project to install the Azion Theme.

### 🔗 Integration with Front-End Project

To integrate the Azion Theme into your front-end project, you need to import the theme files in your project's entry point file (App.vue, main.js, index.js, etc.):

```javascript
import 'azion-theme/dark';
import 'azion-theme/light';
```

Make sure to include these imports at the top of your entry point file to ensure the styles are applied correctly throughout your application.

## 💻 Development

To work locally, you should clone both the `azion-theme` repository and the other repository where the theme will be used.

### Example:

In this example, we will use the [azion-webkit](https://github.com/aziontech/azion-webkit) repository:

1. Clone the `azion-webkit` and `azion-theme` repositories:
  
  ```bash
  git clone https://github.com/aziontech/azion-webkit.git
  git clone https://github.com/aziontech/azion-theme.git
  ```

2. Install dependencies and create the link point:
  
  ```bash
  cd ./azion-theme && npm i && npm link
  ```

3. Link the `azion-theme` to the `azion-webkit` project:
  
  ```bash
  cd ../azion-webkit && npm i && npm link azion-theme
  ```

Any modifications made to `azion-theme` will be reflected on this development server with hot reload.

## 🎨 Design Tokens

This project now includes **primitive color tokens** extracted directly from Figma, ready to be consumed via Tailwind CSS.

### 📁 Token Files

### 🚀 How to Use the Tokens

#### Option 1: Simple Import (Recommended)
```javascript
const { colors } = require('azion-theme/tokens');

// Or import individually
const primitives = require('azion-theme/tokens/primitive');
const brandColors = require('azion-theme/tokens/brand');
```

#### Option 2: ES Module Import
```javascript
import tokens from 'azion-theme/tokens';
const { colors } = tokens;
```

#### Option 3: Direct File Imports
```javascript
import primitives from 'azion-theme/src/tokens/primitives/colors';
import { brandPrimitives, surfacePrimitives } from 'azion-theme/src/tokens/primitives/brand';
import brandColors from 'azion-theme/src/tokens/colors-brand';
import textSemantic from 'azion-theme/src/tokens/semantic/text';
import backgroundSemantic from 'azion-theme/src/tokens/semantic/backgrounds';
import borderSemantic from 'azion-theme/src/tokens/semantic/borders';
```

### Tailwind Configuration Example

```javascript
const { colors } = require('azion-theme/tokens');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        // Spread all primitive colors at once
        ...colors,
      },
    },
  },
  darkMode: ['class', '.dark', '.azion.azion-dark'],
  plugins: [],
};
```

### Theme Switch Compatibility

The CSS variable initializer targets both the Tailwind `.dark` class and the existing theme classes used by the SCSS theme:

```css
:root, [data-theme=light], .azion.azion-light { /* light vars */ }
[data-theme=dark], .dark, .azion.azion-dark { /* dark vars */ }
```

#### 2. In HTML/Tailwind Classes:
```html
<!-- Using semantic text/background tokens -->
<div class="text-base bg-background-card">
  Base text with card background
</div>

<!-- Using primitive colors -->
<div class="bg-orange-500 text-brand-black">
  Orange background with brand black text
</div>

<!-- Using brand colors -->
<button class="bg-brand-black text-brand-white hover:bg-orange-600">
  Button with brand colors
</button>
```

#### 3. In CSS:
```css
.my-component {
  background-color: #fe601f; /* orange-500 */
  color: #0a0a0a; /* brand-black */
}
```

#### 4. In JavaScript/TypeScript:
```typescript
// Option 1: Simple import (recommended)
const { colors } = require('azion-theme/tokens');

const primaryColor = colors.orange[500];
const brandBlack = colors.brand.black;

// Option 2: Import structured tokens
const tokens = require('azion-theme/tokens');
const { colors: allColors, brandColors } = tokens;
```

### 🛠️ Sync & Maintenance (With Script)

1) **Export tokens from Tokens Studio (Figma)** and save the output into [`figma-reference-tokens-studio/`](src/tokens/figma-reference-tokens-studio:1).
2) **Regenerate tokens** with the script below. This overwrites the token files, so commit only after review.

```bash
node ./scripts/figma-sync.js
```

Files affected by the script:
- [`src/tokens/primitives/colors.ts`](src/tokens/primitives/colors.ts:1)
- [`src/tokens/primitives/brand.ts`](src/tokens/primitives/brand.ts:1)
- [`src/tokens/semantic/text.ts`](src/tokens/semantic/text.ts:1)
- [`src/tokens/semantic/backgrounds.ts`](src/tokens/semantic/backgrounds.ts:1)
- [`src/tokens/semantic/borders.ts`](src/tokens/semantic/borders.ts:1)

### 🧰 Manual Maintenance (Without Script)

When updating or adding tokens manually, edit the files below depending on the token type:

- **Primitive palettes:** [`src/tokens/primitives/colors.ts`](src/tokens/primitives/colors.ts:1)
- **Brand + surface primitives:** [`src/tokens/primitives/brand.ts`](src/tokens/primitives/brand.ts:1)
- **Semantic text (light/dark):** [`src/tokens/semantic/text.ts`](src/tokens/semantic/text.ts:1)
- **Semantic backgrounds (light/dark):** [`src/tokens/semantic/backgrounds.ts`](src/tokens/semantic/backgrounds.ts:1)
- **Semantic borders (light/dark):** [`src/tokens/semantic/borders.ts`](src/tokens/semantic/borders.ts:1)
- **Brand aliases:** [`src/tokens/colors-brand.ts`](src/tokens/colors-brand.ts:1)
- **Tailwind mappings (class names):** [`src/tokens/build/preset.ts`](src/tokens/build/preset.ts:1)
- **CSS vars output/selectors:** [`src/tokens/build/css-vars.ts`](src/tokens/build/css-vars.ts:1)

Checklist when adding a new token manually:
1) Add/update the primitive or surface scale value (if needed).
2) Add matching semantic entries for both `light` and `dark`.
3) Update Tailwind mappings if you want a class for the token.
4) Regenerate or verify CSS vars output for both themes.

### 🎨 Available Colors

#### Main Palette (Orange)
- `orange-50` → `orange-950`
- **Primary**: `orange-500` (#fe601f)

#### Brand Palette
- `brand-black` (#0a0a0a)
- `brand-white` (#fafafa)
- `brand-dark-gray` (#171717)
- `brand-medium-gray` (#737373)

#### Other Complete Palettes
- **Violet, Slate, Gray, Neutral, Blue, Red, Yellow, Green**
- All with 11 shades (50 → 950)

#### Semantic Colors
- `primary` (orange-500)
- `success` (green-500)
- `warning` (yellow-500)
- `error` (red-500)
- `info` (blue-500)

### ⚠️ Troubleshooting

#### If you get import errors:

**Option 1: CommonJS (recommended for most projects)**
```javascript
const { primitiveColors, brandColors } = require('azion-theme/tokens');
```

**Option 2: ES Modules**
```javascript
import tokens from 'azion-theme/tokens';
const { primitiveColors, brandColors } = tokens;
```

**Option 3: Individual imports**
```javascript
const primitiveColors = require('azion-theme/tokens/primitive');
const brandColors = require('azion-theme/tokens/brand');
```

**Option 4: Direct file imports**
```javascript
import primitiveColors from 'azion-theme/src/tokens/colors-primitive';
import brandColors from 'azion-theme/src/tokens/colors-brand';
```

**Option 5: Configure Vite (if using Vite)**
Add to your `vite.config.js`:
```javascript
export default {
  resolve: {
    conditions: ['import', 'module', 'browser', 'default']
  }
}
```

## 🔗 Links

- [PrimeVue](https://v3.primevue.org/)
- [PrimeVue Sass Theme](https://github.com/primefaces/primevue-sass-theme)
- [Figma Global Tokens](https://www.figma.com/design/t97pXRs7xME3SJDs5iZ5RF/Global-Tokens?node-id=0-1)