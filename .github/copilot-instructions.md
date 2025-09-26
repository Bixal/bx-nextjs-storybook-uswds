# Copilot Instructions for Next.js + Storybook + USWDS Project

## Architecture Overview

This is a **Next.js application** with integrated **Storybook** for component development and the **U.S. Web Design System (USWDS)** for accessibility-first design components.

### Key Integration Patterns

**USWDS Asset Management**: USWDS static assets (fonts, images, CSS) are automatically copied from `node_modules/@uswds/uswds/dist` to `public/uswds/` via the `postinstall` script. This ensures both Next.js and Storybook can access assets at the same paths.

**SASS Configuration**: The project uses a 3-phase SCSS compilation pattern:

1. Load settings from `styles/uswds-theme.scss`
2. Import USWDS core via `@forward "uswds"`
3. Add custom styles (currently unused phase)

**Component Library**: Uses `@trussworks/react-uswds` for pre-built React USWDS components. Mix these with custom components that follow USWDS design tokens.

## Development Workflows

**Component Development**:

- Create components in `components/[ComponentName]/` with `.tsx`, `.stories.ts`, and optional `.test.ts`
- Stories use `@storybook/nextjs-vite` framework with autodocs enabled
- Access USWDS components via `import { ComponentName } from '@trussworks/react-uswds'`

Note on dependencies: this project prefers keeping extra dependencies to a minimum. Before adding a new runtime or dev dependency, consider whether the functionality can be implemented with existing libraries or native platform features. When a new dependency is necessary, include a short justification in your PR description (purpose, maintenance/size tradeoffs, and security considerations).

**Asset Paths**:

- USWDS assets available at `/uswds/fonts`, `/uswds/img`, `/uswds/css`
- Configure paths in `styles/uswds-theme.scss` using `$theme-font-path` and `$theme-image-path`

**Testing Strategy**:

- Vitest with Storybook integration for component testing
- Browser testing via Playwright in headless Chromium
- Accessibility testing built into Storybook via `@storybook/addon-a11y`

## Project-Specific Conventions

**SCSS Module Resolution**: Both Next.js and Vite (Storybook) are configured to resolve SCSS from `node_modules/@uswds/uswds/packages`. Use `@use "uswds-core"` imports rather than relative paths.

**Static Directory Setup**: Storybook's `staticDirs` includes both `../public` and USWDS node_modules paths, enabling direct asset access in stories.

**TypeScript Configuration**: Uses `"type": "module"` in package.json with ES module imports throughout, including in config files.

## Critical Commands

```bash
npm run dev --turbopack      # Next.js dev with Turbopack
npm run storybook            # Storybook dev server on :6006
npm run build --turbopack    # Production build with Turbopack
npm install                  # Triggers USWDS asset copy via postinstall
```

## Key Files for Customization

- `styles/uswds-theme.scss`: USWDS design token overrides
- `.storybook/main.ts`: Vite config for SCSS preprocessing and static assets
- `scripts/postinstall.js`: Asset copying logic (modify if changing USWDS paths)
- `next.config.ts`: SASS includePaths for USWDS resolution

## Integration Points

**Next.js ↔ USWDS**: Unified SCSS compilation via `styles/styles.scss` entry point
**Storybook ↔ USWDS**: Vite preprocessing with same SCSS load paths as Next.js
**Testing ↔ Components**: Vitest runs against Storybook stories for consistent component testing
