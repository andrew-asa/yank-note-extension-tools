import { createRouter, createWebHashHistory } from 'vue-router'
import edit_index from '@/components/Edit.vue'
import edit_color_pick from '@/components/eidt/ColorPick.vue'
import edit_background_color_pick from '@/components/eidt/BackgroundPick.vue'
import demo_popup from '@/components/demo/popup.vue'
import demo_popup2 from '@/components/demo/popup2.vue'
import demo_show from '@/components/demo/show.vue'
import demo_condition from '@/components/demo/condition.vue'
import single_heading from '@/components/eidt/Heading.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: edit_index
  }, {
    path: '/edit/index',
    name: 'edit_index',
    component: edit_index
  }, {
    path: '/edit/edit_color_pick',
    name: 'edit_color_pick',
    component: edit_color_pick
  }, {
    path: '/edit/edit_background_color_pick',
    name: 'edit_background_color_pick',
    component: edit_background_color_pick
  }, {
    path: '/demo/popup',
    name: 'demo_popup',
    component: demo_popup
  }, {
    path: '/demo/popup2',
    name: 'demo_popup2',
    component: demo_popup2
  }, {
    path: '/demo/show',
    name: 'demo_show',
    component: demo_show
  }, {
    path: '/demo/condition',
    name: 'demo_condition',
    component: demo_condition
  }, {
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
