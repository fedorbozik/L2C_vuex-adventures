import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// STATE
const state = {
    score: 15
}

// MUTATIONS
const mutations = {
    INCREMENT(state, value = 1) {
        state.score += value
    },
    DECREMENT(state, value = 1) {
        state.score -= value
    }
}

// ACTIONS
const actions = {
    increment(context) {
        let rand = Math.floor(Math.random() * 100)
        if (rand < 15) console.error('oh no :(')
        else context.commit('INCREMENT', rand)
    }
}

// GETTERS
const getters = {
    scoreButPretty(state) {
        return state.score > 100 ? `YAY ${state.score} YAY` : state.score
    }
}

// MODULES
const modules = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules
})
