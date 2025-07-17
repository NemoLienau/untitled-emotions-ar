# Untitled Emotions AR

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)
[![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](#)

A small AR experiment to map facial expressions onto simple 3D monsters.

## Tech Stack
- [Three.js](https://threejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/) for end-to-end tests
- [Jest](https://jestjs.io/) for unit tests

## Quick Start
```bash
npm install
npm run dev
```

When opened in a browser, the page immediately requests camera access on a black
background. Once permission is granted, the device camera starts and the text
"Untitled Emotions" appears over the video feed.

### Requirements
Use Node.js version listed in `.nvmrc`.

### Building and Testing
```bash
npm run lint
npm test
npm run build
```

The build step outputs a single `dist/main.js` that `index.html` loads.

The face landmark model is downloaded on `npm install`. Ensure `public/models/face_landmarker.task` exists.

## Live Demo
![demo](docs/demo.gif)
[Live Demo](https://<username>.github.io/untitled-emotions-ar/)

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
