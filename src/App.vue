<template>
  <div id="app">
    <v-app>
      <v-toolbar app>
        <meta2-header></meta2-header>
      </v-toolbar>
      <v-content>
        <!--<nav-bar></nav-bar>-->
        <!--<bread-crumbs></bread-crumbs>-->
        <router-view></router-view>
      </v-content>
      <v-footer app>
        <meta2-footer></meta2-footer>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
  import Meta2Header from '@/components/common/TheHeader'
  import NavBar from '@/components/common/NavBar'
  import Meta2Footer from '@/components/common/TheFooter'
  import BreadCrumbs from '@/components/common/BreadCrumbNav'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    name: 'app',
    components: {
      Meta2Footer,
      Meta2Header,
      NavBar,
      BreadCrumbs
    },
    data () {
      return {
        pathVal: ''
      }
    }
    /* watch for the path value to route the page to error handling page, as the login authentication is not handled by
    * UI */
    /* ,
    computed: {
      crumbs () {
        this.pathVal = this.$route.name
        if (this.pathVal === 'editnote') {
          this.pathVal = 'UpdatedNotesList'
        } else if (this.pathVal === 'edittable') {
          this.pathVal = 'UpdatedTablesList'
        }
        console.log('app : ' + this.pathVal)
      }
    },
    watch: {
      crumbs () {
      }
    } */
  }
</script>
<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-size: 15px;
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
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
<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  @import '../src/assets/custom-bootstrap.scss';
  @import '../node_modules/font-awesome/scss/font-awesome.scss';
</style>

<style lang="css">
  @import '../static/material-icons.css';
</style>
