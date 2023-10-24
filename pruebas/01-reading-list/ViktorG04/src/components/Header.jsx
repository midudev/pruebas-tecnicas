import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../redux/themeSlice";
import "./header.css";

const Header = () => {
  const { theme } = useSelector((state) => state.theme);
  const { available } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const onHandleChange = () => {
    dispatch(changeTheme(!theme));
  };

  return (
    <header className="header">
      <h1
        style={
          theme ? { color: "rgb(226, 226, 95)" } : { color: "rgb(186, 10, 10)" }
        }
      >
        {available} books Available
      </h1>
      <button
        onClick={onHandleChange}
        style={
          theme ? { border: "1px solid white" } : { border: "1px solid black" }
        }
      >
        {theme ? "Light" : "Dark"}
      </button>
    </header>
  );
};

export default Header;
