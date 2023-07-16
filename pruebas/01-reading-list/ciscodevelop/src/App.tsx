import "./app.scss";
import ListOfBooks from "./components/listOfBooks/ListOfBooks";
import WishListBooks from "./components/listOfBooks/wishListBooks/WishListBooks";

function App() {  
  return (
    <div className="app">
      <h1>Hello React Redux Library</h1>
      <WishListBooks/>
      <ListOfBooks/>    
    </div>
  );
}

export default App;
