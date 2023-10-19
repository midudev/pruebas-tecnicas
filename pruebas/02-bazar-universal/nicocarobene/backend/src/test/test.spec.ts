import { describe, expect, it } from 'bun:test'
import { Elysia } from "elysia"
import { productApp } from '../controllerProduct'
import { handleError } from '../handleError'
import {products} from '../../products'
describe('Elysia', () => {
    it('content is array', async () => {
      const app = new Elysia()
      app.use(handleError)
      app.use(productApp)
      const response = await app.handle(
          new Request('http://localhost/api/')
      ).then(res => res.json())

      expect(Array.isArray(response)).toBe(true)
    })
    it('the firt product is "iphone"', async () => {
      const app = new Elysia()
      app.use(handleError)
      app.use(productApp)
      const response = await app.handle(
          new Request('http://localhost/api/')
      ).then(res => res.json())

      expect(response[0].title).toBe('iPhone 9')
    })
    it('Searching "Smart"', async () => {
      const app = new Elysia()
      app.use(handleError)
      app.use(productApp)
      const response = await app.handle(
          new Request('http://localhost:3000/api/items?q=smart')
      ).then(res => res.json())
      expect(response.length).toBe(5)
    })
    it('Searching ItemById', async () => {
      const app = new Elysia()
      app.use(handleError)
      app.use(productApp)
      const response = await app.handle(
          new Request('http://localhost/api/item/1')
      ).then(res => res.json())
      expect(response.description).toBe( "An apple mobile which is nothing like apple")
    })
    it('Not found item', async () => {
      const app = new Elysia()
      app.use(handleError)
      app.use(productApp)
      const response = await app.handle(
          new Request('http://localhost/api/item/adasdwds')
      ).then(res => res.json())
      expect(response.error).toBe("Not Found Result :(")
    })
})