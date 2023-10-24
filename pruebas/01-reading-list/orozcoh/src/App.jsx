import { useState } from "react";
import { useSelector } from "react-redux";
import jsonData from "../../books.json";
import { BookCardGallery } from "./components/BookCardGallery";
import { BooksFilter } from "./components/BooksFilter";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
const library = jsonData["library"];

const App = () => {
  const user = useSelector((state) => state.user);
  console.log("user_store:", user);
  const [filteredBooks, setFilteredBooks] = useState([]);

  return (
    <div style={{ width: "100%" }}>
      <Header />
      <BooksFilter
        library={library}
        setFilteredBooks={(books) => {
          setFilteredBooks(books);
        }}
      />
      <div
        style={{
          minHeight: "90vh",
          boxShadow: "inset 0 0 5px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <BookCardGallery booksData={filteredBooks} />
      </div>

      <Footer />
    </div>
  );
};

export default App;
