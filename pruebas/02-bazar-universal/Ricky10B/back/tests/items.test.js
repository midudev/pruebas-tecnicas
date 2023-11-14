import { products } from '../consts.js'

import chai from 'chai'
import chaiHttp from 'chai-http'
import { app } from '../src/server.js'

const should = chai.should()

chai.use(chaiHttp)

describe('Get items', () => {
  it('Get all items from 1 category correctly', (done) => {
    chai
      .request(app)
      .get('/api/items?s=laptops')
      .end((err, res) => {
        res.should.be.status(200)
        res.body.ok.should.be.a.true
        res.body.body.length.should.be.eq(5)

        done()
      })
  })

  it('We make the request without any parameters', (done) => {
    chai
      .request(app)
      .get('/api/items')
      .end((err, res) => {
        res.should.be.a.status(200)
        res.body.ok.should.be.a.true
        res.body.body.length.should.be.eq(products.length)
        res.body.body[0].should.deep.equal(products[0])

        done()
      })
  })

  it('Not exist items in this search', (done) => {
    chai
      .request(app)
      .get('/api/items?s=asdfg')
      .end((err, res) => {
        res.should.be.a.status(200)
        res.body.ok.should.be.a.true
        res.body.body.length.should.be.eq(0)

        done()
      })
  })
})

describe('Get one item', () => {
  it('Get product with id 10', (done) => {
    chai
      .request(app)
      .get('/api/items/10')
      .end((err, res) => {
        res.should.be.status(200)
        res.body.ok.should.be.a.true
        res.body.body.should.deep.equal(products[9])

        done()
      })
  })

  it('The id 100 not exist', (done) => {
    chai
      .request(app)
      .get('/api/items/100')
      .end((err, res) => {
        res.should.be.a.status(404)
        res.body.ok.should.be.a.false
        res.body.body.should.be.eq('No se encontró un producto con el id 100')

        done()
      })
  })

  it('The id is not a number', (done) => {
    chai
      .request(app)
      .get('/api/items/12EA')
      .end((err, res) => {
        res.should.be.status(401)
        res.body.ok.should.be.a.false
        res.body.body.should.be.eq('El parametro debe ser un valor numérico')

        done()
      })
  })
})
