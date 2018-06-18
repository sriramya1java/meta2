import Vue from 'vue'
import Router from 'vue-router'
import FirstRoute from '@/components/FirstRoute'
import Tables from '@/components/Tables'
import Notes from '@/components/Notes'
import FirstRouteChild from '@/components/FirstRouteChild'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Tables',
      component: Tables
    },
    {
      path: '/notes',
      name: 'Notes',
      component: Notes
    },
    {
      path: '/firstroute/:name',
      component: FirstRoute,
      children: [
        {
          path: 'child',
          name: 'firstroutechild',
          component: FirstRouteChild
        }
      ]
    }
  ]
})
