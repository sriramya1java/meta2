<template>
  <div class="container">
  <nav class="navbar navbar-expand-lg border rounded">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <!--<li class="nav-item active">
          <router-link to="/">
            <a class="nav-link" href="#" id="navbarTables" role="button">Tables</a>
          </router-link>
        </li>
        <li class="nav-item ">
          <router-link to="/notes">
            <a class="nav-link" href="#" id="navbarNotes" role="button">Notes</a>
          </router-link>
        </li>
        <li>
          <router-link to="/page1">
            <a class="nav-link" href="#" id="navbarPage" role="button">Page1</a>
          </router-link>
        </li>-->
        <li>
          <!--<router-link to="/updatedTablesList">
            <a class="nav-link" href="#" id="navbarUpdatedTablesList" role="button">Updated Tables</a>
          </router-link>-->
          <a class="nav-link" href="#" @click="getTablesList" id="navbarUpdatedTablesList" role="button">Tables</a>
        </li>
        <li>
          <!--<router-link to="/updatedNotesList">-->
            <!--<a class="nav-link" href="#" id="navbarUpdatedNotesList" role="button">Updated Notes</a>-->
          <!--</router-link>-->
          <a class="nav-link" href="#" @click="getNotesList" id="navbarUpdatedNotesList" role="button">Notes</a>
        </li>
         <!-- <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Notes Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="nav-link" to="/notes">Notes</router-link>
            <router-link class="nav-link" to="/notes/details">Notes Detail</router-link>
          </div>-->
      </ul>
    </div>
  </nav>
  <span><breadcrumbs/></span>
  <hr>
</div>
</template>
<script>
  import router from '../router'
  export default {
    name: 'NavBar',
    methods: {
      getTablesList: function () {
        router.push({ name: 'UpdatedTablesList' })
      },
      getNotesList: function () {
        router.push({ name: 'UpdatedNotesList' })
      }
    }
  }
</script>
<style scoped>
  .container {
    border-color: #808080;
    color: #000000;
  }
  a {
    font-weight: bold
  }
</style>
