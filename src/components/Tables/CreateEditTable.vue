<template>
  <div class="hello">
    <h5>{{ msg }}, your id is {{ id }}</h5>
    <h1 v-if="id === 'new'">This is create table page</h1>
    <h1 v-else>this is edit table page</h1>
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
        msg: 'META2'
      }
    },
    watch: {
      '$route' (to, from) {
        this.id = to.params.id
      }
    },
    created () {
      this.id = this.$route.params.tableString
      if (this.$route.query.debug) {
        this.debug = this.$route.query.debug
      }
    },
    methods: {
      navigate () {
        router.go(-1)
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
</style>
