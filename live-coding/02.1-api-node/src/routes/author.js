import { Router } from 'express'
import { create, getAll } from '../controllers/author.js'

export const authorRouter = Router()

authorRouter.get('/', getAll)

authorRouter.post('/', create)
