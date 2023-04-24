<div align="center">
  <img src="https://user-images.githubusercontent.com/7221671/228865434-48fb40fe-58f8-49b1-8a7b-0627b1846165.png" width="150" />
</div>

<h2 align="center"> Cartão de embarque - Desafio 6 - #bora codar Rocketseat</h2>

<div align="center"> 
  <img src="https://user-images.githubusercontent.com/7221671/234020479-18a5a896-62c0-4b2b-8723-9559e9eadf8d.png" width="1920" />
</div>

<h1>Bora Codar - Cartão de embarque</h1>

<p align="center">Desenvolvi essa aplicação utilizando como base o modelo sugerido no evento da Rockeseat #boraCodar. Foi utilizadas as tecnologias como NEXT, Tailwind.</p>

<h2>Referência</h2>

- [Template Bora Codar](https://www.figma.com/community/file/1205146101173113980/%23boraCodar---Desafio-6)
- [GitHub BoraCoadar](https://github.com/maykbrito/boracodar)

<h2>Licença</h2>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

<h2>Documentação de cores</h2>

| Cor        | Hexadecimal                                                      |
| ---------- | ---------------------------------------------------------------- |
| Violet 800 | ![#271A45](https://via.placeholder.com/10/271A45?text=+) #271A45 |
| Violet 500 | ![#633BBC](https://via.placeholder.com/10/633BBC?text=+) #633BBC |
| Violet 400 | ![#8257E5](https://via.placeholder.com/10/8257E5?text=+) #8257E5 |

<h2>Instalação</h2>

Instale Card Produto com npm

_Para instalar as dependencias_

```bash
  npm intall
```

_Para rodar o projeto_

```bash
  npm run dev
```

<h2>Tecnologias utilizadas</h2>

_Instalação do Tailwind para Next_

```bash
  npm install -D tailwindcss postcss autoprefixer
```

```bash
  npx tailwindcss init -p
```

_Adicionar ao arquivo tailwind.config.js_

```bash

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      gray: {
        950: '#09090a',
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        100: '#e1e1e6'
      },

      violet: {
        800: '#271A45',
        500: '#633BBC',
        400: '#8257E5'
      },

      white: '#ffffff',
      black: '#000000'
    },
    extend: {}
  },
  plugins: []
}



```

_Adicione ao seu CSS global_

```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
