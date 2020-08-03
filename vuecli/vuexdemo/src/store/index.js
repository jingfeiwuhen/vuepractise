import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  counter: 1000,
  students: [
    {id: 1, name: 'sunc1', age: 18},
    {id: 2, name: 'sunc2', age: 8},
    {id: 3, name: 'sunc3', age: 40},
    {id: 4, name: 'sunc4', age: 34},
    {id: 5, name: 'sunc5', age: 28},
    {id: 6, name: 'sunc6', age: 1},
    {id: 7, name: 'sunc7', age: 18}
  ],
  info: {name: 'sunce', age: 18}
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

export default store
