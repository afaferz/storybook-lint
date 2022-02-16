// import { action } from '@storybook/addon-actions'
import ButtonControl from './ButtonControl.vue'

export default {
    component: ButtonControl,
    title: 'ButtonControl',
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {
        ButtonControl,
    },
    template: `
        <ButtonControl v-bind="$props" v-slot:content>
            ${args.content}
        </ButtonControl>
    `,
})

export const WithoutSlot = Template.bind({})
WithoutSlot.argTypes = {
    width: {
        control: { type: 'number', value: 150 },
    },
    height: {
        control: { type: 'number', value: 50 },
    },
    disabled: {
        control: { type: 'boolean', value: false },
    },
    color: {},
}
export const WithSlot = Template.bind({})
WithSlot.argTypes = {
    width: {
        control: { type: 'number', value: 150 },
    },
    height: {
        control: { type: 'number', value: 50 },
    },
    disabled: {
        control: { type: 'boolean', value: false },
    },
    color: {},
}
WithSlot.args = {
    content: `<span class="font-weight-bold white--text"><v-icon large>mdi-minus</v-icon></span>`,
}
