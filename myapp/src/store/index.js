// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
users: []
}

//to handle state
const getters = {
allUsers: (state) => state.users
}

//to handle actions
const actions = {
getUsers({ commit }) {
axios.get('https://restcountries.eu/rest/v2/all')
.then(response => {
commit('SET_USERS', response.data)
})
}
}

//to handle mutations
const mutations = {
SET_USERS(state, users) {
state.users = users
}
}

//export store module
export default new Vuex.Store({
state,
getters,
actions,
mutations
})
