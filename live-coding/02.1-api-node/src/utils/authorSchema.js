import z from 'zod'

const authorSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string'
  }).min(1).max(100)
})

export function validateAuthor (author) {
  return authorSchema.safeParse(author)
}
