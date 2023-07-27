// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'

//Pinia + Persistencia
import { createPinia } from 'pinia'
const pinia = createPinia()
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
pinia.use(piniaPluginPersistedstate)


export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(pinia)  
}


