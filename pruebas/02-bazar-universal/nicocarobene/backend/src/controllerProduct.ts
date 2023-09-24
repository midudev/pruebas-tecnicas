import { Elysia, NotFoundError } from "elysia"
import { products } from '../products.json'

export const productApp= new Elysia()

productApp.get('/api',()=>products)

productApp.get('/api/items',({query})=>{
  const {q}= query
  if(Number(q) === 0) return products
  const response= products.filter((item) => {
    return Object.values(item).some(atribute => {
      if (typeof atribute === 'string') {
        return atribute.toLowerCase().includes(q?.toLowerCase() ?? '')
      }
      return false
    })
  })
  if(response.length === 0){
    throw new NotFoundError()
  }
  return response
})

productApp.get('/api/item/:id',({params: {id}})=>{
  const product= products.find(product=>product.id === Number(id))
  if(product){
    return product
  }
  throw new NotFoundError()
})
