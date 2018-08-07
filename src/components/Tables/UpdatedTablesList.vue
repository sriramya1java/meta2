<template>
  <div>
    <v-card v-if="pathVal === 'UpdatedTablesList'">
      <v-flex xs12 text-left>
        <v-btn flat color="info" :to="{ name: 'edittable', params: { tableString: 'new' }, query: { debug: true }}">Create a New Table</v-btn>
      </v-flex>
      <v-flex xs12 text-center class="pa-2">
        <ag-grid-vue style="width: 100%; height: 200px;"
                     class="ag-theme-balham"
                     :gridOptions="gridOptions"
                     :rowDataChanged="onRowDataChanged"
                     :rowSelected="onRowSelected"
                     :rowData="rowData">
        </ag-grid-vue>
      </v-flex>
      <v-flex xs12 text-right>
        <v-btn flat color="info"
               :disabled="!checked" @click='fileDelivery'>Create Delivery File</v-btn>
      </v-flex>
    </v-card>
    <router-view></router-view>
    <!-- <div  class="card" v-if="pathVal === 'UpdatedTablesList'">
       <div class="card-body">
         <div class="row">
           <div id="create-table">
             <router-link :to="{ name: 'edittable', params: { tableString: 'new' }, query: { debug: true }}">
               <button type="button" class="btn btn-primary float-left" tableString="new">Create a New Table ></button>
             </router-link>
           </div>
         </div>
         <div class="row" style="padding-top: 6px;">
           <div class="col-md-12">
             <ag-grid-vue style="width: 100%; height: 200px;"
                          class="ag-theme-balham"
                          :gridOptions="gridOptions"
                          :rowDataChanged="onRowDataChanged"
                          :rowSelected="onRowSelected"
                          :rowData="rowData">
             </ag-grid-vue>
           </div>
         </div>
         <div class="clearfix"></div>
         <div id="create-delivery" class="row float-right">
           <button type="button" class="btn btn-primary" :disabled="!checked" @click='fileDelivery'>Create Delivery File</button>
         </div>
       </div>
     </div>
     <span v-if="pathVal === 'edittable'">
       <router-view></router-view>
     </span> -->
  </div>
</template>
<script>
  import {AgGridVue} from 'ag-grid-vue'
  import Vue from 'vue'

  export default {
    name: 'App',
    data () {
      return {
        columnDefs: null,
        rowData: null,
        gridOptions: null,
        tableId: null,
        tablesResponse: [],
        pathVal: '',
        checked: false
      }
    },
    components: {
      'ag-grid-vue': AgGridVue,
      'delete-component': {
        template: '<a @click="deleteTable"><i class="fa fa-trash"></i></a>',
        methods: {
          deleteTable () {
            confirm('Do you want to delete the table')
          }
        }
      }
    },
    methods: {
      createColDefs () {
        return [
          {headerName: 'Edit', field: 'edit', cellRenderer: tableCellRenderer, suppressMenu: true},
          {headerName: 'Program ID', cellStyle: {textAlign: 'left'}, field: 'programId', icons: {sortAscending: '<i class="fa fa-sort-alpha-asc"/>', sortDescending: '<i class="fa fa-sort-alpha-desc"/>'}, sort: 'asc'},
          {headerName: 'Dataset ID', field: 'datasetId', cellStyle: {textAlign: 'left'}, icons: {sortAscending: '<i class="fa fa-sort-alpha-asc"/>', sortDescending: '<i class="fa fa-sort-alpha-desc"/>'}},
          {headerName: 'Table ID', field: 'tableId', cellStyle: {textAlign: 'left'}, icons: {sortAscending: '<i class="fa fa-sort-alpha-asc"/>', sortDescending: '<i class="fa fa-sort-alpha-desc"/>'}},
          {headerName: 'Table Type', field: 'tableType', cellStyle: {textAlign: 'left'}, icons: {sortAscending: '<i class="fa fa-sort-alpha-asc"/>', sortDescending: '<i class="fa fa-sort-alpha-desc"/>'}},
          {headerName: 'Display Label', field: 'displayLabel', cellStyle: {textAlign: 'left'}, icons: {sortAscending: '<i class="fa fa-sort-alpha-asc"/>', sortDescending: '<i class="fa fa-sort-alpha-desc"/>'}},
          {headerName: 'Last Updated By', field: 'lastUpdatedBy', cellStyle: {textAlign: 'left'}, icons: {sortAscending: '<i class="fa fa-sort-alpha-asc"/>', sortDescending: '<i class="fa fa-sort-alpha-desc"/>'}},
          {headerName: 'Last Updated', field: 'lastUpdated', cellStyle: {textAlign: 'left'}},
          {headerName: 'Last Delivered', field: 'lastDelivered', cellStyle: {textAlign: 'left'}},
          {headerName: 'Delete', field: 'delete', cellRenderer: 'delete-component', suppressSorting: true, cellStyle: {textAlign: 'center'}},
          {headerName: 'Deliver', field: 'deliver', suppressSorting: true, checkboxSelection: true, headerCheckboxSelection: true}
        ]
      },
      onRowDataChanged () {
        Vue.nextTick(() => {
          this.gridOptions.api.sizeColumnsToFit()
        })
      },
      onRowSelected () {
        if (this.gridOptions.api.getSelectedRows().length > 0) {
          console.log(this.gridOptions.api.getSelectedRows().length)
          this.checked = true
        } else {
          console.log(this.gridOptions.api.getSelectedRows().length)
          this.checked = false
        }
      },
      fileDelivery () {
        let tableValues = []
        this.gridOptions.api.getSelectedRows().forEach(x => {
          tableValues.push(x.tableId)
        })
        confirm('Do you want to generate XML for the selected tables? The selected tables are ' + tableValues)
      },
      iconClick (val) {
        // `event` is the native DOM event
        console.log(val)
      },
      fetchTables () {
        this.$http.get('api/datasets/ALL/tables')
          .then(response => {
            return response.json()
          })
          .then(data => {
            this.rowData = data
            console.log(this.rowData)
          }, (error) => {
            console.log('printing error for http call')
            console.log(error.status)
          })
      }
    },
    created () {
      this.gridOptions = {
        enableColResize: true,
        enableSorting: true,
        sortingOrder: ['asc', 'desc'],
        rowSelection: 'multiple',
        suppressRowClickSelection: true,
        columnDefs: this.createColDefs(),
        onGridReady: function (params) {
          params.api.sizeColumnsToFit()
        }
      }
      this.rowData = [
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
        }
      ]
    },
    computed: {
      crumbs () {
        this.pathVal = this.$route.name
      }
    },
    watch: {
      crumbs () {
      }
    },
    beforeCreate: function () {
      console.log(this.$baseUrl)
    }
  }
  function tableCellRenderer (params) {
    if (params !== undefined && params !== null) {
      let aTag = document.createElement('a')
      let abc = JSON.stringify(params.data)
      aTag.setAttribute('href', '#/edittable/' + abc)
      aTag.innerHTML = '<i class="fa fa-edit">'
      return aTag
    }
  }
</script>
<style>
  button:disabled {
    cursor: not-allowed;
  }
  #create-table {
    padding-left: 7px;
  }
  #create-delivery {
    padding-right: 7px;
  }
</style>
