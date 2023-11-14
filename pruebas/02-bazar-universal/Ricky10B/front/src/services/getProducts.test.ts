import { products } from '../../../../products.json'
import { ProductsRequestProp } from '../interfaces'
import { getProductsRequest } from './getProducts'

jest.mock<typeof import('./getProducts')>('./getProducts', () => {
  return {
    getProductsRequest: jest.fn(async ({ search }: ProductsRequestProp) => {
      if (
        search == null ||
        typeof search !== 'string'
      ) return products

      return products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
      )
    })
  }
})

describe.only('getProducts', () => {
  it('Return an Array', async () => {
    const res = await getProductsRequest({ search: 'LAPTOP' })
    expect(res instanceof Array).toBeTruthy()
  })

  it('No pass parameter return all products', async () => {
    const res = await getProductsRequest({ search: null })

    expect(res).toHaveLength(products.length)
  })

  it('Get only laptops', async () => {
    const res = await getProductsRequest({ search: 'LAPTOPS' })

    expect(res.length).toBeGreaterThan(0)
    expect(
      res.map(p => p.category)
    ).toContain('laptops')
  })

  it('Search not returning data', async () => {
    const res = await getProductsRequest({ search: 'xyz' })
    expect(res).toHaveLength(0)
  })

  it('Empty search should return all data', async () => {
    const res = await getProductsRequest({ search: '' })
    expect(res).toHaveLength(products.length)
  })

  it('Search "fr" return 2 types of categories', async () => {
    const res = await getProductsRequest({ search: 'fr' })
    const categories = res.map(p => p.category)

    expect(categories).toContain('fragrances')
    expect(categories).toContain('groceries')
  })
})
