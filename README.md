# Professional Developer Portfolio

[![CI](https://github.com/nramanath/profile/actions/workflows/ci.yml/badge.svg)](https://github.com/nramanath/profile/actions/workflows/ci.yml)
[![CD](https://github.com/nramanath/profile/actions/workflows/cd.yml/badge.svg)](https://github.com/nramanath/profile/actions/workflows/cd.yml)

[![Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=flat&logo=bun&logoColor=white)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=flat&logo=prettier&logoColor=black)](https://prettier.io/)
[![Mise](https://img.shields.io/badge/mise-task%20runner-blue)](https://mise.jdx.dev/)

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

## AI-Driven Workflows

This repository is optimized for speed and automation using agentic AI capabilities:

- **Antigravity Skills**: Custom workflows located in `.agent/workflows/` allow for voice/text-prompted portfolio updates.
    - **Update Portfolio**: By simply updating the resume PDF and asking Antigravity to `update portfolio`, the agent intelligently parses the PDF and synchronizes all markdown content (`experience.mdx`, `skills.mdx`), eliminating manual data entry.
    - **Automated PR Creation**: A dedicated `create-pr` skill automates the chore of running CI checks, branching, formatting, and generating compliant pull requests.
- **Gemini Code CLI bot**: Pull requests are automatically reviewed by the Gemini Code CLI bot, ensuring a high standard of code quality and demonstrating an AI-forward approach to development.
