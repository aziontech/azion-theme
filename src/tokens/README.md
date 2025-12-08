
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
  - [Temas Claro/Escuro](#-temas-claroescuro)
  - [Integração com Tailwind CSS](#-integração-com-tailwind-css)
  - [Integração com PrimeVue](#-integração-com-primevue)
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

## 🎨 Temas Claro/Escuro

O Azion Theme suporta temas claro e escuro. Para alternar entre os modos:

```typescript
// Para definir o tema
const setTheme = (isDark: boolean) => {
  const root = document.documentElement;
  root.classList.toggle('dark', isDark);
};

// Para alternar o tema
const toggleTheme = () => {
  const root = document.documentElement;
  const isDark = root.classList.contains('dark');
  setTheme(!isDark);
};
```

## 🎨 Integração com Tailwind CSS

1. Instale as dependências necessárias:

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. No seu `tailwind.config.js`:

```javascript
const { tailwindTheme } = require('azion-theme/tokens');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...tailwindTheme.theme.extend.colors,
      },
    },
  },
  plugins: [],
};
```

3. No seu arquivo CSS principal (ex: `index.css`), você só precisa importar as diretivas do Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Os tokens de cores já estarão disponíveis para uso direto nas classes do Tailwind, por exemplo:
- `text-color-base`
- `bg-color-surface`
- `border-color-border`
- `hover:text-color-primary`
- `dark:text-color-black` (para temas escuros)

Não é necessário declarar as variáveis CSS manualmente, pois elas já são fornecidas pelo tema do Azion através da configuração do Tailwind.

## 🎨 Integração com Frameworks

### React

Para usar com React, instale as dependências necessárias:

```bash
yarn add azion-theme
```

Configure o tema no seu aplicativo:

```tsx
// App.tsx
import { useEffect } from 'react';
import 'azion-theme/dist/light.css'; // Tema claro
import 'azion-theme/dist/dark.css';  // Tema escuro

function App() {
  // Exemplo de alternância de tema
  const setDarkMode = (isDark: boolean) => {
    document.documentElement.classList.toggle('dark', isDark);
  };

  return (
    <div className="text-color-base bg-background">
      <h1 className="text-color-primary">Meu App</h1>
      <button 
        onClick={() => setDarkMode(true)}
        className="px-4 py-2 bg-primary text-white"
      >
        Tema Escuro
      </button>
      <button 
        onClick={() => setDarkMode(false)}
        className="px-4 py-2 bg-primary text-white"
      >
        Tema Claro
      </button>
    </div>
  );
}

export default App;
```

### Vue.js

Para usar com Vue, instale as dependências:

```bash
yarn add azion-theme
```

Configure o tema no seu `main.ts` ou `main.js`:

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import 'azion-theme/dist/light.css';
import 'azion-theme/dist/dark.css';

const app = createApp(App);
app.mount('#app');
```

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

### Estrutura de Arquivos

Os tokens de design estão organizados nos seguintes arquivos:

- `colors-primitive.ts` - Cores primárias extraídas do Figma
- `colors-brand.ts` - Cores da marca baseadas nas cores primárias
- `colors-text.ts` - Tokens de cores de texto (claro/escuro)
- `colors-surfaces.ts` - Tokens para superfícies (claro/escuro)
- `theme.ts` - Orquestração dos temas e configuração do Tailwind

### Cores de Texto
- `text-color-base` - Cor de texto principal
- `text-color-base-hover` - Cor de texto principal no hover
- `text-color-muted` - Texto secundário
- `text-color-muted-hover` - Texto secundário no hover
- `text-color-primary` - Texto primário
- `text-color-primary-hover` - Texto primário no hover
- `text-color-secondary` - Texto secundário
- `text-color-secondary-hover` - Texto secundário no hover
- `text-color-link` - Links
- `text-color-link-hover` - Links no estado hover
- `text-color-code` - Texto para códigos/blocos de código

#### Compatibilidade com versões anteriores:
- `text-base` - Alias para `text-color-base`
- `text-muted` - Alias para `text-color-muted`
- `text-primary` - Alias para `text-color-primary`
- `text-link` - Alias para `text-color-link`

### Cores Fixas

#### Cores de Marca (brandColors)
- `orange` - Laranja primário
- `darkOrange` - Laranja escuro
- `lavander` - Lavanda
- `darkLavander` - Lavanda escura
- `blackLavander` - Lavanda preta

#### Cores Primitivas (primitiveColors)
- `orange` - Paleta de laranja (50-950)
- `violet` - Paleta de violeta (50-950)
- `slate` - Paleta de cinza azulado (50-950)
- `blue` - Paleta de azul (50-950)
- `green` - Paleta de verde (50-950)
- `yellow` - Paleta de amarelo (50-950)
- `red` - Paleta de vermelho (50-950)

### Cores project now includes **primitive color tokens** extracted directly from Figma, ready to be consumed via Tailwind CSS.

## 🔄 Como Usar os Tokens

### Importando Tokens

```typescript
// Importando tokens específicos
import { primitiveColors, brandColors, textColors } from 'azion-theme';

// Exemplo de uso com Tailwind
function MyComponent() {
  return (
    <div className="text-color-base dark:text-color-base">
      <h1 className="text-color-primary hover:text-color-primary-hover">Título</h1>
      <p className="text-color-muted">Texto secundário</p>
      <a href="#" className="text-color-link hover:text-color-link-hover">Link</a>
    </div>
  );
}
```

### Configuração do Tailwind

Atualize seu `tailwind.config.js` para incluir o tema do Azion:

```javascript
// tailwind.config.js
const { tailwindTheme } = require('azion-theme/tokens');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...tailwindTheme.theme.extend.colors,
      },
    },
  },
  plugins: [],
};
```

## 🌓 Suporte a Temas

O Azion Theme suporta temas claro e escuro. O tema é controlado pela classe `dark` no elemento raiz do HTML.

### Alternando entre temas

```typescript
// Alternar tema
const toggleTheme = () => {
  document.documentElement.classList.toggle('dark');
};

// Definir tema específico
const setTheme = (isDark: boolean) => {
  const root = document.documentElement;
  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};
```

### Usando em CSS

```css
/* Estilos base (tema claro) */
.text-color-base {
  color: theme('colors.text-color-base');
}

/* Sobrescreve para tema escuro */
.dark .text-color-base {
  color: theme('colors.dark.text-color-base');
}
```

// Or import individually
const primitiveColors = require('azion-theme/tokens/primitive');
const brandColors = require('azion-theme/tokens/brand');
```

#### Option 2: ES Module Import
```javascript
import tokens from 'azion-theme/tokens';
const { primitiveColors, brandColors } = tokens;
```

#### Option 3: Direct File Imports
```javascript
import primitiveColors from 'azion-theme/src/tokens/colors-primitive';
import brandColors from 'azion-theme/src/tokens/colors-brand';
```

### Tailwind Configuration Example

```javascript
const { primitiveColors, brandColors } = require('azion-theme/tokens');

module.exports = {
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
const { primitiveColors } = require('azion-theme/tokens');

const primaryColor = primitiveColors.primitive.orange[500];
const brandBlack = primitiveColors.primitive.base.black;

// Option 2: Import both tokens
const tokens = require('azion-theme/tokens');
const { primitiveColors: colors, brandColors } = tokens;
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