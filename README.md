# utils

[![Test](https://github.com/inputstudio/utils/actions/workflows/test.yml/badge.svg)](https://github.com/inputstudio/utils/actions/workflows/test.yml)
![npm (scoped)](https://img.shields.io/npm/v/@inputstudio/utils)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40inputstudio%2Futils)
![GitHub](https://img.shields.io/github/license/inputstudio/utils)

`@inputstudio/utils` is a zero-dependency TypeScript utility library. It features a wide range of functions, from string to date, currency manipulation, and more.

## Installation

Install the package with your favorite package manager:

```bash
# npm
npm install @inputstudio/utils
# yarn
yarn add @inputstudio/utils
# pnpm
pnpm add @inputstudio/utils
```

## Usage

```ts
import { secret } from '@inputstudio/utils';
// or const { secret } = require('@inputstudio/utils');

const littleSecret = secret('hey 👋');

console.log(littleSecret); // h*****
```

## Development

Everyone is welcome to contribute to this project. To do so, please follow these steps:

1. Clone the repository
2. Checkout on `dev` branch and create a new branch from it
3. Install dependencies with `yarn`
4. Add your feature or fix
5. Add or update tests (we use [Vitest](https://vitest.dev) for testing)
6. Commit your changes (we follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/))
7. Push your branch
8. Open a pull request to `dev` branch

People from the team will review your pull request and merge it if everything is ok.

## Releasing

Quick guide to release a new version of the package:

```bash
yarn changeset # Create a new changeset
yarn changeset version # Bump the package version
```

## License

This project is licensed under the [MIT License](./LICENSE).
