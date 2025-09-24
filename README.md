# Next.js + Storybook + USWDS Starter

A complete starter template for building accessible web applications using Next.js, Storybook, and the U.S. Web Design System (USWDS).


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

- NodeJS (see [`.nvmrc`](.nvmrc) for required version)
- npm or pnpm


### Installation

Clone the repo:


```bash
git clone git@github.com:Bixal/bx-nextjs-storybook-uswds.git
cd bx-nextjs-storybook-uswds
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```bash
├── components/           # Reusable components with stories
│   ├── Button/
│   └── Article/
├── pages/               # Next.js pages
├── public/uswds/        # USWDS static assets (auto-generated)
├── styles/              # SCSS files and USWDS theme
├── .storybook/          # Storybook configuration
└── scripts/             # Build and utility scripts
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## USWDS Integration

This project includes a complete USWDS setup:

- **Static Assets**: USWDS fonts, images, and CSS are automatically copied to [`public/uswds/`](public/uswds/) during `npm install`
- **Theme Customization**: Modify [`styles/uswds-theme.scss`](styles/uswds-theme.scss) to customize USWDS settings
- **Component Library**: Uses [@trussworks/react-uswds](https://github.com/trussworks/react-uswds) for pre-built React components

### Customizing USWDS

Edit [`styles/uswds-theme.scss`](styles/uswds-theme.scss) to override USWDS defaults:

```scss
@use "uswds-core" with (
  $theme-banner-background-color: "ink",
  // Add your customizations here.
);
```

## Development Scripts

```bash
npm run dev               # Start Next.js development server
npm run build             # Build for production
npm start                 # Start production server
npm run lint              # Run ESLint
npm run storybook         # Start Storybook development server
npm run build-storybook   # Build Storybook for production
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
