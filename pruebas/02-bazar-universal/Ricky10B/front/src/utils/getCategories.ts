import { loaderProducts } from '../interfaces'

export function getCategories ({ products }: loaderProducts) {
  const res = products.reduce((cont, product) => {
    const { category } = product

    if (cont[category]) cont[category]++
    else cont[category] = 1
    return cont
  }, {} as { [key: string]: number })

  return Object.entries(res)
}
