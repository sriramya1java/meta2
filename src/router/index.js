import Vue from 'vue'
import Router from 'vue-router'
import Tables from '@/components/Tables'
import TableDetail from '@/components/TableDetail'
import Notes from '@/components/Notes'
import NoteDetail from '@/components/NoteDetail'
import VueBreadcrumbs from 'vue-2-breadcrumbs'

Vue.use(Router)
Vue.use(VueBreadcrumbs)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Tables',
      component: Tables,
      meta: {
        breadcrumb: 'Tables'
      },
      children: [
        {
          path: 'details',
          name: 'TableDetail',
          component: TableDetail,
          meta: {
            breadcrumb: 'Table Metadata'
          }
        }
      ]
    },
    {
      path: '/notes',
      name: 'Notes',
      component: Notes,
      meta: {
        breadcrumb: 'Notes'
      },
      children: [
        {
          path: 'details',
          name: 'NoteDetail',
          component: NoteDetail,
          meta: {
            breadcrumb: 'Note Metadata'
          }
        }
      ]
    }
  ]
})
