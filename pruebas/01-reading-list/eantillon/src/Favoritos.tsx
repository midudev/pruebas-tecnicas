import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./components/ui/button";
import { BookOpenCheck, X } from "lucide-react";
import { useBookStore } from "./store/useBookStore";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Favoritos = () => {
  const favoritos = useBookStore((state) => state.favoritos);
  const removeBook = useBookStore((state) => state.removeBook);
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="default"
          size="icon"
          className="float-right ml-2 fixed right-8 bottom-4 w-16 h-16"
        >
          <BookOpenCheck className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Listado de favoritos</SheetTitle>
          <SheetDescription className="gap-3 flex flex-col">
            {favoritos.map((favorito) => {
              return (
                <Card>
                  <CardHeader className="p-0">
                    <div className="flex">
                      <div className="bg-red-500 w-24">
                        <img
                          src={favorito.cover}
                          alt=""
                          className="h-full w-full"
                        />
                      </div>
                      <div className="p-4 w-64 relative">
                        <CardTitle className="text-lg">
                          {favorito.title}
                        </CardTitle>
                        <CardDescription>ISBN: {favorito.ISBN}</CardDescription>
                        <Button
                          variant="destructive"
                          size="icon"
                          color="primary"
                          className="text-xs w-7 h-7 absolute -top-1.5 -right-1.5"
                          onClick={() => removeBook(favorito)}
                        >
                          <X className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
            {/* {JSON.stringify(favoritos, null, 2)} */}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Favoritos;
