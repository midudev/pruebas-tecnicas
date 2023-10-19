import { cors } from '@elysiajs/cors'

const ACCEPTED_ORIGIN = [
  'http://localhost:3000',
  'http://localhost:4321'
]

export const corsMiddleware = ({ acceptedOrigin = ACCEPTED_ORIGIN } = {}) => cors({
  origin: (origin, callback) => {
    console.log({acceptedOrigin})
    if (ACCEPTED_ORIGIN.includes(origin)) {
      return callback(null, true)
    }
    if (!origin) {
      return callback(null, true)
    }
    return callback(new Error('Not Allow Origin by CORS'))
  }
})