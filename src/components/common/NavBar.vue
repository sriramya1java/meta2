<template>
  <div>
    <nav class="navbar navbar-expand-lg border rounded">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li>
            <!--<router-link to="/updatedTablesList">
              <a class="nav-link" href="#" id="navbarUpdatedTablesList" role="button">Updated Tables</a>
            </router-link>-->
            <a class="nav-link" @click="getTablesList" id="navbarUpdatedTablesList" role="button">Tables</a>
          </li>
          <li>
            <!--<router-link to="/updatedNotesList">-->
            <!--<a class="nav-link" href="#" id="navbarUpdatedNotesList" role="button">Updated Notes</a>-->
            <!--</router-link>-->
            <a class="nav-link" @click="getNotesList" id="navbarUpdatedNotesList" role="button">Notes</a>
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
  import router from '../../router/index'
  export default {
    name: 'NavBar',
    methods: {
      getTablesList: function () {
        this.$router.push({ path: '/' })
      },
      getNotesList: function () {
        this.$router.push({ path: '/updatedNotesList' })
      },
      navigate () {
        router.go(-1)
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
