<template>
  <v-layout row wrap align-center>
    <v-flex xs3 text-left>
      <img src="../../assets/meta2logo.png">
    </v-flex>
    <v-flex xs1>
        <v-btn
          color="dark"
          flat
          value="table"
          to="/">
          <span>Tables</span>
        </v-btn>
    </v-flex>
    <v-flex xs1>
      <v-btn
        color="dark"
        flat
        value="notes"
        to="/updatedNotesList">
        <span>Notes</span>
      </v-btn>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex xs2 text-right>
      <v-subheader
        color="dark"
        flat
        value="person">
        Welcome: {{ user }}
        <v-icon>person</v-icon>
      </v-subheader>
    </v-flex>
    <v-flex xs2>
        <a href="https://vuejs.org/" onclick="return confirm('Do you want to logout?')">Logout</a>
        <v-icon>logout</v-icon>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    name: 'Meta2Header',
    data () {
      return {
        user: 'DEEVI001', // comment this out when the api is turned on.
        userObj: ''
      }
    },
    methods: {
      /* used to get the user dynamically when the api is turned on. handles the user api response, if the object is not empty
       * fetches the id from the user object and displays it as username in the header component. */
      fetchUser () {
        this.$http.get('/userinfo')
          .then(response => {
            console.log(response.status)
            return response.json()
          })
          .then(data => {
            if (data !== null && data.user !== undefined) {
              if (data.user !== null && data.user !== undefined) {
                this.userObj = data.user.id
                console.log(this.userObj)
              }
            }
          }, (error) => {
            console.log(error)
            console.log(error.status)
            if (error.status === 500) {
              console.log('user not found')
            }
          })
      },
      /* programmatic approach to route the user to error page if we get error response code. */
      getErrorHandling: function () {
        this.$router.push({ path: '/errorhandling' })
      }
    },
    /* just for testing the baseURl of vue-resource in the component life cycle hook */
    beforeCreate: function () {
      console.log(this.$baseUrl)
    }
    /* this is to test whether error handling page is working or not */
    /* ,
    created: function () {
      this.fetchUser()
      if (this.user === 'DEEVI001') {
        this.getErrorHandling()
      }
    } */
  }
</script>
<style scoped>
  img {
    height: 50px;
    width: 300px;
  }
  .col-8 {
    position: relative;
    top: 0px;
    left: 0px;
    text-align: left;
  }
  .col-4 {
    position: relative;
    top: 0px;
    right: 0px;
    text-align: right;
  }
  a {
    margin-left: 50px;
  }
</style>
