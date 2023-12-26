import { MemoryBook } from '../models/Book/MemoryBook.js'

export const getAll = (req, res) => {
  const books = MemoryBook.getAll()
  res.status(200).json(books)
}

export const create = (req, res) => {
  const book = MemoryBook.create(req.body)
  res.status(201).json(book)
}

export const getPagesAverage = (req, res) => {
  const book = MemoryBook.getPagesAverage(Number(req.params.id))
  res.status(200).json(book)
}
