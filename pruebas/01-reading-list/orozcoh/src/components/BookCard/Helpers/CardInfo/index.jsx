import PropTypes from "prop-types";

export const CardHoverInfo = ({ bookData, setShowClickInfo }) => {
  return (
    <div className="bookcard-img-hover" onClick={() => setShowClickInfo(true)}>
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          alignContent: "space-between",
        }}
      >
        <div
          style={{
            margin: "5px",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          <p>{bookData["synopsis"]}</p>
        </div>
        <div
          style={{
            margin: "5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>{bookData["genre"]}</div>
          <div>{bookData["year"]}</div>
        </div>
      </div>
    </div>
  );
};

export const CardClickInfo = ({ bookData, setShowClickInfo }) => {
  return (
    <div className="bookcard-img-click" onClick={() => setShowClickInfo(false)}>
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          alignContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontSize: "1.60em",
              color: "greenyellow",
              textAlign: "center",
            }}
          >
            {bookData["title"]}
          </span>
          <span style={{ fontSize: "1.00em" }}>{bookData["genre"]}</span>
          <span style={{ fontSize: "0.70em" }}>
            {`${bookData["pages"]} paginas`}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "1.00em" }}>Autor:</span>
          <span style={{ color: "yellowgreen" }}>
            {bookData["author"]["name"]}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "0.90em" }}>Otros libros del autor:</span>
          {bookData["author"]["otherBooks"].map((book, key) => {
            return (
              <span key={"book-" + key} style={{ fontSize: "0.80em" }}>
                {book}
              </span>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <span style={{ fontSize: "0.50em" }}>
            {`ISBN ${bookData["ISBN"]}`}
          </span>
        </div>
        <button
          onClick={() => {
            console.log("click");
          }}
        >
          button
        </button>
      </div>
    </div>
  );
};

CardHoverInfo.propTypes = {
  bookData: PropTypes.object,
  setShowClickInfo: PropTypes.func,
};

CardClickInfo.propTypes = {
  bookData: PropTypes.object,
  setShowClickInfo: PropTypes.func,
};
