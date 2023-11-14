import express from 'express'
import cors from 'cors'
import { router } from './routes/index.routes.js'

export const app = express()

app.use(cors({
  methods: 'GET',
  origin: '*'
}))

app.set('PORT', process.env.PORT ?? 3000)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/items', router)
