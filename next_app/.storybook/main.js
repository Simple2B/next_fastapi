async function supportCssModules(config) {
  config.module.rules.find(
    (rule) => rule.test.toString() === '/\\.css$/'
  ).exclude = /\.module\.css$/

  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  })
  return config;
}


module.exports = {
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "stories": ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  /** Expose public folder to storybook as static */
  "staticDirs": ['../public'],
  "addons": [
    "@storybook/addon-links",
    // '@storybook/addon-actions',
    "@storybook/addon-essentials",
    // "@storybook/addon-interactions",
    // 'storybook-addon-next',
    "storybook-addon-next-router",
    "@storybook/addon-docs",
    // '@storybook/addon-postcss',
    // "storybook-css-modules",
    // "storybook-addon-turbo-build",
    // "@storybook/addon-controls"
    
  ],
  "framework": "@storybook/react",
  
  // FIXME: Support CSS Modules for Storybook
  webpackFinal: supportCssModules
}