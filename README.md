# GPS Monitoring Website

A commercial website for a company providing GLONASS/GPS vehicle monitoring, fleet management solutions, and related equipment.

The project includes service pages, industry solutions, an equipment catalog, interactive forms, filtering, cart functionality, and reusable UI components.

## Features

* Responsive multi-page website
* Service and fleet solution pages
* Equipment catalog
* Dynamic equipment pages
* Catalog filtering
* Shopping cart functionality
* Forms with client-side validation and input masks
* Modal windows
* Sliders and image lightbox
* Tabs and accordions
* Interactive region map
* Cookie notification
* Responsive navigation
* SEO metadata and sitemap
* Custom 404 and legal pages

## My Role

I developed and maintained the frontend part of the website.

My work included:

* Building responsive pages and reusable UI components
* Implementing client-side JavaScript logic
* Developing forms and validation
* Implementing catalog filtering and cart functionality
* Creating interactive UI elements such as modals, sliders, tabs, and accordions
* Structuring page and catalog data separately from UI components
* Working with responsive and cross-browser layouts
* Improving and refactoring existing frontend code
* Preparing the project for production builds and deployment

## Tech Stack

* Minista 3
* JavaScript
* React components
* HTML5
* SCSS
* BEM
* PostCSS
* IMask
* ESLint
* Stylelint
* Prettier
* Git
* Docker

## Project Structure

```text
src/
  assets/       fonts, images, icons, and favicons
  components/   reusable UI components
  constants/    shared constants
  layouts/      Header, Content, Footer
  modules/      client-side JavaScript modules
  page-data/    page and catalog data
  pages/        pages and dynamic routes
  sections/     larger page sections
  styles/       global styles, variables, mixins, helpers
  utils/        utility functions
```

## Pages

The project contains:

* Home page
* Service pages
* Fleet solution pages
* Equipment catalog
* Dynamic equipment detail pages
* Legal pages
* Sitemap
* Custom 404 page

Page and catalog data are stored separately in `src/page-data`, allowing content to be updated independently from section markup.

## Client-Side Logic

Client-side modules include:

* Header and navigation
* Modal windows
* Sliders and lightbox
* Cookie banner
* Forms and validation
* Region map
* Catalog filters
* Cart
* Tabs
* Other interactive UI behavior

## Getting Started

### Requirements

* Node.js
* npm

Clone the repository:

```bash
git clone https://github.com/maminn174/gps-monitoring-website.git
cd gps-monitoring-website
```

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm start
```

Build the production version:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Code Quality

Run all checks:

```bash
npm run lint
```

Automatically fix supported formatting and linting issues:

```bash
npm run lint:fix
```

Before publishing changes:

```bash
npm run lint
npm run build
```

## Deployment

Production files are generated in the `dist` directory.

The project includes configuration for Apache-based hosting and a Dockerfile for building the production version.
