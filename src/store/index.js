import Vue from 'vue'
import Vuex from 'vuex'
import repository from '../config/repository'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: {
      state: () => ({
        user: null,
        drawer: null,
      }),
      getters: {
        user: state => state.user,
        authenticaticated: state => state.user != null
      },
      mutations: {
        SET_USER(state, user) {
          state.user = user
        },
        SET_DRAWER(state, payload) {
          state.drawer = payload
        },
      },
      actions: {
        async login({ commit }, user) {
          await repository.createSession()
          const { data } = await repository.login(user)
          commit('SET_USER', data)
        }
      }
    }
  }
})

