<template>
  <div id="app2">
    <div class="card" v-if="pathVal === 'UpdatedTablesList'">
      <div class="card-body">
        <div class="row">
          <div class="col-md-12">
            <router-link :to="{ name: 'edittable', params: { tableString: 'new' }, query: { debug: true }}">
              <button type="button" class="btn btn-primary float-left" tableString="new">Create a New Table ></button>
            </router-link>
            <div class="clearfix"></div>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-md-12">
            <table class="table table-bordered table-striped">
              <thead class="thead-light">
              <tr>
                <th scope="col">Edit</th>
                <th scope="col">Program ID</th>
                <th scope="col">Dataset ID</th>
                <th scope="col">Table ID</th>
                <th scope="col">Table Type</th>
                <th scope="col">Display Label</th>
                <th scope="col">Last Updated By</th>
                <th scope="col">Last Updated</th>
                <th scope="col">Last Delivered</th>
                <th scope="col">Delete</th>
                <th scope="col">Deliver&nbsp;<input type="checkbox" v-model="selectAll" @click="select"></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="tableItem in tables">
                <th scope="row">
                  <router-link :to="{ name: 'edittable', params: { tableString: tableItem.tableId }, query: { debug: true }}">
                    <i class="fa fa-edit"></i>
                  </router-link>
                </th>
                <td>{{ tableItem.programId }}</td>
                <td>{{ tableItem.datasetId }}</td>
                <td>{{ tableItem.tableId }}</td>
                <td>{{ tableItem.tableType }}</td>
                <td>{{ tableItem.displayLabel }}</td>
                <td>{{ tableItem.lastUpdatdeBy }}</td>
                <td>{{ tableItem.lastUpdated }}</td>
                <td>{{ tableItem.lastDelivered }}</td>
                <td><i class="fa fa-trash" v-bind:id="tableItem.tableId" @click='iconClick'></i> </td>
                <td><input type="checkbox" v-model="selected" :value="tableItem.tableId"></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="clearfix"></div>
        <button type="button" class="btn btn-primary float-right" :disabled = isDisabled @click='fileDelivery'>Create Delivery File</button>
      </div>
    </div>
    <span v-if="pathVal === 'edittable'">
      <router-view></router-view>
    </span>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tables: [
          {
            edit: 'icon',
            programId: 'MTA1',
            datasetId: '2018',
            tableId: 'deevi1',
            tableType: 'detailed table',
            displayLabel: 'this is test table',
            lastUpdatdeBy: 'deevi',
            lastUpdated: 'june 16, 2018',
            lastDelivered: '--',
            delete: 'icon'
          },
          {
            edit: 'icon',
            programId: 'MTA2',
            datasetId: '2018',
            tableId: 'deevi2',
            tableType: 'detailed table',
            displayLabel: 'this is test table',
            lastUpdatdeBy: 'deevi',
            lastUpdated: 'june 16, 2018',
            lastDelivered: '--',
            delete: 'icon'
          },
          {
            edit: 'icon',
            programId: 'MTA3',
            datasetId: '2018',
            tableId: 'deevi3',
            tableType: 'detailed table',
            displayLabel: 'this is test table',
            lastUpdatdeBy: 'deevi',
            lastUpdated: 'june 16, 2018',
            lastDelivered: '--',
            delete: 'icon'
          }
        ],
        tableId: null,
        selected: [],
        selectAll: false,
        tablesResponse: [],
        pathVal: ''
      }
    },
    computed: {
      isDisabled: function () {
        if (this.selected.length === 0) {
          console.log(this.selected.length)
          return true
        } else {
          console.log(this.selected.length)
          return false
        }
      },
      crumbs () {
        this.pathVal = this.$route.name
        console.log(this.pathVal)
      }
    },
    methods: {
      iconClick: function (event) {
        // `event` is the native DOM event
        if (event) {
          confirm('Do you want to delete the table ' + event.target.id + ' ?')
          this.tableId = event.target.id
        }
      },
      select () {
        this.selected = []
        if (!this.selectAll) {
          for (let i in this.tables) {
            this.selected.push(this.tables[i].tableId)
          }
          console.log(this.selected)
        }
      },
      fileDelivery () {
        confirm('Do you want to generate XML for the selected tables? The selected tables are ' + this.selected)
      },
      fetchTables () {
        this.$http.get('')
          .then(response => {
            const data = response.json()
            console.log(data)
          })
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
</script>
<style>
  .card {
    border-color: #808080;
  }
</style>
