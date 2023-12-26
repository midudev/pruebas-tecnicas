import { MemoryAuthor } from '../models/Author/MemoryAuthor.js'

export const getAll = (req, res) => {
  const authors = MemoryAuthor.getAll()
  res.status(200).json(authors)
}

export const create = (req, res) => {
  const author = MemoryAuthor.create(req.body)
  res.status(201).json(author)
}
