# Aqueous

Internal design system documentation site. Developers can browse UI components
used across the application from this site.

This project is intended for internal use. The repository may be shared openly
within the company; it is not a public product surface.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint               |

## Project structure

```
src/app/          App Router pages and layout
public/           Static assets
```

Component documentation and design-system primitives will be added in later
passes. This repo currently provides the website scaffold only.
