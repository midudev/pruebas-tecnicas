import { describe, it, after } from 'node:test'
import { equal, deepStrictEqual } from 'node:assert/strict'
import request from 'supertest'

import { app, server } from '../solutions/server.js'

describe('Items Routes', () => {
  let itemId = null

  after(() => {
    server.close()
  })

  it('should fetch all tasks', async () => {
    const response = await request(app).get('/items')

    equal(response.statusCode, 200)
    equal(Array.isArray(response.body), true)
    equal(response.body.length, 1)
    equal(response.body[0].content, 'Item 1')
  })

  it('should add a new item', async () => {
    const response = await request(app)
      .post('/items')
      .send({
        content: 'Test item'
      })

    equal(response.statusCode, 200)
    equal(response.body.content, 'Test item')
    itemId = response.body.id

    const { statusCode, body } = await request(app).get(`/items/${itemId}`)
    equal(statusCode, 200)
    equal(body.content, 'Test item')
    equal(body.id, itemId)
  })

  it('should delete a task', async () => {
    const { statusCode } = await request(app).delete(`/items/${itemId}`)
    equal(statusCode, 200)
  })

  it('should have no tasks after deletion', async () => {
    const response = await request(app).get('/items')

    equal(response.statusCode, 200)
    deepStrictEqual(response.body, [{
      id: 1,
      content: 'Item 1'
    }])
  })
})