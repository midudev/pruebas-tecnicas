import express from 'express'

export const app = express()
app.use(express.json())

const items = [{
  id: 1,
  content: 'Item 1'
}]

app.get('/items', (req, res) => {
  return res.json(items)
})

app.get('/items/:id', (req, res) => {
  const { id } = req.params
  const itemFound = items.find(item => item.id === Number(id))
  if (!itemFound) return res.status(404).json()

  return res.json(itemFound)
})

app.post('/items', (req, res) => {
  const { content } = req.body
  
  const newId = items.length + 1
  const newItem = { id: newId, content }
  items.push(newItem)

  return res.json(newItem)
})

app.put('/items/:id', (req, res) => {
  const { id } = req.params
  const { content } = req.body

  const indexItemFound = items.findIndex(item => item.id === Number(id))
  if (indexItemFound === -1) return res.status(404).json()
  items[indexItemFound].content = content

  return res.json(items[indexItemFound])
})

app.delete('/items/:id', (req, res) => {
  const { id } = req.params

  const indexItemFound = items.findIndex(item => item.id === Number(id))
  if (indexItemFound === -1) return res.status(404).json()
  items.splice(indexItemFound, 1)

  return res.status(200).json()
})

export const server = app.listen(process.env.PORT ?? 3000)
