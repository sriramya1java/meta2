import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    programs: ['ACS', 'PEP', 'POP', 'AFF', 'ECON', 'CEDSCI'],
    tableTypes: ['Hierarchical', 'Detailed', 'Another Table Type'],
    datasets: ['ACS2017', 'ACS2019', 'ACS2000', 'POP1900', 'PEP2004'],
    tableUniverse: '',
    headerNotes: ['HeaderNote1', 'HeaderNote2', 'HeaderNote3', 'HeaderNote1', 'HeaderNote1', 'HeaderNote1']
  },
  getters: {
  },
  // mutations as synchronous transactions
  mutations: {
    UPDATE_TABLE_UNIVERSE (state, tableUniverse) {
      console.log('this is mutation execution')
      console.log(tableUniverse)
      state.tableUniverse = tableUniverse
    }
  },
  // instead of mutationg the state, actions commit mutations
  // actions can contain arbitrary asynchronous operations.
  actions: {
    updateTableUniverse ({ commit }, tableUniverse) {
      console.log('this is action')
      console.log(tableUniverse)
      commit('UPDATE_TABLE_UNIVERSE', tableUniverse)
    }
  }
})
