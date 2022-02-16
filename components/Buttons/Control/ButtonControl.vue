<template>
    <v-btn
        :height="heightButton"
        :width="widthButton"
        :disabled="disabled"
        @click.stop="$emit('action')"
    >
        <slot name="content"></slot>
    </v-btn>
</template>

<script>
export default {
    props: {
        height: {
            type: [String, Number],
            default: 150,
        },
        width: {
            type: [String, Number],
            default: 150,
        },
        disabled: {
            type: Boolean,
            default: false
        }
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
