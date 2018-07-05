<template>
  <div class="row">
    <div class="col-8">
      <img src="../../assets/meta2logo.png">
    </div>
    <div class="col-4">
<<<<<<< HEAD
      Welcome: {{ user }}
      <a href="#" @click="logout">Logout</a>
=======
    <div class="d-inline">Welcome: {{ user }}</div>
    <div class="d-inline"><a href="#" @click="logout">Logout</a></div>
>>>>>>> 0b8288a3a715121fd3cde26755fb5dd3924145f8
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Meta2Header',
    data () {
      return {
        user: 'DEEVI001'
      }
    },
    methods: {
      logout () {
        confirm(this.user + ' Do you want to logout?')
      }
    }
  }
</script>
<style scoped>
  img {
    height: 80px;
    width: 400px;
  }
  .col-8{
    position: relative;
    top: 0px;
    left: 0px;
    text-align: left;
  }
  .col-4{
    position: relative;
    top: 0px;
    right: 0px;
    text-align: right;
  }
  a{
    margin-left: 50px;
  }
</style>
