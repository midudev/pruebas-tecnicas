import "./App.css";
import { Routes, Route } from "react-router-dom";
import { getAllBooks } from "./redux/booksSlice";
import { useDispatch } from "react-redux";
import Books from "./data";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import MyBooks from "./pages/MyBooks/MyBooks";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBooks(Books.list()));
    }, []);

    return (
        <main>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mybooks" element={<MyBooks />} />
            </Routes>
        </main>
    );
}

export default App;
