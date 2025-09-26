import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  "stories": [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {}
  },
  "staticDirs": [
    "../public",
    "../node_modules/@uswds",
    "../node_modules/@uswds/uswds/packages"
  ],
  refs: {
    "uswds-react": {
      title: "USWDS React from Trussworks",
      url: "https://trussworks.github.io/react-uswds/",
      expanded: false
    },
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            quietDeps: true,
            loadPaths: [
              // SASS resolves load paths relative to project root.
              "node_modules/@uswds/uswds/packages"
            ]
          }
        }
      }
    })
  }
};

export default config;
