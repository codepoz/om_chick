import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from './../views/Home.vue'
import Menu from './../views/Menu.vue'
import About from './../views/About.vue'
import Contact from './../views/Contact.vue'
import Location from './../views/Location.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/menu',
            name: 'menu',
            component: Menu
        },
        {
            path: '/location',
            name: 'location',
            component: Location
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
    ]
})

export default router