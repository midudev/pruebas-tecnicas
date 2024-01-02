import { MemoryAuthor } from '../models/Author/MemoryAuthor.js'
import { validateAuthor } from '../utils/authorSchema.js'

export const getAll = (req, res) => {
  const authors = MemoryAuthor.getAll()
  res.status(200).json(authors)
}

export const create = (req, res) => {
  const result = validateAuthor(req.body)

  if (!result.success) {
    const error = JSON.parse(result.error.message)
    return res.status(400).json({ error })
  }

  const author = MemoryAuthor.create(result.data)
  res.status(201).json(author)
}
