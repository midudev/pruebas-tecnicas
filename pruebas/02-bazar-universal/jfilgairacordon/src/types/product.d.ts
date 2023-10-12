export type BaseProduct = {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string,
  rating: number
}

export type Product = Omit<BaseProduct, 'image'> & {
  discountPercentage: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
