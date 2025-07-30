## 설치 명령어
```bash
yarn create vite@latest
cd {my_app}

# 폰트 및 유틸리티 설치
yarn add chance luxon @fontsource/material-icons
yarn add -D @types/chance @types/luxon

# TailwindCSS v4 및 DaisyUI 구성
yarn add -D @tailwindcss/cli
yarn add -D tailwindcss postcss autoprefixer @tailwindcss/postcss daisyui @tailwindcss/line-clamp

# redux 패키지 설치
yarn add redux @reduxjs/toolkit react-redux react-router-dom
yarn add redux-logger 
yarn add -D @types/redux-logger
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
