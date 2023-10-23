import type { Product, ProductChunk, ProductDBResponse, ProductsApiResponse } from '@/types/product'

import fs from 'fs/promises'

const PRODUCTS_PATH = process.cwd() + '/app/api/items/products.json'

export const getAllProducts = async (): Promise<ProductDBResponse> => {
  try {
    const products = await fs.readFile(PRODUCTS_PATH, 'utf8')
    return JSON.parse(products)
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

export const searchProducts = async (query: string): Promise<ProductsApiResponse> => {
  const products = await getAllProducts()
  // remove not needed categories
  const strippedProducts: ProductChunk[] = products.products.map((product) => {
    const {
      brand, category, description, discountPercentage, id, thumbnail, price, rating, stock, title,
    } = product

    const discountPrice = price - (price * (discountPercentage / 100))

    return {
      id,
      title,
      description,
      category,
      price,
      thumbnail,
      discountPercentage,
      rating,
      brand,
      discountPrice,
      hasStock: Boolean(stock),
    }
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
