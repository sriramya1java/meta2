<template><div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light border rounded">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
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
  <span><breadcrumbs/></span>
</div>
</template>
<script>
  export default {
    name: 'NavBar'
  }
</script>
<style>
</style>
