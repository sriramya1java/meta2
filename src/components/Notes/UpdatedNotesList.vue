<template>
  <div>
    <div class="card" v-if="pathVal === 'UpdatedNotesList'">
      <div class="card-body">
        <div class="row">
          <div id="create-note">
            <router-link :to="{ name: 'editnote', params: { noteString: 'new' }, query: { debug: true }}">
              <button type="button" class="btn btn-primary float-left" noteString="new">Create a New Note ></button>
            </router-link>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="row" style="padding-top: 6px;">
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
      /* as of now router-link is not working in ag-grid-vue component, left it for in future use, if the bug is fixed. */
      'edit-component': {
        router,
        template: '<router-link to="/editnote">edit table</router-link>'
      },
      /**/
      'delete-component': {
        template: '<a @click="deleteNote"><i class="fa fa-trash"></i></a>',
        methods: {
          deleteNote () {
            confirm('Do you want to delete the note?')
          }
        }
      }
    },
    methods: {
      createColDefs () {
        return [
          {headerName: 'Edit', field: 'edit', cellRenderer: noteCellRenderer, suppressSorting: true, suppressMenu: true, width: 100},
          {headerName: 'Program ID', field: 'programId', icons: {sortAscending: '<i class="fa fa-sort-alpha-asc"/>', sortDescending: '<i class="fa fa-sort-alpha-desc"/>'}, sort: 'asc'},
          {headerName: 'Note Title', field: 'noteString'},
          {headerName: 'Contents Preview', field: 'contentsPreview'},
          {headerName: 'Position', field: 'c', width: 100},
          {headerName: 'Last Updated By', field: 'lastUpdatedBy'},
          {headerName: 'Last Updated', field: 'lastUpdated'},
          {headerName: 'Delete', field: 'delete', cellRendererFramework: 'delete-component', suppressSorting: true, width: 100, cellStyle: {textAlign: 'center'}}
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
          noteString: 'test1',
          contentsPreview: 'meta testing',
          position: 'header',
          lastUpdatedBy: 'Matthew Curtiss',
          lastUpdated: 'June 19, 2018 09:25:04 am'
        },
        {
          programId: 'ACS',
          noteString: 'test2',
          contentsPreview: 'meta testing',
          position: 'header',
          lastUpdatedBy: 'Matthew Curtiss',
          lastUpdated: 'June 19, 2018 09:25:04 am'
        },
        {
          programId: 'ACS',
          noteString: 'test3',
          contentsPreview: 'meta testing',
          position: 'header',
          lastUpdatedBy: 'Matthew Curtiss',
          lastUpdated: 'June 19, 2018 09:25:04 am'
        },
        {
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
    fetchNotes () {
      this.$http.get('api/programs/ALL/notes')
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
  }

  function noteCellRenderer (params) {
    if (params !== undefined && params !== null) {
      let aTag = document.createElement('a')
      let abc = JSON.stringify(params.data)
      aTag.setAttribute('href', '#/updatedNotesList/editnote/' + abc)
      aTag.innerHTML = '<i class="fa fa-edit">'
      return aTag
    }
  }
</script>
<style scoped>
  #create-note {
    padding-left: 7px;
  }
</style>
