<template>
  <div class="hello">
    <h1>{{ msg }}, your id is {{ id }}</h1>
    <h1 v-if="id === 'new'">This is create note page</h1>
    <h1 v-else>this is edit note page</h1>
    <h1>{{ id }}</h1>
  </div>
</template>

<script>
  import router from '../router'

  export default {
    name: 'CreateEditNote',
    data () {
      return {
        debug: false,
        id: 0,
        msg: 'META2'
      }
    },
    props: [
      'noteString'
    ],
    created () {
      this.id = this.$route.params.noteString
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
