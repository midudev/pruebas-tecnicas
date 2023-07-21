import React from 'react'
import { NO_SW_SUPPORTED } from '../constants.texts'
import { error } from 'console'

export const useRegisterServiceWorker = () => {
  React.useEffect(() => {
    const sw = navigator.serviceWorker
    let registry: ServiceWorkerRegistration
    if (!sw) {
      console.warn(NO_SW_SUPPORTED)
      return
    }
    sw.register('./sw/service-worker.js').then(
      function (registration) {
        registry = registration
        console.log({ registry })
      }, function (err) {
        console.warn(err)
      })
  }, [])
}
