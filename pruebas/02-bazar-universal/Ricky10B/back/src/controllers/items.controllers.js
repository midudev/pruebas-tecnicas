import { products } from '../../consts.js'

export function getItems (req, res) {
  const { s } = req.query
  
  if (
    s == null ||
    typeof s !== 'string'
  ) {
    return res.status(200).json({
      ok: true,
      body: products
    })
  }

  const productsFiltered = products.filter(product =>
    product.title.toLowerCase().includes(s.toLowerCase()) ||
    product.category.toLowerCase().includes(s.toLowerCase())
  )

  return res.status(200).json({
    ok: true,
    body: productsFiltered
  })
}

export function getItem (req, res) {
  const { id } = req.params

  if (Number.isNaN(Number(id))) {
    return res.status(401).json({
      ok: false,
      body: 'El parametro debe ser un valor numérico'
    })
  }

  const product = products.find(product => product.id === Number(id))

  if (product) {
    return res.status(200).json({
      ok: true,
      body: product
    })
  }

  return res.status(404).json({
    ok: false,
    body: `No se encontró un producto con el id ${id}`
  })
}