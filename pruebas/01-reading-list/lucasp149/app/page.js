import BookList from "./components/bookList";
import BookSelection from "./components/bookSelection";
import Context from "./components/context/context";
import UpperBar from "./components/upperBar";

export default function Home() {
  return (
    <Context>
      <main className="flex flex-col bg-white">
        <div className="flex w-full justify-center">
          <UpperBar />
        </div>
        <div className="grid grid-cols-3 p-2 gap-2">
          <div className="col-start-1 col-end-3 ">
            <BookList />
          </div>
          <div className="col-start-3 col-end-4 ">
            <BookSelection />
          </div>
        </div>
      </main>
    </Context>
  );
}
