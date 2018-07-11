<template>
  <div>
    <div class="card" v-if="pathVal === 'UpdatedNotesList'">
      <div class="card-body">
        <div class="row">
          <div class="col-md-12">
            <router-link :to="{ name: 'editnote', params: { noteString: 'new' }, query: { debug: true }}">
              <button type="button" class="btn btn-primary float-left" noteString="new">Create a New Note ></button>
            </router-link>
            <div class="clearfix"></div>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-md-12">
            <ag-grid-vue style="width: 100%; height: 200px;"
                         class="ag-theme-balham"
                         :gridOptions="gridOptions"
                         :rowDataChanged="onRowDataChanged"
                         :rowData="rowData">
            </ag-grid-vue>
          </div>
        </div>
      </div>
    </div>
    <span v-if="pathVal === 'editnote'">
        <router-view></router-view>
    </span>
  </div>
</template>
<script>
  import {AgGridVue} from 'ag-grid-vue'
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  const router = new VueRouter()
  export default {
    data () {
      return {
        columnDefs: null,
        rowData: null,
        gridOptions: null,
        tableId: null,
        pathVal: '',
        noteTitle: null
      }
    },
    components: {
      'ag-grid-vue': AgGridVue,
      'edit-component': {
        router,
        template: '<router-link to="/edittable">edit table</router-link>'
      },
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
          {headerName: 'Edit', field: 'edit', cellRenderer: noteCellRenderer, suppressSorting: true},
          {headerName: 'Program ID', field: 'programId', icons: {sortAscending: '<i class="fa fa-sort-alpha-asc"/>', sortDescending: '<i class="fa fa-sort-alpha-desc"/>'}, sort: 'asc'},
          {headerName: 'Note Title', field: 'noteString'},
          {headerName: 'Contents Preview', field: 'contentsPreview'},
          {headerName: 'Position', field: 'c'},
          {headerName: 'Last Updated By', field: 'lastUpdatedBy'},
          {headerName: 'Last Updated', field: 'lastUpdated'},
          {headerName: 'Delete', field: 'delete', cellRendererFramework: 'delete-component', suppressSorting: true}
        ]
      },
      onRowDataChanged () {
        Vue.nextTick(() => {
          this.gridOptions.api.sizeColumnsToFit()
        })
      },
      iconClick: function (event) {
        // `event` is the native DOM event
        if (event) {
          confirm('Do you want to delete the note ' + event.target.id + ' ?')
          this.noteTitle = event.target.id
        }
      },
      fetchNotes () { // used to fetch all the notes when the rest api is turned on.
        this.$http.get('api/programs/ALL/notes')
          .then(response => {
            const data = response.json()
            console.log(data)
          })
      }
    },
    created () {
      this.gridOptions = {
        enableColResize: true,
        enableSorting: true,
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
          noteString: 'test',
          contentsPreview: 'meta testing',
          position: 'header',
          lastUpdatedBy: 'Matthew Curtiss',
          lastUpdated: 'June 19, 2018 09:25:04 am'
        },
        {
          programId: 'ACS',
          noteString: 'test',
          contentsPreview: 'meta testing',
          position: 'header',
          lastUpdatedBy: 'Matthew Curtiss',
          lastUpdated: 'June 19, 2018 09:25:04 am'
        },
        {
          programId: 'ACS',
          noteString: 'test',
          contentsPreview: 'meta testing',
          position: 'header',
          lastUpdatedBy: 'Matthew Curtiss',
          lastUpdated: 'June 19, 2018 09:25:04 am'
        },
        {
          programId: 'ACS',
          noteString: 'test',
          contentsPreview: 'meta testing',
          position: 'header',
          lastUpdatedBy: 'Matthew Curtiss',
          lastUpdated: 'June 19, 2018 09:25:04 am'
        }
      ]
    },
    computed: {
      crumbs () {
        this.pathVal = this.$route.name
        console.log(this.pathVal)
      }
    },
    watch: {
      crumbs () {
      }
    },
    fetchNotes () {
      this.$http.get('api/programs/ALL/notes')
        .then(response => {
          const data = response.json()
          console.log(data)
        })
    }
  }
  function noteCellRenderer (params) {
    console.log(params.data.noteString)
    console.log(params.data)
    let aTag = document.createElement('a')
    let abc = JSON.stringify(params.data)
    aTag.setAttribute('href', '#/editnote/' + abc)
    aTag.innerHTML = '<i class="fa fa-edit">'
    console.log(aTag)
    return aTag
  }
</script>
