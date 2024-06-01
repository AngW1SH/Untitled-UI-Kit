import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (config) => {
    config.define = { "process.env": {} };

    if (!config.plugins) config.plugins = [];

    config.plugins.push(
      tsconfigPaths({
        // My tsconfig.json isn't simply in viteConfig.root,
        // so I've passed an explicit path to it:
        projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
      })
    );

    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@",
            replacement: path.resolve(__dirname, "./src/"),
          },
        ],
      },
    };
  },
};
export default config;
