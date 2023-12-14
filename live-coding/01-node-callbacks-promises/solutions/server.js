import express from 'express'
const app = express()

const PORT = 3000
app.use(express.json())

const elements = [{
  id: 1,
  content: 'Item 1'
}]

app.get('/items', (req, res) => {
  res.status(200).json(elements)
})

app.get('/items/:id', (req, res) => {
  const { id } = req.params

  const findedProduct = elements.find(prod => prod.id === Number(id))
  res.status(200).json(findedProduct)
})

app.post('/items', (req, res) => {
  const { content } = req.body

  const newId = elements.length + 1
  const newElement = { id: newId, content }
  elements.push(newElement)
  res.status(200).json(newElement)
})

app.put('/items/:id', (req, res) => {
  const { content } = req.body
  const { id } = req.params

  const findedProduct = elements.find(prod => prod.id === Number(id))
  findedProduct.content = content

  res.status(200).json(findedProduct)
})

app.delete('/items/:id', (req, res) => {
  const { id } = req.params

  const itemIndex = elements.findIndex(prod => prod.id === Number(id))
  elements.splice(itemIndex, 1)

  res.status(200).json()
})

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

server.on('error', (error) => {
  console.error('Error starting server:', error)
})

export {
  app,
  server
}
