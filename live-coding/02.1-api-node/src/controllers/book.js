import { MemoryBook } from '../models/Book/MemoryBook.js'
import { validateBook } from '../utils/bookSchema.js'

export const getAll = (req, res) => {
  const books = MemoryBook.getAll()
  res.status(200).json(books)
}

export const create = (req, res) => {
  try {
    const result = validateBook(req.body)

    if (!result.success) {
      const error = JSON.parse(result.error.message)
      return res.status(400).json({ error })
    }

    const book = MemoryBook.create(req.body)
    res.status(201).json(book)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const getPagesAverage = (req, res) => {
  try {
    const avgInfo = MemoryBook.getPagesAverage(Number(req.params.id))
    res.status(200).json(avgInfo)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
