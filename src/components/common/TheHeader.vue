<template>
  <div class="row">
    <div class="col-8">
      <img src="../../assets/meta2logo.png">
    </div>
    <div class="col-4">
    Welcome: {{ user }}
    <a href="./logout">Logout</a>
    </div>
  </div>
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
      // used to get the user dynamically when the api is turned on
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
      getErrorHandling: function () {
        this.$router.push({ path: '/errorhandling' })
      }
    },
    beforeCreate: function () {
      console.log(this.$baseUrl)
    }/* ,
    created: function () {
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
