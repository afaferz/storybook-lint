<template>
    <v-container class="main-content d-flex justify-center align-center">
        <v-row justify="center">
            <v-col cols="6" align="center">
                <CounterItem />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CounterItem from '~/components/Counter/CounterItem.vue'
export default {
    name: 'IndexPage',
    components: {
        CounterItem,
    },
}
</script>
<style lang="scss" scoped>
.main-content {
    height: 100vh !important;
}
</style>
