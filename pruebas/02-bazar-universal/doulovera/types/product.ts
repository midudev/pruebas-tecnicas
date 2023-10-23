export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface ProductDBResponse {
  products: Product[]
  total: number
}

export type ProductChunk = Omit<Product, 'images' | 'stock'> & { discountPrice: number, hasStock: boolean }
export interface ProductsApiResponse {
  items: ProductChunk[]
  total: number
  categories: { category: string; total: number }[]
}
