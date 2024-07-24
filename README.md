# Winter Theme Starter Template

This repository is a starter template for creating a CSS theme for any existing site. It uses Tampermonkey to support Hot Module Replacement (HMR) during development.

## Features

- **Hot Module Replacement (HMR)**: Develop your CSS theme with live updates.
- **Build and Minify CSS**: Easily build and minify your CSS for production use.
- **Character Count**: Get the character count of your built CSS.

## Getting Started

### Prerequisites
- [TamperMonkey Extension](https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Installation

  ```sh
  pnpm install
  ```

### Configuration

1. Open the [vite.config.js](vite.config.js) file.
2. Configure the `userscript.match` and `userscript.icon` properties:
    ```js
    userscript: {
      icon: 'https://your-icon-url.svg',
      namespace: 'npm/vite-plugin-monkey',
      match: ['https://your-site-url/*'],
    },
    ```
3. Rename `name` in `package.json`

### Development

1. To start the development server with HMR, run:
```sh
pnpm dev
```
2. Open the local url
    - you can install the tampermonkey script, which supports HMR when you edit css.
    - you need to install tampermonkey extension and enable developer mode, see
    - https://www.tampermonkey.net/faq.php#Q209

### Build
```sh
pnpm build
```
