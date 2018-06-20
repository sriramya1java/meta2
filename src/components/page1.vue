<template>
    <div class="hello">
        <h1>{{ msg1 }}</h1>
        <router-link :to="{ name: 'Page2', params: { id: 996611 }, query: { debug: true }}">Navigate to Page2</router-link>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          msg1: 'Hey Ramya'
        }
      }
    }
</script>