import PropTypes from "prop-types";

import "./style.scss";
import { useEffect, useState } from "react";

export const BookCard = ({ bookData }) => {
  const [showClickInfo, setShowClickInfo] = useState(false);
  const [showHoverInfo, setShowHoverInfo] = useState(false);

  useEffect(() => {
    showClickInfo &&
      setTimeout(() => {
        setShowClickInfo(false);
      }, 10000);
  }, [showClickInfo]);

  return (
    <div id="bookcard-wrapper" className="bookcard-wrapper">
      <div
        className="bookcard-img"
        onMouseOver={() => setShowHoverInfo(true)}
        onMouseOut={() => setShowHoverInfo(false)}
      >
        <img
          //className="bookcard-img"
          style={{ width: "100%", height: "100%", borderRadius: "5%" }}
          onClick={() => setShowClickInfo(!showClickInfo)}
          src={bookData["cover"]}
          alt={bookData["title"]}
        />

        {showClickInfo && (
          <div
            className="bookcard-img-click"
            onClick={() => setShowClickInfo(!showClickInfo)}
          >
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
                <span style={{ fontSize: "0.90em" }}>
                  Otros libros del autor:
                </span>
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
        )}
        {showHoverInfo && !showClickInfo && (
          <div
            className="bookcard-img-hover"
            onClick={() => setShowClickInfo(!showClickInfo)}
          >
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
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: 600, paddingTop: "3px" }}>
          {bookData["title"].length > 25
            ? bookData["title"].substring(0, 25) + "..."
            : bookData["title"]}
        </span>
        <span style={{ color: "gray" }}>{bookData["author"]["name"]}</span>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  bookData: PropTypes.object,
};
