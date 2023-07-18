import { join } from 'node:path'
import { readFile } from 'node:fs/promises'
import { BooksResponse } from '@/types'

export async function getBooks() {
  const filePath = join(process.cwd(), '/../books.json')
  const jsonData = await readFile(filePath, 'utf-8')

  const json = JSON.parse(jsonData) as BooksResponse

  return json.library
}
