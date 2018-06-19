<template>
  <div id="app">
    <div class="row">
      <div class="col-7"><img src="./assets/meta2logo.png" style="margin-bottom: 10px; width: 40%; height:100%;"></div>
      <div class="col-3">welcome: Sri Ramya </div>
      <div class="col-2"><a href="#">Logout</a> </div>
    </div>
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
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownTables" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Tables Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="nav-link" to="/">Table</router-link>
              <router-link class="nav-link" to="/details">Table Details</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownNotes" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Notes Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="nav-link" to="/notes">Notes</router-link>
              <router-link class="nav-link" to="/notes/details">Notes Detail</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <br>
    <br>
    <breadcrumbs/>
    <br>
    <br>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app'
  }
</script>
<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
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
