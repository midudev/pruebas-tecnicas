import "./GeneralBooks.css";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { Button } from "./ui/button";
import { removeBook } from "@/store/MyListBooks/slice";
import { Library } from "@/interfaces/interfaces";

export const MyBooks = () => {
  const myBooks: Library[] = useAppSelector(
    (state) => state.myBooks as Library[]
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="pt-10">
        <h2 className="font-bold font-[titles] tracking-tighter text-6xl xl:text-5xl">
          Your Favorite Books
        </h2>
        {myBooks.length === 0 && (
          <p className="text-center">There are no favorite books yet</p>
        )}
        <article className="grid myGridBooks min-h-[100px] pt-10">
          {myBooks.map((book, i: number) => {
            return (
              <section key={i} className="grid_book" id="booksList">
                <Card className="book_wrapper h-full bg-gray-50">
                  <CardHeader>
                    <CardTitle>{book.book.title}</CardTitle>
                    <CardDescription>{book.book.author.name}</CardDescription>
                  </CardHeader>

                  <CardContent className="grid place-items-center">
                    <div className="drop-shadow rounded-md">
                      <img
                        src={book.book.cover}
                        alt="book"
                        className="max-w-[200px] max-h-[300px] object-cover object-center"
                      />
                    </div>
                  </CardContent>

                  <CardFooter className="grid place-items-center ">
                    <Button
                      variant="outline"
                      className="
                        text-red-500  border-red-500 
                        hover:text-white hover:bg-red-500
                        transition-all duration-200"
                      onClick={() => dispatch(removeBook(book.book.ISBN))}
                    >
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              </section>
            );
          })}
        </article>
      </div>
    </div>
  );
};
