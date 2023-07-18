import { BottomNav } from "./components/BottomNav";
import { Books } from "./pages/Books";
import { Route } from "wouter";
import { ReadingList } from "./pages/ReadingList";
import { Header } from "./components/Header";
import { BooksCounter } from "./components/BooksCounter";

export const App = () => {
  return (
    <div>
      <Header />
      <BooksCounter />
      <div>
        <Route path="/" component={Books} />
        <Route path="/list" component={ReadingList} />
      </div>

      <BottomNav />
    </div>
  );
};
