import UserSidePanel from "../UserSidePanel";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Header = () => {
  const userBooks = useSelector((state) => state.user.bookmarks);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ backgroundColor: "#557A46" }}>
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          marginLeft: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
            backgroundColor: "#557A46",
          }}
        >
          <span
            style={{
              fontSize: "35px",
              fontFamily: "monospace",
              color: "yellowgreen",
            }}
          >
            CyberLib
          </span>
        </div>
        <div>
          <div
            style={{
              borderRadius: "15px",
              width: "150px",
              height: "30px",
              backgroundColor: "yellowgreen",
              marginRight: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Mi lista: {userBooks.length} libros</span>
          </div>
        </div>
      </div>
      <UserSidePanel isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
