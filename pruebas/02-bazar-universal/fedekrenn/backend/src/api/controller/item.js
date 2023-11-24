import Item from '../../model/Item.js'
const itemContainer = new Item()

const getProducts = async (req, res) => {
  const { q } = req.query

  if (q) {
    const result = await itemContainer.getItemsByCategory(q)
    res.status(200).json(result)
  } else {
    const result = await itemContainer.getItems()
    res.status(200).json(result)
  }
}

const getDetail = async (req, res) => {
  const { id } = req.params
  const result = await itemContainer.getItemById(parseInt(id))

  if (!result) {
    res.status(404).json({ error: 'Not product found' })
  } else {
    res.status(200).json(result)
  }
}

export { getProducts, getDetail }
