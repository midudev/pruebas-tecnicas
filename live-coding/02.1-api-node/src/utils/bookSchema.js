import z from 'zod'

const bookSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string'
  }).min(1).max(100),
  chapters: z.number({
    required_error: 'Chapters is required',
    invalid_type_error: 'Chapters must be a number'
  }).min(1),
  pages: z.number({
    required_error: 'Pages is required',
    invalid_type_error: 'Pages must be a number'
  }).min(1),
  authorsIds: z.array(z.number({
    required_error: 'Authors is required',
    invalid_type_error: 'Authors must be a number'
  })).min(1)
})

export function validateBook (book) {
  return bookSchema.safeParse(book)
}
