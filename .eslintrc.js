module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
    plugins: [],
    // add your custom rules here
    rules: {
        indent: ['error', 4],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/no-duplicate-attributes': [
            'error',
            {
                allowCoexistClass: true,
                allowCoexistStyle: true,
            },
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 3,
                },
            },
        ],
        'vue/use-v-on-exact': ['error'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    globals: {
        $nuxt: true,
        $store: true,
    },
}
