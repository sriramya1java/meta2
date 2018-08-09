<template>
  <v-form>
    <v-layout row wrap align-center>
      <v-flex xs2>
        <v-subheader>Table ID: <span>*</span></v-subheader>
      </v-flex>
      <v-flex xs4>
        <v-text-field
          label="Table ID"
          id="tableName"
        required></v-text-field>
      </v-flex>
      <v-flex xs6>
        <span>(* = required)</span>
      </v-flex>
      <v-flex xs2>
        <v-subheader>Program ID: <span>*</span></v-subheader>
      </v-flex>
      <v-flex xs10>
        <v-select
          :items="programs"
          label="ProgramID"></v-select>
      </v-flex>
      <v-flex xs2>
        <v-subheader>Table Type: <span>*</span></v-subheader>
      </v-flex>
      <v-flex xs10>
        <v-select
          :items="tableTypes"
          label="Table Type"></v-select>
      </v-flex>
      <v-flex xs2>
        <v-subheader>Dataset ID: <span>*</span></v-subheader>
      </v-flex>
      <v-flex xs10>
        <v-select
          :items="datasets"
          label="Dataset ID"></v-select>
      </v-flex>
      <v-flex xs2>
        <v-subheader>Display Label: <span>*</span></v-subheader>
      </v-flex>
      <v-flex xs10>
        <v-text-field
          label="Diaplay Label"></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-subheader>Display Description: </v-subheader>
      </v-flex>
      <v-flex xs10>
        <v-textarea
          label="Enter some description."></v-textarea>
      </v-flex>
      <v-flex xs2>
        <v-subheader>Table Universe: </v-subheader>
      </v-flex>
      <v-flex xs4>
        <v-text-field
          label="Table Universe"
          v-model="tableUniverse"></v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-btn
          slot="activator"
          color="grey lighten-2"
          dark
          icon
          @click="clearTableUniverse()">
          <v-icon>close</v-icon>
        </v-btn>
        <v-dialog
          v-model="dialog"
          width="1000">
          <v-btn
            slot="activator"
            color="grey lighten-2"
            dark
            icon>
            <v-icon>call_made</v-icon>
          </v-btn>
          <v-card>
            <v-card-title
              class="headline grey lighten-2"
              primary-title>
              Table Universe
              <v-spacer></v-spacer>
              <v-icon @click="dialog = false">close</v-icon>
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="tableUniverse"></v-text-field>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                flat @click="dialog = false">okay
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
      <v-flex xs12 text-right>
        <v-btn>Save</v-btn>
      </v-flex>
      <!--<router-view></router-view>-->
    </v-layout>
  </v-form>
</template>
<script>
  import Vuex from 'vuex'
  export default {
    name: 'TableBasicMetadata',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        dialog: false
      }
    },
    computed: {
      programs: {
        get () {
          console.log(this.$store.state.programs)
          return this.$store.state.programs
        }
      },
      tableTypes: {
        get () {
          return this.$store.state.tableTypes
        }
      },
      datasets: {
        get () {
          return this.$store.state.datasets
        }
      },
      tableUniverse: {
        get () {
          return this.$store.state.tableUniverse
        },
        set (tableUniverse) {
          console.log('this is table universe setter')
          console.log(tableUniverse)
          this.$store.dispatch('updateTableUniverse', tableUniverse)
        }
      }
    },
    methods: {
      ...Vuex.mapActions({
        clearTableUniverse: function () {
          console.log('dispatch action execution start')
          this.$store.dispatch('updateTableUniverse', '')
        }
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    color:#ff0000;
  }
</style>
