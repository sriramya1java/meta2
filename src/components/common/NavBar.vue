<template>
  <div>
    <nav class="navbar navbar-expand-lg border rounded">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li>
            <a class="nav-link" :class="pathVal === 'UpdatedTablesList' ? 'active-nav' : ''" @click="getTablesList" id="navbarUpdatedTablesList" role="button"> Tables</a>
          </li>
          <li>
            <a class="nav-link" :class="pathVal === 'UpdatedNotesList' ? 'active-nav' : ''" @click="getNotesList" id="navbarUpdatedNotesList" role="button">Notes</a>
          </li>
        </ul>
      </div>
    </nav>
    <hr>
  </div>
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
  .active-nav{
    background-color: #0056b3;
    color: #ffffff !important;
  }
</style>
