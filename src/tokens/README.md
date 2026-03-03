
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

#### Recommended (CommonJS)
```javascript
const { colors, brandColors, primitiveColors } = require('azion-theme/tokens');
```

#### Recommended (ES Modules)
```javascript
import tokens from 'azion-theme/tokens';
const { colors, brandColors, primitiveColors } = tokens;
```

> Tokens are now published as ESM-only (`tokens.js`), and CommonJS consumers must use dynamic `import()` or ESM-compatible tooling.

#### Token structure overview
```javascript
colors.orange[500];           // primitive palette
colors.brand.black;           // brand aliases
colors.text.base;             // semantic text (CSS var)
colors.background.layer1;     // semantic background (CSS var)
colors.border.primary;        // semantic border (CSS var)
```

### Tailwind Setup

> **Option A** creates static `.bg-*`, `.text-*`, and `.border-*` utilities for **light + dark** using the `dark` selector.

#### Option A: Static utilities with dark variants (no CSS vars)
```javascript
import typography from '@tailwindcss/typography';
import { tokenUtilities } from 'azion-theme/tokens/build/tailwind-plugin';
const { colors } = require('azion-theme/tokens');

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  darkMode: ['class', '.dark', '.azion.azion-dark'],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [tokenUtilities(), typography],
};
```

**Example classes (Option A):**
- `bg-layer1`, `bg-canvas`, `bg-layer2-hover`
- `text-base`, `text-muted`, `text-accent`, `text-secondary`
- `border-base`, `border-primary`, `border-accent`, `border-secondary`

> **Option B** keeps **CSS variables** and uses the preset to add semantic names under `colors.text`, `colors.background`, `colors.border`.

#### Option B: CSS variables via preset (recommended for theme switching)
```javascript
import { createTailwindConfig } from 'azion-theme/tokens/build/tailwind-helper';
const { colors } = require('azion-theme/tokens');

export default createTailwindConfig({
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  darkMode: ['class', '.dark', '.azion.azion-dark'],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
});
```

**Example classes (Option B):**
- `bg-background-layer1`, `bg-background-canvas`
- `text-text-base`, `text-text-primary`, `text-text-accent`
- `border-border-base`, `border-border-primary`, `border-border-accent`

### Theme Switch Compatibility

The CSS variable initializer targets both the Tailwind `.dark` class and the existing theme classes used by the SCSS theme:

```css
:root, [data-theme=light], .azion.azion-light { /* light vars */ }
[data-theme=dark], .dark, .azion.azion-dark { /* dark vars */ }
```

#### 2. In HTML/Tailwind Classes:
```html
<!-- Semantic colors (Option A example) -->
<div class="text-base bg-layer1">
  Base text with layer1 background
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

#### How to feed new and changed tokens from Figma

1) **Update Figma Variables**
   - Ensure **Global** and **Semantic** variables are updated and organized correctly (naming, groups, modes, and values).

2) **Open the Tokens Studio for Figma plugin**

3) **Import Figma Variables into Tokens Studio**
   - Use Tokens Studio’s import-from-variables flow to bring the current Variables state into the token sets.

4) **Export to file/folder**
   - Export using **Multiple files**.

5) **Copy the exported files into this repo**
   - Place them under [`src/tokens/figma-reference-tokens-studio/`](src/tokens/figma-reference-tokens-studio:1) (replace existing contents).

6) **Regenerate the code tokens**
   - Run:

```bash
node ./scripts/figma-sync.js
```

7) **Review and commit**
   - Inspect the diff in the generated files and validate light/dark semantics before committing.

Files affected by the script:
- [`src/tokens/primitives/colors.js`](src/tokens/primitives/colors.js)
- [`src/tokens/primitives/brand.js`](src/tokens/primitives/brand.js)
- [`src/tokens/semantic/text.js`](src/tokens/semantic/text.js)
- [`src/tokens/semantic/backgrounds.js`](src/tokens/semantic/backgrounds.js)
- [`src/tokens/semantic/borders.js`](src/tokens/semantic/borders.js)

### 🧰 Manual Maintenance (Without Script)

When updating or adding tokens manually, edit the files below depending on the token type:

- **Primitive palettes:** [`src/tokens/primitives/colors.js`](src/tokens/primitives/colors.js)
- **Brand + surface primitives:** [`src/tokens/primitives/brand.js`](src/tokens/primitives/brand.js)
- **Semantic text (light/dark):** [`src/tokens/semantic/text.js`](src/tokens/semantic/text.js)
- **Semantic backgrounds (light/dark):** [`src/tokens/semantic/backgrounds.js`](src/tokens/semantic/backgrounds.js)
- **Semantic borders (light/dark):** [`src/tokens/semantic/borders.js`](src/tokens/semantic/borders.js)
- **Brand aliases:** [`src/tokens/colors-brand.js`](src/tokens/colors-brand.js)
- **Tailwind mappings (class names):** [`src/tokens/build/preset.js`](src/tokens/build/preset.js)
- **CSS vars output/selectors:** [`src/tokens/build/css-vars.js`](src/tokens/build/css-vars.js)

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
