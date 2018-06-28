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
      <meta2-header></meta2-header>
      <br>
      <nav-bar></nav-bar>
      <router-view></router-view>
      <meta2-footer></meta2-footer>
    </div>
  </div>
</template>
<script>
  import Meta2Header from '@/components/common/TheHeader'
  import NavBar from '@/components/common/NavBar'
  import Meta2Footer from './components/common/TheFooter'

  export default {
    name: 'app',
    components: {
      Meta2Footer,
      Meta2Header,
      NavBar
    }
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
    margin-left: 30px; /* this is not working at this point */
    margin-right: 30px; /* this is not working at this point */
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
</style>
