# simple-tsx

A simple way to use `.tsx` files without Babel or React!

## Installation

npm: `npm install --save simple-tsx`
yarn: `yarn add simple-tsx`

## Usage

In your `tsconfig.json` file, add these following values to the `compilerOptions` section:

```json
    "jsx": "react",
    "jsxFactory": "SimpleTSX.createElement",
    "jsxFragmentFactory": "SimpleTSX.createFragment",
```

In each of your `.tsx` files, put the following import line on top:

```tsx
import * as SimpleTSX from "simple-tsx";
```
