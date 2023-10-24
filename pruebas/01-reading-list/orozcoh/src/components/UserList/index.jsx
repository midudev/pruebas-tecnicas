import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeBook } from "../../redux/userSlice";

const UserList = () => {
  const userBooks = useSelector((state) => state.user.bookmarks);
  const dispatch = useDispatch();

  console.log("my books len:", userBooks.length);
  return (
    <div style={{ width: "100%", height: "100%", overflow: "overlay" }}>
      {userBooks.map((book, index) => {
        console.log("myBook: ", book);
        return (
          <div
            key={"myBook" + index}
            style={{
              height: "100px",
              margin: "10px",
              color: "black",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              boxShadow: "inset 0 0 5px ",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                //flexDirection: "column",
              }}
            >
              <div>
                <img
                  alt={book["title"]}
                  src={book["cover"]}
                  style={{ height: "100%", padding: "5px 0px 5px 20px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  fontSize: "13px",
                  paddingLeft: "10px",
                }}
              >
                <span>
                  <b>Nombre:</b> {book["title"]}
                </span>
                <span>
                  <b>Autor:</b> {book["author"]["name"]}
                </span>
                <span>
                  <b>Paginas:</b> {book["pages"]}
                </span>
                <span>
                  <b>Año de publicacion: </b>
                  {book["year"]}
                </span>
                <span>
                  <b>ISBN:</b> {book["ISBN"]}
                </span>
              </div>
            </div>

            <div
              style={{
                width: "10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{ cursor: "pointer", color: "gold", fontSize: "26px" }}
                onClick={() => dispatch(removeBook(book))}
              >
                ★
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;

UserList.propTypes = {
  userBooks: PropTypes.array,
};
