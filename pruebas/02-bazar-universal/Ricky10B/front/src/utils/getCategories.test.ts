import { products } from '../../../../products.json'
import { getCategories } from './getCategories'

describe('getCategories', () => {
  it('typeof response is Array', () => {
    const res = getCategories({ products })
    expect(res instanceof Array).toBeTruthy()
  })

  it('Parameter products is an empty Array', () => {
    expect(
      getCategories({ products: [] })
    ).toEqual([])
  })

  it('get all categories', () => {
    expect(getCategories({ products })).toEqual(
      [
        ['smartphones', 5],
        ['laptops', 5],
        ['fragrances', 5],
        ['skincare', 5],
        ['groceries', 5],
        ['home-decoration', 5]
      ]
    )
  })

  it('get smartphones and laptops categories', () => {
    const smartphones = 'smartphones'
    const laptops = 'laptops'

    const categoriesSmartphones = products.filter(product =>
      product.category === smartphones
    )

    const categoriesLaptopss = products.filter(product =>
      product.category === laptops
    )

    expect(
      getCategories({ products: categoriesSmartphones })
    ).toEqual(
      [
        [smartphones, 5]
      ]
    )

    expect(
      getCategories({ products: categoriesLaptopss })
    ).toEqual(
      [
        [laptops, 5]
      ]
    )
  })
})
