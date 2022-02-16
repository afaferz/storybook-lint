import { configure, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { withVuetify } from '@socheatsok78/storybook-addon-vuetify/dist/decorators'

export const decorators = [withVuetify]

addDecorator(withKnobs)
configure(require.context('../components', true, /\.stories\.ts$/), module)

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
