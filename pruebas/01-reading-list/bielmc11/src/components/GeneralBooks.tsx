import { useFilteredBooks } from "@/hooks/useFilteredBooks";
import "./GeneralBooks.css";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useAppSelector } from "@/hooks/useStore";
import { Library } from "@/interfaces/interfaces";


export const GeneralBooks = () => {
  const { loanding, error, finalBooksList, addBookToFavs } = useFilteredBooks();
  const myBooks : Library[] = useAppSelector((state) => state.myBooks as Library[]);

  const isInMyList = (ISBN: string) => {
    const isIN = myBooks.some((book) => book.book.ISBN === ISBN);
    return isIN;
  };

  if (finalBooksList.length === 1 && finalBooksList[0].book.pages === 0) {
    return (
      <div className="flex flex-col justify-center items-center bg-red w-full h-[200px] justify-self-center">
        <p className="font-bold text-xl">Loanding...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-end my-2">
        <p className="border-l-4 border-[#22c55e] pl-2 inline-block font-medium">
          Total Books: {finalBooksList.length}
        </p>
      </div>

      {finalBooksList.length === 0 && (
        <div className="flex flex-col justify-center items-center w-full h-[200px] justify-self-center">
          <p className="font-bold text-xl">THERE ARE NO RESULTS</p>
          <span className="font-bold text-xl">😥</span>
        </div>
      )}

      <div className="grid myGridBooks  ">
        {loanding === false &&
          error !== true &&
          finalBooksList.map((book, i) => {
            return (
              <section key={i} className="grid_book" id="booksList">
                <Card className="book_wrapper h-full bg-gray-50">
                  <CardHeader>
                    <CardTitle>{book.book.title}</CardTitle>
                    <CardDescription>{book.book.author.name}</CardDescription>
                  </CardHeader>

                  <CardContent className="grid place-items-center">
                    <div className="drop-shadow overflow-hidden rounded-sm">
                      <img
                        src={book.book.cover}
                        alt="book"
                        className="max-w-[250px] max-h-[350px] object-cover object-center"
                      />
                    </div>
                  </CardContent>

                  <CardFooter className="grid place-items-center ">
                    <Button
                      variant="outline"
                      className="text-green-600  border-green-500
                               hover:text-white hover:bg-green-500 "
                      onClick={() => {
                        addBookToFavs(book);
                      }}
                      disabled={isInMyList(book.book.ISBN)}
                    >
                      Add to favorites
                    </Button>
                  </CardFooter>
                </Card>
              </section>
            );
          })}
      </div>
    </div>
  );
};
