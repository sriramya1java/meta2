<template>
  <div class="row">
    &nbsp;&nbsp;&nbsp;{{ version }}
  </div>
</template>
<script>
  export default {
    name: 'Meta2Footer',
    data () {
      return {
        version: 'V0.0'
      }
    }
  }
</script>
<style scoped>
  .row {
    color: #808080;
  }
</style>
