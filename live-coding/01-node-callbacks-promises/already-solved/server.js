import express from 'express'

export const app = express()
app.use(express.json())

const items = [{
  id: 1,
  content: 'Item 1'
}]

// GET /items
// Retorna todos los items
app.get('/items', (req, res) => {
  return res.json(items)
})

// GET /items/:id
// Retorna un item por su id
app.get('/items/:id', (req, res) => {
  const { id } = req.params
  const item = items.find(item => item.id === +id)
  return res.json(item)
})

// POST /items
app.post('/items', (req, res) => {
  const { content } = req.body
  const newId = items.length + 1
  const newItem = { id: newId, content }
  items.push(newItem)
  return res.json(newItem)
})

// PUT /items/:id
app.put('/items/:id', (req, res) => {
  const { id } = req.params
  const { content } = req.body
  const item = items.find(item => item.id === +id)
  item.content = content
  return res.json(item)
})

// DELETE /items/:id
app.delete('/items/:id', (req, res) => {
  const { id } = req.params
  const itemIndex = items.findIndex(item => item.id === +id)
  items.splice(itemIndex, 1)
  return res.status(200).json()
})

export const server = app.listen(3000)