import Vue from 'vue'
import Router from 'vue-router'
import todo from '../todo/todo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: todo
    }
  ]
})
