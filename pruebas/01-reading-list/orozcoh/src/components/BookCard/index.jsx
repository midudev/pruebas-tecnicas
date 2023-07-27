import PropTypes from "prop-types";

import "./style.scss";
import { useEffect, useState } from "react";

import { CardClickInfo, CardHoverInfo } from "./Helpers/CardInfo";

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
          style={{ width: "100%", height: "100%", borderRadius: "5%" }}
          src={bookData["cover"]}
          alt={bookData["title"]}
        />

        {showClickInfo && (
          <CardClickInfo
            bookData={bookData}
            setShowClickInfo={setShowClickInfo}
          />
        )}
        {showHoverInfo && !showClickInfo && (
          <CardHoverInfo
            bookData={bookData}
            setShowClickInfo={setShowClickInfo}
          />
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
