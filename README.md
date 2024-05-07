This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Coffee stores

```
Coffee stores

├─ .gitignore
├─ .vscode
│  └─ settings.json
├─ components
│  ├─ banner.js
│  ├─ banner.module.css
│  ├─ card.js
│  └─ card.module.css
├─ data
│  └─ coffee-stores.json
├─ hooks
│  └─ use-track-location.js
├─ jsconfig.json
├─ lib
│  ├─ airtable.js
│  └─ coffee-stores.js
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ api
│  │  ├─ createCoffeeStore.js
│  │  ├─ favouriteCoffeeStoreById.js
│  │  ├─ getCoffeeStoreById.js
│  │  └─ getCoffeeStoresByLocation.js
│  ├─ coffee-store
│  │  └─ [id].js
│  ├─ index.js
│  ├─ _app.js
│  └─ _document.js
├─ public
│  ├─ favicon.ico
│  ├─ fonts
│  │  ├─ IBMPlexSans-Bold.ttf
│  │  ├─ IBMPlexSans-Regular.ttf
│  │  └─ IBMPlexSans-SemiBold.ttf
│  ├─ next.svg
│  ├─ static
│  │  ├─ background.png
│  │  ├─ background2.png
│  │  ├─ hero-image.png
│  │  └─ icons
│  │     ├─ nearMe.svg
│  │     ├─ places.svg
│  │     └─ star.svg
│  ├─ thirteen.svg
│  └─ vercel.svg
├─ README.md
├─ store
│  └─ store-context.js
├─ styles
│  ├─ coffee-store.module.css
│  ├─ globals.css
│  └─ Home.module.css
└─ utils
   └─ index.js

```
