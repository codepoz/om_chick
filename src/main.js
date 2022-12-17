import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './routes/router'

// begin:: assets
import './assets/app.css'
// end:: assets

library.add(faWhatsapp, faInstagram, faFacebook, faEnvelope, faPhone, faMapMarkerAlt)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')