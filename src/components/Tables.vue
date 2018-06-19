<template>
  <div class="container" id="app1">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-12">
            <button type="button" class="btn btn-primary float-left">Create a New Table ></button>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <table class="table table-bordered">
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
                <th scope="col">Deliver&nbsp;<input type="checkbox" @click='selectAll()'></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="tableItem in tables">
                <th scope="row">{{ tableItem.edit }}</th>
                <td>{{ tableItem.programId }}</td>
                <td>{{ tableItem.datasetId }}</td>
                <td>{{ tableItem.tableId }}</td>
                <td>{{ tableItem.tableType }}</td>
                <td>{{ tableItem.displayLabel }}</td>
                <td>{{ tableItem.lastUpdatdeBy }}</td>
                <td>{{ tableItem.lastUpdated }}</td>
                <td>{{ tableItem.lastDelivered }}</td>
                <td><i class="fa fa-trash"></i> </td>
                <td><input type="checkbox"
                               v-model="selectedAll"></td>
              </tr>
              <!--<tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat<input type="checkbox"
                               v-model="selectedAll"></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter<input type="checkbox"
                                   v-model="selectedAll"></td>
              </tr>-->
              </tbody>
            </table>
          </div>
        </div>
        <div class="clearfix"></div>
        <button type="button" class="btn btn-primary float-right">Create Delivery File</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tables: [
          {
            edit: 'icon',
            programId: 'MTA',
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
            programId: 'MTA',
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
            programId: 'MTA',
            datasetId: '2018',
            tableId: 'deevi1',
            tableType: 'detailed table',
            displayLabel: 'this is test table',
            lastUpdatdeBy: 'deevi',
            lastUpdated: 'june 16, 2018',
            lastDelivered: '--',
            delete: 'icon'
          }
        ]
      }
    }
  }
</script>
