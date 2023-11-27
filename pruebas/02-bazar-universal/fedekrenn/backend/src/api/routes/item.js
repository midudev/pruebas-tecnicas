import { Router } from 'express'
import { getDetail, getProducts } from '../controller/item.js'

const itemRouter = Router()

itemRouter.get('/', getProducts)
itemRouter.get('/:id', getDetail)

export default itemRouter
