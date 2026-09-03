# site_glonass

A static website for GLONASS/GPS vehicle monitoring services, fleet solutions, and equipment catalog pages.

The project is built with [Minista](https://minista.qranoko.jp/), React components, SCSS styles, and client-side JavaScript modules for interactive UI behavior.

## Stack

- Minista 3
- SCSS / PostCSS
- ESLint, Stylelint, Prettier
- IMask for form input masks

## Requirements

- Node.js 24 or a compatible current Node.js version
- npm

## Installation

```bash
npm ci
```

## Scripts

```bash
npm start
```

Starts the local Minista development server.

```bash
npm run build
```

Builds the production version of the website into the `dist` directory.

```bash
npm run preview
```

Starts a local preview server for the built website.

```bash
npm run lint
```

Runs JavaScript, SCSS, and formatting checks.

```bash
npm run lint:fix
```

Automatically fixes supported linting and formatting issues.

## Project Structure

```text
src/
  assets/       fonts, images, icons, and favicons
  components/   small reusable components
  constants/    shared project constants
  layouts/      base layout components: Header, Content, Footer
  modules/      client-side JavaScript modules for interactivity
  page-data/    page and catalog data
  pages/        website pages and Minista dynamic routes
  sections/     larger page sections
  styles/       global styles, variables, mixins, and helpers
  utils/        utility functions
```

## Pages

Main pages are located in `src/pages`:

- home page;
- service pages;
- solution pages for vehicle fleets;
- equipment catalog;
- equipment detail pages via dynamic `[slug].jsx` routes;
- legal pages, sitemap, and 404 page.

Page data is stored in `src/page-data`, so content can be updated separately from section markup.

## Client-Side Logic

Client-side modules are initialized in `src/main.js`, including:

- header and navigation;
- modals;
- sliders and lightbox;
- cookie banner;
- forms and validation;
- region map;
- catalog filters;
- cart;
- tabs and additional UI behavior.

Global HTML structure, SEO metadata, favicons, manifest, header/footer, and shared components are configured in `src/global.jsx`.

## Build and Deployment

After running:

```bash
npm run build
```

the production files are generated in `dist`. This directory can be deployed to a static hosting provider or served by a web server.

The project includes `.htaccess` files in the project root and in `public/.htaccess` for Apache-based hosting.

## Docker

The project includes a `Dockerfile` that:

1. installs dependencies with `npm ci`;
2. runs `npm run lint:fix`;
3. builds the website with `npm run build`.

## Formatting and Code Quality

Before publishing changes, run:

```bash
npm run lint
npm run build
```

To apply automatic formatting and lint fixes:

```bash
npm run lint:fix
```
