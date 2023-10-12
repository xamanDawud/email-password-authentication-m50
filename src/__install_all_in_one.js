
1-npm create vite@latest name-of-your-project -- --template react
2-npm install react-router-dom localforage match-sorter sort-by
3-npm install -D tailwindcss postcss autoprefixer
4-npx tailwindcss init -p
5-npm i -D daisyui@latest
6-npm install firebase


-----------Tailwind.config.js-------------------
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

plugins: [require("daisyui")],
------------------------------


-----------Index.css-------------------
@tailwind base;
@tailwind components;
@tailwind utilities;
------------------------------