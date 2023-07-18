"use client"
import { useId, useEffect } from "react"
import Image from "next/image"
import useBookStore from "@/store/booksStore"
import SkeletonCard from "@/components/SkeletonCard"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getVariantGender } from "@/lib/utils"

const BookCard = () => {
  const { library, getBooks } = useBookStore()
  const skeletonId = useId()
  const libaryCardId = useId()

  useEffect(() => {
    getBooks()
  }, [getBooks])

  return (
    <article className="grid grid-cols-3 gap-6">
      {
        library.length > 0 ? (
          library.map(({ book }) => (
            <Card key={`${libaryCardId}-${book.ISBN}`} className="w-80 hover:bg-slate-200 hover:cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{book.title}</CardTitle>
                <CardDescription>{book.author.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="py-4">
                  <Image src={book.cover} width={200} height={300} alt={book.title} />
                </CardDescription>
                <CardDescription>
                  <p className="text-base font-bold">
                    {book.synopsis}
                  </p>
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Badge variant={getVariantGender(book.genre)}>{book.genre}</Badge>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div>
            {
              [1, 2, 3].map(() => (
                <SkeletonCard key={skeletonId} />
              ))
            }
          </div>
        )
      }
    </article>
  )
}

export default BookCard