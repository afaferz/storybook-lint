<template>
    <v-btn
        :height="heightButton"
        :width="widthButton"
        :color="color"
        :disabled="disabled"
        @click.stop="$emit('action')"
    >
        <slot name="content"></slot>
    </v-btn>
</template>

<script>
export default {
    name: 'ButtonControl',
    props: {
        height: {
            type: [String, Number],
            default: 50,
        },
        width: {
            type: [String, Number],
            default: 150,
        },
        color: {
            type: String,
            default: '#212121',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        heightButton() {
            return typeof this.height === 'number'
                ? `${this.height}px`
                : this.height
        },
        widthButton() {
            return typeof this.width === 'number'
                ? `${this.width}px`
                : this.width
        },
    },
}
</script>

<style></style>
