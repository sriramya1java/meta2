<template>
  <div id="app">
    <img src="./assets/meta2logo.png">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Tables</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/notes">Notes</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Routes Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="nav-link" to="/firstroute/Sebastian">FirstRoute</router-link>
              <router-link class="nav-link" to="/firstroute/Sebastian/child">FirstRouteChild</router-link>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
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