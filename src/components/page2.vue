<template>
    <div class="hello">
        <h1>{{ msg }}, your id is {{ id }}</h1>
        <p>Debug mode is currently set to {{ debug }}</p>
        <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">Navigate to Page1</a>
    </div>
</template>

<script>
    import router from '../router'

    export default {
      name: 'Page2',
      data () {
        return {
          debug: false,
          id: 0,
          msg: 'Hey Sasi'
        }
      },
      created () {
        this.id = this.$route.params.id
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