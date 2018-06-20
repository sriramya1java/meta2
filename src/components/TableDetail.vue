<template>
  <h1>this is table details page</h1>
</template>
<script>
  import router from '../router'
  export default {
    methods: {
      navigate () {
        router.go(-1)
      }
    }
  }
</script>
