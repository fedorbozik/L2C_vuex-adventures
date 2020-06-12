import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        score: 15
    },
    mutations: {
        INCREMENT(state, value = 1) {
            state.score += value
        },
        DECREMENT(state, value = 1) {
            state.score -= value
        }
    },
    actions: {
        increment(context) {
            let rand = Math.floor(Math.random() * 100)
            if (rand < 15) console.error('oh no :(')
            else context.commit('INCREMENT', rand)
        }
    },
    getters: {
        scoreButPretty(state) {
            return state.score > 100 ? `YAY ${state.score} YAY` : state.score
        }
    },
    modules: {}
})
