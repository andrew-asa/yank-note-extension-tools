import { createRouter, createWebHashHistory } from 'vue-router'
import edit from '@/components/Edit.vue'
import demo_popup from '@/components/demo/popup.vue'
const routes = [
    {
        path:'/',
        name:'index',
        component:edit
    },{
        path:'/edit',
        name:'edit',
        component:edit
    },{
    path:'/demo/popup',
    name:'demo_popup',
    component:demo_popup
  }
]
const  router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
