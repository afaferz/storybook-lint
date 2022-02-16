export const state = () => ({
    count: 0,
})

export const getters = {
    GET_COUNT: (state) => state.count,
}

export const mutations = {
    INCREMENT_COUNT: (state, payload) => {
        state.count += 1
    },
    DECREMENT_COUNT: (state, payload) => {
        state.count -= 1
    },
    UPDATE_COUNT: (state, payload) => {
        state.count = payload
    },
}

export const actions = {
    GENERATE_RANDOM_NUMBER({ commit }) {
        const randomValue = Math.floor(Math.random() * 100)

        commit('UPDATE_COUNT', randomValue)
    },
}
