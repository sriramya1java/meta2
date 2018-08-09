<template>
 <!-- <h5>{{ msg }}, your id is {{ id }}</h5>
  <h1 v-if="id === 'new'">This is create table page</h1>
  <h1 v-else>this is edit table page</h1>-->
  <!--<div>
    <div class="card">
      <div class="card-header">
        <strong class="float-left">Table Metadata</strong>
        <div class="float-right">
          <a href="#">Save</a>
        </div>
      </div>
      <div class="card-body">
        <form>
          <h1>Create Table form</h1>
          <div class="form-group row">
            <div class="col-2 text-right">
              <label class="control-label" for="table_id">Table ID:</label><span>*</span>
            </div>
            <div class="col-4">
              <input v-model="table_id" class="form-control" type="text" id="table_id">
            </div>
            <div class="col-4 text-left">
              <span id="required">* = required</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-2 text-right">
              <label class="control-label" for="program_id">Program ID:</label><span>*</span>
            </div>
            <div class="col-4">
              <select class="form-control" id="program_id">
                <option>Please select a Program</option>
                <option v-for="programs in programsList">{{ programs }}</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-2 text-right">
              <label class="control-label" for="table_type">Table Type:</label><span>*</span>
            </div>
            <div class="col-4">
              <select class="form-control" id="table_type">
                <option>Please select a Table Type</option>
                <option v-for="programs in programsList">{{ programs }}</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-2 text-right">
              <label class="control-label" for="dataset_id">Dataset ID:</label><span>*</span>
            </div>
            <div class="col-4">
              <select class="form-control" id="dataset_id">
                <option>Please select a Dataset</option>
                <option v-for="programs in programsList">{{ programs }}</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-2 text-right">
              <label class="control-label" for="display_label">Display Label:</label><span>*</span>
            </div>
            <div class="col-7">
              <input v-model="display_label" class="form-control" type="text" id="display_label">
            </div>
          </div>
          <div class="form-group row">
            <div class="col-2 text-right">
              <label class="control-label" for="display_desc">Display Description:</label><span>*</span>
            </div>
            <div class="col-7">
              <textarea v-model="display_desc" class="form-control" type="text" id="display_desc" rows="4"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-2 text-right">
              <label class="control-label" for="table-universe">Table Universe:</label><span>*</span>
            </div>
            <div class="col-4">
              <ul>
                <li v-for="n in names" id="table-universe">{{n}}</li>
              </ul>
            </div>
            <div class="col-4">
              <b-btn v-b-modal.modalPrevent>Launch demo modal</b-btn>
              &lt;!&ndash; Modal Component &ndash;&gt;
              <b-modal id="modalPrevent"
                       ref="modal"
                       title="Submit your name"
                       @ok="handleOk"
                       @shown="clearName">
                <form @submit.stop.prevent="handleSubmit">
                  <b-form-input type="text"
                                placeholder="Select a table universe"
                                v-model="name"></b-form-input>
                </form>
              </b-modal>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>-->
  <v-container fluid>
    <h3 class="text-left">Table Metadata</h3>
    <v-tabs color="grey" dark slider-color="white" class="pt-4">
      <v-tab ripple>
        Basic Metadata
      </v-tab>
      <v-tab ripple>
        Table Notes
      </v-tab>
      <v-tab ripple>
        Dimensions
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <table-basic-metadata></table-basic-metadata>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text><table-notes></table-notes></v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>contents for item3 go here</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <!--<router-view/>-->
  </v-container>
</template>

<script>
  import router from '../../router/index'
  import TableBasicMetadata from './TableBasicMetadata.vue'
  import TableNotes from './TableNotes.vue'

  export default {
    components: {
      TableNotes,
      TableBasicMetadata},
    name: 'CreateEditTable',
    data () {
      return {
        debug: false,
        id: 0,
        msg: 'META2',
        programsList: ['ACS', 'PEP', 'ABC'],
        name: '',
        names: []
      }
    },
    watch: {
      '$route' (to, from) {
        this.id = to.params.id
      }
    },
    created () {
      this.id = this.$route.params.tableString
    },
    methods: {
      navigate () {
        router.go(-1)
      },
      clearName () {
        this.name = ''
      },
      handleOk (evt) {
        // Prevent modal from closing
        evt.preventDefault()
        if (!this.name) {
          alert('Please enter your name')
        } else {
          this.handleSubmit()
        }
      },
      handleSubmit () {
        this.names.push(this.name)
        this.clearName()
        this.$refs.modal.hide()
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  span {
    color: #ff0000;
  }
  .col-7 {
    float: left;
  }
</style>
