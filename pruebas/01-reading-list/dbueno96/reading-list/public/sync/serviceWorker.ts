const VERSION = 1
const NAME = `SW-${VERSION}`

const installEvent = () => {
  self.addEventListener('install', () => {
    console.log('service worker installed')
  })
}

const activateEvent = () => {
  self.addEventListener('activate', () => {
    console.log('service worker activated')
  })
}

installEvent()
activateEvent()
