import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Taigun' } },
  { path: '/taigun_website', component: Home, meta: { title: 'Taigun' } },
]
