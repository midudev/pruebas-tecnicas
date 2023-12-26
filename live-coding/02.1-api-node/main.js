import express from 'express'
import { bookRouter } from './src/routes/book.js'
import { authorRouter } from './src/routes/author.js'

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.json())
app.disable('x-powered-by')

app.use('/books', bookRouter)
app.use('/authors', authorRouter)

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

server.on('error', (error) => {
  console.error('Error starting server:', error)
})
