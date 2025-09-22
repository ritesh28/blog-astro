<p align="center">
  <a href="https://github.com/ritesh28/blog-astro" target="_blank">
    <img data-source="github" loading="lazy" alt="Blog Astro" src="https://github.com/ritesh28/blog-astro/raw/main/public/page_home.png" width="750"/>
  </a>
</p>

# Blog Website using Astro.js

A developer blog built with Astro.js, featuring usage guides, troubleshooting tips, and feature insights on libraries and frameworks. Topics span JavaScript, Python, and data science, offering practical help for developers at every level.

<h3 align="center">
  <a href="https://blog-astro-dun.vercel.app/" target="_blank">View Demo</a>
  <span> · </span>
  <a href="https://github.com/ritesh28/blog-astro/issues" target="_blank">Report Bug</a>
</h3>

## Libraries and Tools

![Astro.js@5.13.8](https://img.shields.io/badge/Astro.js-5.13.8-blue?logo=astro)
![tailwindcss@4.1.13](https://img.shields.io/badge/Tailwindcss-4.1.13-blue?logo=tailwindcss)
![flowbite@3.1.2](https://img.shields.io/badge/Flowbite-3.1.2-blue)
![randomcolor@0.6.2](https://img.shields.io/badge/random_color-0.6.2-blue)
![reading-time-estimator@1.14.0](https://img.shields.io/badge/reading_time_estimator-1.14.0-blue)

## Run Locally

```bash
git clone https://github.com/ritesh28/blog-astro.git
npm install
npm run dev
```

Add blog .md file to `/src/content/blog` and its image to `public/content-image` with following meta example:

```
title: A Comprehensive Guide to Using Apollo GraphQL with JavaScript
pubDate: 2025-08-11
imageURL: "/content-image/apollo_graphql.png"
tags: ["apollo", "graphQL", "front-end", "back-end", "javaScript"]
slug: a-comprehensive-guide-to-using-apollo-graphql-with-javascript
```

Create `.env` file in root folder with following variables:

```env
PUBLIC_GITHUB_LINK=
PUBLIC_GITHUB_REPO_LINK=
PUBLIC_LINKEDIN_LINK=
PUBLIC_PORTFOLIO_LINK=
```

If you want to start from scratch:

```bash
npm create astro@4.13.1
npm run astro add tailwind
npm install flowbite
npm run astro add @astrojs/vercel
```
