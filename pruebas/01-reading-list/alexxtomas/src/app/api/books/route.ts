import { NextResponse } from 'next/server.js'
import books from '@db/books.json' assert { type: 'json' }

export async function GET() {
  return NextResponse.json(books)
}
