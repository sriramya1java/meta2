import Vue from 'vue'
import Router from 'vue-router'
import FirstRoute from '@/components/FirstRoute'
import Tables from '@/components/Tables'
import TableDetail from '@/components/TableDetail'
import Notes from '@/components/Notes'
import NoteDetail from '@/components/NoteDetail'
import FirstRouteChild from '@/components/FirstRouteChild'
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
            breadcrumb: 'TableDetail'
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
            breadcrumb: 'NoteDetail'
          }
        }
      ]
    },
    {
      path: '/firstroute/:name',
      component: FirstRoute,
      meta: {
        breadcrumb: 'FirstRoute'
      },
      children: [
        {
          path: 'child',
          name: 'firstroutechild',
          component: FirstRouteChild,
          meta: {
            breadcrumb: 'FirstRouteChild'
          }
        }
      ]
    }
  ]
})
