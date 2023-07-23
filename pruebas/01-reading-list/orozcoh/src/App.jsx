import jsonData from "../../books.json";
import { BookCardContainer } from "./components/BookCardContainer";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
const library = jsonData["library"];

const App = () => {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      {/*  <BookFilter/> */}
      <BookCardContainer booksData={library} />

      <Footer />
    </div>
  );
};

export default App;
