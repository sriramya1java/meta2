<template>
    <v-tabs color="grey" dark slider-color="white">
    <v-tab ripple to="/">
      Tables
    </v-tab>
    <v-tab ripple to="/updatedNotesList">
      Notes
    </v-tab>
    </v-tabs>
    <!--<nav class="navbar navbar-full navbar-dark bg-primary border rounded">
      <div>
        <ul class="navbar-nav" style="display: inline;">
          <li>
            <a class="nav-link" :class="pathVal === 'UpdatedTablesList' ? 'active-nav' : ''" @click="getTablesList" id="navbarTablesList" role="button"> Tables</a>
          </li>
          <li>
            <a class="nav-link" :class="pathVal === 'UpdatedNotesList' ? 'active-nav' : ''" @click="getNotesList" id="navbarNotesList" role="button">Notes</a>
          </li>
        </ul>
      </div>
    </nav>-->
</template>
<script>
  import router from '../../router/index'
  export default {
    name: 'NavBar',
    data () {
      return {
        pathVal: ''
      }
    },
    /* programmatic approach to dynamically load tables and notes page via Vue routing */
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
    },
    /* we are watching and keeping tracking of the navigation and passing that down to pathval for the purpose of diplaying breadcrumb. */
    computed: {
      crumbs () {
        this.pathVal = this.$route.name
        if (this.pathVal === 'editnote') {
          this.pathVal = 'UpdatedNotesList'
        } else if (this.pathVal === 'edittable') {
          this.pathVal = 'UpdatedTablesList'
        }
        console.log(this.pathVal)
      }
    },
    watch: {
      crumbs () {
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
  /*.active-nav{
    background-color: #007bff;
    color: #ffffff !important;
  }*/
  /*@media (max-width: 62em) {
    .navbar-nav {
      padding-top: .425rem;
      padding-left: 0.75rem;
    }
    .navbar-nav .nav-item {
      float: none;
    }
    .navbar-brand {
      float: right;
    }
    .navbar-brand,
    .navbar-nav .nav-item {
      display: block;
    }
    .navbar-nav .nav-item + .nav-item {
      margin-left: 0;
    }
    .dropdown-menu {
      position: relative;
      float: none;
    }
  }*/
</style>
