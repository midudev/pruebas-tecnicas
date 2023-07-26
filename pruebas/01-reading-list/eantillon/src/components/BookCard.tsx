import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, StarOff } from "lucide-react";
import { Book } from "@/global/types";
import { Button } from "./ui/button";
import { useBookStore } from "@/store/useBookStore";

interface Props {
  book: Book;
}

const BookCard: React.FC<Props> = ({ book }) => {
  const addBook = useBookStore((state) => state.addBook);
  const removeBook = useBookStore((state) => state.removeBook);
  const favoritos = useBookStore((state) => state.favoritos);

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <img
          alt="Signage"
          src={book.cover}
          className="h-96 w-full rounded-md object-cover sm:h-64 lg:h-96 mb-2"
        />
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>{book.synopsis}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <dl className="divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Género</dt>
              <dd className="text-gray-700 sm:col-span-2">
                <Badge variant="secondary" className="bg-indigo-100">
                  {book.genre}
                </Badge>
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Autor</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {book.author.name}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Publicación</dt>
              <dd className="text-gray-700 sm:col-span-2">{book.year}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">No. Páginas</dt>
              <dd className="text-gray-700 sm:col-span-2">{book.pages}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">ISBN</dt>
              <dd className="text-gray-700 sm:col-span-2">{book.ISBN}</dd>
            </div>
          </dl>
        </div>
      </CardContent>
      <CardFooter>
        {favoritos.filter((favorito) => favorito.ISBN === book.ISBN).length ===
        0 ? (
          <Button
            className="w-full flex gap-2 h-10"
            variant="outline"
            onClick={() => addBook(book)}
          >
            <span className="text-sm">Agregar a favoritos</span>
            <Star className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            className="w-full flex gap-2 h-10"
            variant="outline"
            onClick={() => removeBook(book)}
          >
            <span className="text-sm">Agregar a favoritos</span>
            <StarOff className="w-4 h-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default BookCard;
