import { createRouter, createWebHashHistory } from 'vue-router'
import edit from '@/components/Edit.vue'
import demo_popup from '@/components/demo/popup.vue'
import demo_popup2 from '@/components/demo/popup2.vue'
import demo_condition from '@/components/demo/condition.vue'
import single_heading from '@/components/eidt/Heading.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: edit
  }, {
    path: '/edit',
    name: 'edit',
    component: edit
  }, {
    path: '/demo/popup',
    name: 'demo_popup',
    component: demo_popup
  },{
    path: '/demo/popup2',
    name: 'demo_popup2',
    component: demo_popup2
  }, {
    path: '/demo/condition',
    name: 'demo_condition',
    component: demo_condition
  },{
    path: '/single/heading',
    name: 'single_heading',
    component: single_heading
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
