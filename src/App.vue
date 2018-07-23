<template>
  <div id="app">
    <!--<div>
      <div>
        <div class="row">
          <div class="col">
            <img src="./assets/meta2logo.png" style="margin-bottom: 10px; width: 60%; height:100%;">
          </div>
          <div class="col">
            2 of 3
          </div>
          <div class="col">
            3 of 3
          </div>
      </div>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #d3d3d3;">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Tables</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/notes">Notes</router-link>
          </li>
        </ul>
      </nav>
    </div>-->
    <div class="container-fluid">
     <!-- <span  v-if="pathVal !== 'errorhandling'">
      <meta2-header></meta2-header>
      </span> -->
      <meta2-header></meta2-header>
      <br>
      <!-- <span  v-if="pathVal !== 'errorhandling'">
      <nav-bar></nav-bar>
      </span> -->
      <nav-bar></nav-bar>
      <!-- <span v-if="pathVal !== 'errorhandling'"><bread-crumbs></bread-crumbs></span> -->
      <bread-crumbs></bread-crumbs>
      <router-view></router-view>
      <meta2-footer></meta2-footer>
    </div>
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
    }/* ,
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
 /*   margin-left: 30px; !* this is not working at this point *!
    margin-right: 30px; !* this is not working at this point *! */
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
