# ATLAS - Private Wealth & Legacy Office

Replica of a luxury wealth management website built with modern web technologies.

## 🚀 Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Main navigation bar
│   ├── Hero.tsx           # Landing section
│   ├── Principles.tsx     # Core principles section
│   ├── WhatIsAtlas.tsx    # About section
│   ├── AreasOfFocus.tsx   # Services grid
│   ├── WhoWeServe.tsx     # Target audience
│   ├── Insights.tsx       # Articles/blog section
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer component
├── App.tsx                # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles with Tailwind
```

## 🛠️ Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations with Framer Motion
- ✅ Minimalist luxury aesthetic
- ✅ Dark theme with elegant typography
- ✅ Optimized performance with Vite
- ✅ TypeScript for type safety

## 🌐 Development

The development server runs at `http://localhost:5173/`

## 📝 Customization

### Colors
Edit [tailwind.config.js](tailwind.config.js) to customize the color palette:
```js
colors: {
  atlas: {
    dark: '#0a0a0a',
    gray: '#1a1a1a',
    light: '#f5f5f5',
    gold: '#d4af37',
  },
}
```

### Fonts
The project uses Inter font from Google Fonts. Change it in [index.html](index.html).

## 📄 License

This is a replica project for educational purposes.


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
