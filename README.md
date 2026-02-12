# Professional Developer Portfolio

[![CI](https://github.com/nramanath/profile/actions/workflows/ci.yml/badge.svg)](https://github.com/nramanath/profile/actions/workflows/ci.yml)
[![CD](https://github.com/nramanath/profile/actions/workflows/cd.yml/badge.svg)](https://github.com/nramanath/profile/actions/workflows/cd.yml)

[![Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=flat&logo=astro&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=flat&logo=bun&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=flat&logo=prettier&logoColor=black)
![Mise](https://img.shields.io/badge/mise-task%20runner-blue)

A professional developer portfolio website built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), featuring a clean, responsive design, robust CI/CD pipelines, and modern tooling.

## Project Structure

```bash
.
├── public/           # Static assets
├── src/
│   ├── assets/       # Optimized images
│   ├── content/
│   │   └── docs/     # Markdown/MDX content pages
│   └── styles/       # Custom CSS tweaks
├── astro.config.mjs  # Astro configuration
├── mise.toml         # Task runner configuration
└── package.json      # Dependencies
```

## Getting Started

This project uses **[mise](https://mise.jdx.dev/)** for managing tools and tasks.

1.  **Install Dependencies**:

    ```bash
    mise install
    ```

2.  **Start Development Server**:

    ```bash
    mise run dev
    ```

3.  **Run Checks Locally (Pre-PR)**:
    ```bash
    mise pr
    ```
    This runs formatting checks, linting, and a production build to ensure your changes are ready.

## Deployment

Deployment is automated via GitHub Actions. Pushes to the `main` branch trigger the [CD workflow](.github/workflows/cd.yml) which builds and deploys the site to GitHub Pages.
