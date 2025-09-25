
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

Este projeto agora inclui **tokens de cores primitivas** extraídas diretamente do Figma, prontas para serem consumidas via Tailwind CSS.

### 📁 Arquivos de Tokens

- **`src/tokens/colors-primitive.ts`** - Tokens de cores primitivas do Figma
- **`tailwind.config.js`** - Configuração do Tailwind com os tokens

### 🚀 Como Usar os Tokens

#### No HTML/Tailwind Classes:
```html
<!-- Usando cores primitivas -->
<div class="bg-orange-500 text-brand-black">
  Fundo laranja com texto preto da marca
</div>

<!-- Usando cores semânticas -->
<button class="bg-primary text-brand-white hover:bg-orange-600">
  Botão primário
</button>
```

#### No CSS:
```css
.my-component {
  background-color: #fe601f; /* orange-500 */
  color: #0a0a0a; /* brand-black */
}
```

#### No JavaScript/TypeScript:
```typescript
import { primitiveColors, semanticColors } from './src/tokens/colors-primitive';

const primaryColor = primitiveColors.orange[500];
const brandBlack = primitiveColors.brand.black;
```

### 🎨 Cores Disponíveis

#### Paleta Principal (Orange)
- `orange-50` → `orange-950`
- **Primary**: `orange-500` (#fe601f)

#### Paleta Brand
- `brand-black` (#0a0a0a)
- `brand-white` (#fafafa)

#### Outras Paletas Completas
- **Violet, Slate, Gray, Neutral, Blue, Red, Yellow, Green**
- Todas com 11 tons (50 → 950)

#### Cores Semânticas
- `primary` (orange-500)
- `success` (green-500)
- `warning` (yellow-500)
- `error` (red-500)
- `info` (blue-500)

### ✅ Vantagens

- **Sem processamento** - usa diretamente os tokens
- **TypeScript** - autocomplete e type safety
- **Compatível** com sistema SCSS atual
- **Fácil migração** - substitui gradualmente variáveis SCSS
- **Figma integrado** - cores extraídas diretamente do design

## 🔗 Links

- [PrimeVue](https://v3.primevue.org/)
- [PrimeVue Sass Theme](https://github.com/primefaces/primevue-sass-theme)
