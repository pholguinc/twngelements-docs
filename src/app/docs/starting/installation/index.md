---
title: Intalación a TwNG
name: intallation
category: Docs,
keywords: introducción, inicio
order: 2
---
<br/>

# ¿Cómo instalar TwNGElements UI?


1. Instalar TwNGElements UI como dependencia de node.

```bash group="install" name="npm"
npm i twng-elements-ui
```

```bash group="install" name="pnpm"
pnpm add twng-elements-ui
```

```bash group="install" name="yarn"
yarn add twng-elements-ui
```

```bash group="install" name="bun"
bun add twng-elements-ui
```

2. Instalar TailwindCSS

```bash group="twcss" name="npm"
npm install tailwindcss @tailwindcss/postcss postcss --force
```

```bash group="twcss" name="pnpm"
pnpm add tailwindcss @tailwindcss/postcss postcss --force
```

```bash group="twcss" name="yarn"
yarn add tailwindcss @tailwindcss/postcss postcss --force
```

```bash group="twcss" name="bun"
bun add tailwindcss @tailwindcss/postcss postcss --force
```

3. Crear el archivo .postcssrc.json en la raíz del proyecto

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

4. Importar librerías a nuestro proyecto de Angular en nuestro archivo styles.css

```typescript
@import "tailwindcss;

@import 'twng-elements-ui/styles/root.css';

```
