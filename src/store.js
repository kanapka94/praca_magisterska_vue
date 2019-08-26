import Vue from 'vue'
import Vuex from 'vuex'
import service from '@/service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drinks: [],
    loading: false
  },
  mutations: {
    SET_DRINKS (state, payload) {
      state.drinks = [...payload]
    },
    SET_LOADING (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    async fetchDrinks ({ commit }, payload) {
      commit('SET_LOADING', true)
      let response = []
      if (payload.value && payload.criteria) {
        let getMethod = service.filter[payload.criteria]
        if (payload.criteria === 'id') {
          getMethod = service.drinks.getDrinkById
        } else if (payload.criteria === 'name') {
          getMethod = service.drinks.getDrinkByName
        }
        response = await getMethod(payload.value)
      }
      commit('SET_DRINKS', response.drinks || [])
      setTimeout(() => {
        commit('SET_LOADING', false)
      }, 250)
    }
  }
})
