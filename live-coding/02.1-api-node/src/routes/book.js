import { Router } from 'express'
import { create, getAll, getPagesAverage } from '../controllers/book.js'

export const bookRouter = Router()

bookRouter.get('/', getAll)

bookRouter.post('/', create)

bookRouter.get('/:id/pages-average', getPagesAverage)
