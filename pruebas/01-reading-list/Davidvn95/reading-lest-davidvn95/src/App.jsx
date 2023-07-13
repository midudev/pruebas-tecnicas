import "./App.css";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card/Card";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";

function App() {
    return (
        <main>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </main>
    );
}

export default App;
