"use client"
import { useId } from "react"
import Image from "next/image"
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
import { Book, Library } from "@/interfaces/books"

interface Props {
  library: Library[]
  getBook: (args: Book) => void;
}

const BookCard = ({ library, getBook }: Props) => {
  const skeletonId = useId()
  const libaryCardId = useId()

  return (
    <section className="grid grid-cols-3 gap-6">
      {
        library.length > 0 ? (
          library.map(({ book }) => (
            <Card key={`${libaryCardId}-${book.ISBN}`} onClick={() => getBook(book)} className="w-80 hover:bg-secondary-foreground hover:cursor-pointer bg-secondary">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{book.title}</CardTitle>
                <CardDescription>{book.author.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="py-4">
                  <Image src={book.cover} width={200} height={300} alt={book.title} />
                </CardDescription>
                <CardDescription className="text-base font-bold">
                  {book.synopsis}
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
    </section>
  )
}

export default BookCard