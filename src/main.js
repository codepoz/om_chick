import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'

// begin:: assets
import './assets/app.css'
// end:: assets

library.add(faWhatsapp, faInstagram, faFacebook)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')