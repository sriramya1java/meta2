<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-12">
            <router-link :to="{ name: 'CreateEditNote', params: { noteString: 'new' }, query: { debug: true }}">
              <button type="button" class="btn btn-primary float-left">Create a New Note ></button>
            </router-link>
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
                <th scope="col">Note Title</th>
                <th scope="col">Contents Preview</th>
                <th scope="col">Position</th>
                <th scope="col">Last Updated By</th>
                <th scope="col">Last Updated</th>
                <th scope="col">Delete</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="noteItem in notes">
                <th scope="row">
                  <router-link :to="{ name: 'CreateEditTable', params: { noteString: getNoteTitle }, query: { debug: true }}">
                    <i class="fa fa-edit" v-bind:id="noteItem.noteTitle"></i>
                  </router-link>
                </th>
                <td>{{ noteItem.programId }}</td>
                <td>{{ noteItem.noteTitle }}</td>
                <td>{{ noteItem.contentsPreview }}</td>
                <td>{{ noteItem.position }}</td>
                <td>{{ noteItem.lastUpdatdeBy }}</td>
                <td>{{ noteItem.lastUpdated }}</td>
                <td><i class="fa fa-trash" v-bind:id="noteItem.noteTitle" @click='iconClick'></i> </td>
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
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        notes: [
          {
            programId: 'MTA',
            noteTitle: 'meta testing',
            contentsPreview: 'meta testing 1',
            position: 'header',
            displayLabel: 'this is test table',
            lastUpdatdeBy: 'deevi',
            lastUpdated: 'june 16, 2018'
          },
          {
            programId: 'MTA',
            noteTitle: 'meta testing 2',
            contentsPreview: 'meta testing',
            position: 'header',
            displayLabel: 'this is test table',
            lastUpdatdeBy: 'deevi',
            lastUpdated: 'june 16, 2018'
          },
          {
            programId: 'MTA',
            noteTitle: 'meta testing 3',
            contentsPreview: 'meta testing',
            position: 'header',
            displayLabel: 'this is test table',
            lastUpdatdeBy: 'deevi',
            lastUpdated: 'june 16, 2018'
          }
        ]
      }
    },
    computed: {
      getNoteTitle: function () {
        console.log()
        return this.notes.noteTitle
      }

    },
    methods: {
      iconClick: function (event) {
        // `event` is the native DOM event
        if (event) {
          confirm('Do you want to delete the note ' + event.target.id + ' ?')
        }
      }
    }
  }
</script>
