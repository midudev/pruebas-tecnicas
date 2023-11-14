import { Router } from 'express'
import {
  getItems,
  getItem
} from '../controllers/items.controllers.js'

export const router = Router()

router.get('/', getItems)

router.get('/:id', getItem)
