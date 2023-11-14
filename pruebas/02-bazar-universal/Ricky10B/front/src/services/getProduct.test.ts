/* eslint-disable @typescript-eslint/no-explicit-any */
import { products } from '../../../../products.json'
import { getProductRequest } from './getProduct'
import { Product } from '../interfaces'

const allProducts: Product[] = products

jest.mock<typeof import('./getProduct')>('./getProduct', () => {
  return {
    getProductRequest: jest.fn(async ({ idProduct }) => {
      if (typeof idProduct !== 'number') {
        throw new Error('El parametro debe ser un valor numerico')
      }

      const product = allProducts.find(product => product.id === Number(idProduct))
      if (product) return product
      throw new Error(`No se encontró un producto con el id ${idProduct}`)
    })
  }
})

describe('getProduct', () => {
  it('value return is a Promise of Product', async () => {
    const productFound = await getProductRequest({ idProduct: 1 })

    expect(typeof productFound === 'object').toBeTruthy()
  })

  it('not exist a product with id 0', async () => {
    const idProduct = 0

    try {
      await getProductRequest({ idProduct })
    } catch (e: any) {
      expect(e.message).toMatch(`No se encontró un producto con el id ${idProduct}`)
    }
  })

  it('Params is not a number', async () => {
    try {
      await getProductRequest({ idProduct: '3' as any })
    } catch (e: any) {
      expect(e.message).toMatch('El parametro debe ser un valor numerico')
    }
  })

  it('Get the product with the id 1', async () => {
    const idProduct = 1
    const productMocked = allProducts.find(product => product.id === idProduct)

    const productFound = await getProductRequest({ idProduct })
    expect(productFound).toEqual(productMocked)
  })

  it('Not exist a product with the id 50', async () => {
    const idProduct = 50
    try {
      await getProductRequest({ idProduct })
    } catch (e: any) {
      expect(e.message).toMatch(`No se encontró un producto con el id ${idProduct}`)
    }
  })
})
