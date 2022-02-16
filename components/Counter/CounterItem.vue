<template>
    <div>
        <h1>Storybook teste with Vuex and ESLint</h1>
        <div class="my-6">
            <span class="text-h1 font-weight-bold">{{ count }}</span>
        </div>
        <div class="d-flex flex-row justify-center">
            <ButtonControl
                :width="150"
                :height="50"
                :disabled="disableDecrement"
                :color="'red'"
                @action="decrement"
            >
                <template #content>
                    <span class="font-weight-black">
                        <v-icon large>mdi-minus</v-icon>
                    </span>
                </template>
            </ButtonControl>
            <ButtonControl
                :width="200"
                :height="50"
                class="mx-5"
                @action="generateRandomNumber"
            >
                <template #content>
                    <span class="font-weight-black"> RANDOM NUMBER </span>
                </template>
            </ButtonControl>
            <ButtonControl
                :width="150"
                :height="50"
                :disabled="disableIncrement"
                @action="increment"
            >
                <template #content>
                    <span class="font-weight-black">
                        <v-icon large>mdi-plus</v-icon>
                    </span>
                </template>
            </ButtonControl>
        </div>
    </div>
</template>

<script>
import ButtonControl from '@/components/Buttons/Control/ButtonControl.vue'
export default {
    name: 'CounterItem',
    components: {
        ButtonControl,
    },
    computed: {
        count() {
            return this.$store.getters.GET_COUNT
        },
        disableIncrement() {
            return this.count >= 100
        },
        disableDecrement() {
            return this.count === 0
        },
    },
    methods: {
        increment() {
            this.$store.commit('INCREMENT_COUNT')
        },
        decrement() {
            this.$store.commit('DECREMENT_COUNT')
        },
        generateRandomNumber() {
            this.$store.dispatch('GENERATE_RANDOM_NUMBER')
        },
    },
}
</script>
