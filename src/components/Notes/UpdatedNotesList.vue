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
                  <router-link :to="{ name: 'editnote', params: { noteString: noteItem.noteTitle }, query: { debug: true }}">
                    <i class="fa fa-edit" v-bind:id="noteItem.noteTitle"></i>
                  </router-link>
                </th>
                <td>{{ noteItem.programId }}</td>
                <td>{{ noteItem.noteTitle }}</td>
                <td>{{ noteItem.contentsPreview }}</td>
                <td>{{ noteItem.position }}</td>
                <td>{{ noteItem.lastUpdatdeBy }}</td>
                <td>{{ noteItem.lastUpdated }}</td>
                <td><i class="fa fa-trash" v-bind:id="noteItem.noteTitle" style="cursor: pointer" @click='iconClick'></i> </td>
              </tr>
              </tbody>
            </table>
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
        ],
        noteTitle: null,
        pathVal: ''
      }
    },
    methods: {
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
</script>
