import Vue from 'vue'
import Router from 'vue-router'
import VueBreadcrumbs from 'vue-2-breadcrumbs'
import UpdatedTablesList from '@/components/Tables/UpdatedTablesList'
import CreateEditTable from '@/components/Tables/CreateEditTable'
import UpdatedNotesList from '@/components/Notes/UpdatedNotesList'
import CreateEditNote from '@/components/Notes/CreateEditNote'

Vue.use(Router)
Vue.use(VueBreadcrumbs)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'UpdatedTablesList',
      component: UpdatedTablesList,
      meta: {
        breadcrumb: 'Tables'
      }
    },
    {
      path: '/createedittable/:tableString',
      name: 'CreateEditTable',
      component: CreateEditTable,
      props: true,
      meta: {
        breadcrumb: 'Tables > Table Metadata'
      }
    },
    {
      path: '/updatedNotesList',
      name: 'UpdatedNotesList',
      component: UpdatedNotesList,
      meta: {
        breadcrumb: 'Notes'
      }
    },
    {
      path: '/createeditnote/:noteString',
      name: 'CreateEditNote',
      component: CreateEditNote,
      props: true,
      meta: {
        breadcrumb: 'Notes > Note Metadata'
      }
    }
  ]
})
