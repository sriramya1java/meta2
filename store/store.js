import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    programs: ['ACS', 'PEP', 'POP', 'AFF', 'ECON', 'CEDSCI'],
    tableTypes: ['Hierarchical', 'Detailed', 'Another Table Type'],
    datasets: ['ACS2017', 'ACS2019', 'ACS2000', 'POP1900', 'PEP2004'],
    tableUniverse: '',
    headerNotes: ['HeaderNote1', 'HeaderNote2', 'HeaderNote3', 'HeaderNote4', 'HeaderNote5', 'HeaderNote6'],
    tablesList: [{
      programId: 'ACS',
      datasetId: 'ACSDT1Y2016',
      tableId: 'B25045',
      tableType: 'HIERARCHICAL1',
      displayLabel: 'TENURE BY VEHICLES AVAILABLE BY AGE OF HOUSEHOLDER',
      lastUpdatedBy: 'Matthew Curtiss',
      lastUpdated: '--',
      lastDelivered: 'Dec 19, 2018 09:25:04 am'
    },
      { programId: 'PEP',
        datasetId: 'POPESTCHARAGEGROUPS2016',
        tableId: 'PEPAGESEX',
        tableType: 'HIERARCHICAL1',
        displayLabel: 'Annual Estimates of the Resident Population for Selected Age Groups by Sex for the United States, St...',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: '--',
        lastDelivered: 'June 28, 2018 02:48:01 pm'
      }, {
        programId: 'ACS',
        datasetId: 'ACSDT1Y2016',
        tableId: 'B25045',
        tableType: 'HIERARCHICAL1',
        displayLabel: 'TENURE BY VEHICLES AVAILABLE BY AGE OF HOUSEHOLDER',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: '--',
        lastDelivered: 'Dec 19, 2018 09:25:04 am'
      }, {
        programId: 'PEP',
        datasetId: 'POPESTCHARAGEGROUPS2016',
        tableId: 'PEPAGESEX',
        tableType: 'HIERARCHICAL1',
        displayLabel: 'Annual Estimates of the Resident Population for Selected Age Groups by Sex for the United States, St...',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: '--',
        lastDelivered: 'June 28, 2018 02:48:01 pm'
      }, {
        programId: 'ACS',
        datasetId: 'ACSDT1Y2016',
        tableId: 'B25045',
        tableType: 'HIERARCHICAL1',
        displayLabel: 'TENURE BY VEHICLES AVAILABLE BY AGE OF HOUSEHOLDER',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: '--',
        lastDelivered: 'Dec 19, 2018 09:25:04 am'
      }, {
        programId: 'PEP',
        datasetId: 'POPESTCHARAGEGROUPS2016',
        tableId: 'PEPAGESEX',
        tableType: 'HIERARCHICAL1',
        displayLabel: 'Annual Estimates of the Resident Population for Selected Age Groups by Sex for the United States, St...',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: '--',
        lastDelivered: 'June 28, 2018 02:48:01 pm'
      }, {
        programId: 'ACS',
        datasetId: 'ACSDT1Y2016',
        tableId: 'B25045',
        tableType: 'HIERARCHICAL1',
        displayLabel: 'TENURE BY VEHICLES AVAILABLE BY AGE OF HOUSEHOLDER',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: '--',
        lastDelivered: 'Dec 19, 2018 09:25:04 am'
      }, {
        programId: 'PEP',
        datasetId: 'POPESTCHARAGEGROUPS2016',
        tableId: 'PEPAGESEX',
        tableType: 'HIERARCHICAL1',
        displayLabel: 'Annual Estimates of the Resident Population for Selected Age Groups by Sex for the United States, St...',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: '--',
        lastDelivered: 'June 28, 2018 02:48:01 pm'
      }, {
        programId: 'ACS',
        datasetId: 'ACSDT1Y2016',
        tableId: 'B25045',
        tableType: 'HIERARCHICAL1',
        displayLabel: 'TENURE BY VEHICLES AVAILABLE BY AGE OF HOUSEHOLDER',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: '--',
        lastDelivered: 'Dec 19, 2018 09:25:04 am'
      },
      {
        programId: 'PEP',
        datasetId: 'POPESTCHARAGEGROUPS2016',
        tableId: 'PEPAGESEX',
        tableType: 'HIERARCHICAL1',
        displayLabel: 'Annual Estimates of the Resident Population for Selected Age Groups by Sex for the United States, St...',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: '--',
        lastDelivered: 'June 28, 2018 02:48:01 pm'
      },
      {
        programId: 'ACS',
        datasetId: 'ACSDT1Y2016',
        tableId: 'B25045',
        tableType: 'HIERARCHICAL1',
        displayLabel: 'TENURE BY VEHICLES AVAILABLE BY AGE OF HOUSEHOLDER',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: '--',
        lastDelivered: 'Dec 19, 2018 09:25:04 am'
      },
      {
        programId: 'PEP',
        datasetId: 'POPESTCHARAGEGROUPS2016',
        tableId: 'PEPAGESEX',
        tableType: 'HIERARCHICAL1',
        displayLabel: 'Annual Estimates of the Resident Population for Selected Age Groups by Sex for the United States, St...',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: '--',
        lastDelivered: 'June 28, 2018 02:48:01 pm'
      }],
    notesList: [{
      programId: 'ACS',
      noteString: 'test1',
      contentsPreview: 'meta testing',
      position: 'header',
      lastUpdatedBy: 'Matthew Curtiss',
      lastUpdated: 'June 19, 2018 09:25:04 am'
    }, {
        programId: 'ACS',
        noteString: 'test2',
        contentsPreview: 'meta testing',
        position: 'header',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: 'June 19, 2018 09:25:04 am'
      }, {
        programId: 'ACS',
        noteString: 'test3',
        contentsPreview: 'meta testing',
        position: 'header',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: 'June 19, 2018 09:25:04 am'
      }, {
        programId: 'ACS',
        noteString: 'test4',
        contentsPreview: 'meta testing',
        position: 'header',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: 'June 19, 2018 09:25:04 am'
      },
      {
        programId: 'ACS',
        noteString: 'test5',
        contentsPreview: 'meta testing',
        position: 'header',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: 'June 19, 2018 09:25:04 am'
      },
      {
        programId: 'ACS',
        noteString: 'test6',
        contentsPreview: 'meta testing',
        position: 'header',
        lastUpdatedBy: 'Matthew Curtiss',
        lastUpdated: 'June 19, 2018 09:25:04 am'
      }],
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
