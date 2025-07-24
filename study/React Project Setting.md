## 설치 명령어
```bash
# 프로젝트 생성
npx create-react-app my-app --template typescript
cd my-app

# 폰트 및 유틸리티 설치
npm i chance luxon @fontsource/material-icons
npm i -D @types/chance @types/luxon

# TailwindCSS v4 및 DaisyUI 구성
npm i -D postcss autoprefixer tailwindcss@3.4.17
npm i -D daisyui@4.12.12
npx tailwindcss init -p
npm i -D @tailwindcss/line-clamp

# Redux 구성
npm i redux @reduxjs/toolkit react-redux
npm i redux-logger
npm i -D @types/redux-logger
npm i react-dnd react-dnd-html5-backend
npm i --legacy-peer-deps react-beautiful-dnd
npm i -D @types/react-beautiful-dnd --legacy-peer-deps
```

## tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
```

## postcss.config.js
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## src/index.tsx
```js
import "@fontsource/material-icons";
```
