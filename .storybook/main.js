module.exports = {
    stories: [
        '../components/**/*.stories.mdx',
        '../components/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@socheatsok78/storybook-addon-vuetify',
        '@storybook/addon-actions',
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-knobs',
        '@storybook/addon-viewport',
        '@storybook/addon-storysource',
    ],
    framework: '@storybook/vue',
}
