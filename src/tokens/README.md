
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
import { primitiveColors, brandColors } from 'azion-theme/tokens';

// Or import both at once
import tokens from 'azion-theme/tokens';
const { primitive, brand } = tokens;
```

#### Option 2: Individual Token Imports
```javascript
import primitiveColors from 'azion-theme/tokens/primitive';
import brandColors from 'azion-theme/tokens/brand';
```

#### Option 3: Direct File Imports
```javascript
import primitiveColors from 'azion-theme/src/tokens/colors-primitive';
import brandColors from 'azion-theme/src/tokens/colors-brand';
```

### Tailwind Configuration Example

```javascript
import { primitiveColors, brandColors } from 'azion-theme/tokens';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        // Spread all primitive colors at once
        ...primitiveColors.primitive,

        // Brand Colors
        brand: brandColors.brand,
      },
    },
  },
  plugins: [],
};
```

#### 2. In HTML/Tailwind Classes:
```html
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
import { primitiveColors } from 'azion-theme/tokens';

const primaryColor = primitiveColors.primitive.orange[500];
const brandBlack = primitiveColors.primitive.base.black;

// Option 2: Import both tokens
import tokens from 'azion-theme/tokens';
const { primitive, brand } = tokens;
```

### 🎨 Available Colors

#### Main Palette (Orange)
- `orange-50` → `orange-950`
- **Primary**: `orange-500` (#fe601f)

#### Brand Palette
- `brand-black` (#0a0a0a)
- `brand-white` (#fafafa)

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

**Option 1: ES Module import (recommended)**
```javascript
import { primitiveColors, brandColors } from 'azion-theme/tokens';
```

**Option 2: Default import**
```javascript
import tokens from 'azion-theme/tokens';
const { primitive, brand } = tokens;
```

**Option 3: Individual imports**
```javascript
import primitiveColors from 'azion-theme/tokens/primitive';
import brandColors from 'azion-theme/tokens/brand';
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