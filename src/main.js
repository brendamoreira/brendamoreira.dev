import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faGitlab } from '@fortawesome/free-brands-svg-icons'

import router from "./router"

library.add(faGithub, faLinkedin, faGitlab)

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
