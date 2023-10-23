import type { Product, ProductChunk, ProductDBResponse, ProductsApiResponse } from '@/types/product'

import fs from 'fs/promises'

const PRODUCTS_PATH = process.cwd() + '/app/api/items/products.json'

export const getAllProducts = async (): Promise<ProductDBResponse> => {
  try {
    const products = await fs.readFile(PRODUCTS_PATH, 'utf8')
    const parsedProducts = JSON.parse(products)
    const mappedProducts = parsedProducts.products.map((product: Product) => {
      const { price, discountPercentage } = product
      const discountPrice = price - (price * (discountPercentage / 100))
      return {
        ...product,
        discountPrice,
        hasStock: Boolean(product.stock),
      }
    })
    return { products: mappedProducts, total: parsedProducts.total }
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

export const searchProducts = async (query: string): Promise<ProductsApiResponse> => {
  const products = await getAllProducts()
  // remove not needed categories
  const strippedProducts: ProductChunk[] = products.products.map((product) => {
    const { images, stock, ...values } = product
    return values
  })

  const regex = new RegExp(query, 'i')
  const searchBy: ['title', 'description', 'category'] = ['title', 'description', 'category']
  const items = strippedProducts.filter((product) => (
    searchBy.some((field) => regex.test(product[field]))
  ))

  // get total for found categories
  const categoriesObj: Record<string, number> = {}
  items.forEach((item) => {
    if (!Object.hasOwn(categoriesObj, item.category)) {
      categoriesObj[item.category] = 0
    }
    categoriesObj[item.category]++
  })

  const categories = Object.entries(categoriesObj).map(([category, total]) => ({ category, total }))

  return {
    items,
    total: items.length,
    categories,
  }
}

export const getProductById = async (id: number): Promise<Product | null> => {
  const products = await getAllProducts()
  const product = products.products.find((item) => item.id === id)

  if (!product) {
    return null
  }

  return product
}
