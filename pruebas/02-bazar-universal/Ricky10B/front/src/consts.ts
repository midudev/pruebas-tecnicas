import { IconosCategoria } from './interfaces'

export const iconosCategoria: IconosCategoria = {
  smartphones: '📱',
  laptops: '💻',
  fragrances: '🌸',
  skincare: '💆🏻‍♀️',
  groceries: '🍞',
  'home-decoration': '🏠'
}

export let apiURL:string

if (!import.meta.env.PROD) {
  apiURL = 'http://localhost:3000/api'
} else {
  apiURL = 'https://back-bazar.onrender.com/api'
}
