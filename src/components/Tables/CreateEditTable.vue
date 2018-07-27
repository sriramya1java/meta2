<template>
<div class="hello">
  <h5>{{ msg }}, your id is {{ id }}</h5>
  <h1 v-if="id === 'new'">This is create table page</h1>
  <h1 v-else>this is edit table page</h1>
  <!--<div>
    <div class="card">
      <div class="card-header">
        <strong class="float-left">Table Metadata</strong>
        <div class="float-right">
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
      <div class="card-body">
        <div class="container-fluid" id="define_table">

          <div class="row">
            <div class="col-2 text-right">
              <label for="table_id">Table ID: <span>*</span></label>
            </div>
            <div class="col-7">
              <input id="table_id" type="text">
              <span id="required">(* = required)</span>
            </div>
          </div>

          <div class="row">
            <div class="col-2 text-right">
              <label for="program_id">Program ID: <span>*</span></label>
            </div>
            <div class="col-7">
              <select id="program_id">
                <option>&#45;&#45; select a program &#45;&#45;</option>
                <option>ACS</option>
                <option>PEP</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-2 text-right">
              <label for="table_type">Table Type: <span>*</span></label>
            </div>
            <div class="col-7">
              <select id="table_type">
                <option>&#45;&#45; select a table type &#45;&#45;</option>
                <option>Detailed Table</option>
                <option>Geographic Comparison Table</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-2 text-right">
              <label for="dataset_id">Dataset ID: <span>*</span></label>
            </div>
            <div class="col-7">
              <select id="dataset_id">
                <option>&#45;&#45; select a dataset id &#45;&#45;</option>
                <option>PEP001</option>
                <option>PEP002</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-2 text-right">
              <label for="display_label">Display Label: <span>*</span></label>
            </div>
            <div class="col-9">
              <input id="display_label" type="text">
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-2 text-right">
              <label for="display_desc">Display Description:</label>
            </div>
            <div class="col-9">
              <textarea id="display_desc" rows="4"></textarea>
            </div>
          </div>

          <div class="row align-items-center mt-3">
            <div class="col-2 text-right">
              <label>Table Universe:</label>
            </div>
            <div class="col-9">
              <span>&#45;&#45; no universe selected &#45;&#45;</span>
              <button type="button" class="btn btn-primary btn-icon ml-4" disabled><i class="fas fa-times-circle"></i></button>
              <button type="button" class="btn btn-primary btn-icon ml-2"><i class="fas fa-external-link-square-alt"></i></button>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-2 text-right">
              <label>Header Notes:</label>
            </div>
            <div class="col-4">
              <select size="6" multiple>
                <option>Headnote 2</option>
                <option>Headnote 3</option>
                <option>Headnote 4</option>
                <option>Headnote 5</option>
                <option>Headnote 6</option>
                <option>Headnote 7</option>
                <option>Headnote 8</option>
              </select>
            </div>
            <div class="col-auto text-center px-0">
              <button type="button" class="btn btn-primary btn-icon mt-3" disabled><i class="fas fa-chevron-right"></i></button><br>
              <button type="button" class="btn btn-primary btn-icon mt-2" disabled><i class="fas fa-chevron-left"></i></button>
            </div>
            <div class="col-4">
              <select size="6" multiple>
                <option>Headnote 1</option>
              </select>
            </div>
            <div class="col-auto text-center px-0">
              <button type="button" class="btn btn-primary btn-icon mt-3" disabled><i class="fas fa-chevron-up"></i></button><br>
              <button type="button" class="btn btn-primary btn-icon mt-2" disabled><i class="fas fa-chevron-down"></i></button>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-2 text-right">
              <label>Footer Notes:</label>
            </div>
            <div class="col-4">
              <select size="6" multiple>
                <option>Footnote 2</option>
                <option selected>Footnote 3</option>
                <option>Footnote 4</option>
                <option>Footnote 5</option>
                <option>Footnote 6</option>
                <option>Footnote 7</option>
                <option>Footnote 8</option>
              </select>
              <p class="small text-right"><a href="javascript:;">see all notes &raquo;</a></p>
            </div>
            <div class="col-auto text-center px-0">
              <button type="button" class="btn btn-primary btn-icon mt-3"><i class="fas fa-chevron-right"></i></button><br>
              <button type="button" class="btn btn-primary btn-icon mt-2"><i class="fas fa-chevron-left"></i></button>
            </div>
            <div class="col-4">
              <select size="6" multiple>
                <option selected>Footnote 1</option>
              </select>
            </div>
            <div class="col-auto text-center px-0">
              <button type="button" class="btn btn-primary btn-icon mt-3" disabled><i class="fas fa-chevron-up"></i></button><br>
              <button type="button" class="btn btn-primary btn-icon mt-2" disabled><i class="fas fa-chevron-down"></i></button>
            </div>
          </div>

          <div class="row mt-3">&lt;!&ndash; 'dimensions' row &ndash;&gt;
            <div class="col-2 text-right">
              <label class="mt-3">Dimensions:</label>
            </div>
            <div class="col-4">
              <div class="small">available dimensions:</div>
              <select size="19" multiple>
              </select>
            </div>

            <div class="col-5">
              <div class="row">
                <div class="col-auto-2 text-center px-0 mt-3">
                  <button type="button" class="btn btn-primary btn-icon mt-3" disabled><i class="fas fa-chevron-right"></i></button><br>
                  <button type="button" class="btn btn-primary btn-icon mt-2" disabled><i class="fas fa-chevron-left"></i></button>
                </div>
                <div class="col-8">
                  <div class="small">vertical axis:</div>
                  <select size="5" multiple>

                  </select>
                </div>
                <div class="col-auto-2 text-center px-0 mt-3">
                  <button type="button" class="btn btn-primary btn-icon mt-3" disabled><i class="fas fa-chevron-up"></i></button><br>
                  <button type="button" class="btn btn-primary btn-icon mt-2" disabled><i class="fas fa-chevron-down"></i></button>
                </div>
              </div>&lt;!&ndash; end row &ndash;&gt;

              <div class="row">
                <div class="col-auto-2 text-center px-0 mt-3">
                  <button type="button" class="btn btn-primary btn-icon mt-3" disabled><i class="fas fa-chevron-right"></i></button><br>
                  <button type="button" class="btn btn-primary btn-icon mt-2" disabled><i class="fas fa-chevron-left"></i></button>
                </div>
                <div class="col-8">
                  <div class="small">horizontal axis:</div>
                  <select size="5" multiple>

                  </select>
                </div>
                <div class="col-auto-2 text-center px-0 mt-3">
                  <button type="button" class="btn btn-primary btn-icon mt-3" disabled><i class="fas fa-chevron-up"></i></button><br>
                  <button type="button" class="btn btn-primary btn-icon mt-2" disabled><i class="fas fa-chevron-down"></i></button>
                </div>
              </div>&lt;!&ndash; end row &ndash;&gt;

              <div class="row">
                <div class="col-auto-2 text-center px-0 mt-3">
                  <button type="button" class="btn btn-primary btn-icon mt-3" disabled><i class="fas fa-chevron-right"></i></button><br>
                  <button type="button" class="btn btn-primary btn-icon mt-2" disabled><i class="fas fa-chevron-left"></i></button>
                </div>
                <div class="col-8">
                  <div class="small">outside of table:</div>
                  <select size="5" multiple>

                  </select>
                </div>
                <div class="col-auto-2 text-center px-0 mt-3">
                  <button type="button" class="btn btn-primary btn-icon mt-3" disabled><i class="fas fa-chevron-up"></i></button><br>
                  <button type="button" class="btn btn-primary btn-icon mt-2" disabled><i class="fas fa-chevron-down"></i></button>
                </div>
              </div>&lt;!&ndash; end row &ndash;&gt;
            </div>
            <div id="category_instruction" class="col-1 small mx-0 px-0" hidden>
              Double-click a selected dimension
              to view and modify the dimension's
              categories
            </div>
          </div>&lt;!&ndash; end of 'dimensions' row &ndash;&gt;
        </div>
      </div>
    </div>
  </div>-->
  <div>
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
            <div class="col-4" style="display: inline">
              <input v-model="table_id" class="form-control" type="text" id="table_id">
              <span id="required">(* = required)</span>
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
              <!-- Modal Component -->
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
  </div>
</div>
</template>

<script>
  import router from '../../router/index'

  export default {
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
      console.log(JSON.parse(this.id))
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
