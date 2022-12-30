import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import router from './routes/router'

// begin:: assets
import './assets/app.css'
// end:: assets

library.add(faWhatsapp, faInstagram, faFacebook, faEnvelope, faPhone, faMapMarkerAlt)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(MotionPlugin)
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB-JpweDJ7_cA9-KiEq-iMjQzlluOemnWo',
    },
})

app.mount('#app')