import PropTypes from "prop-types";
import UserList from "../UserList";

const UserSidePanel = ({ isOpen, setIsOpen }) => {
  const scrollableHeight = document.documentElement.scrollHeight;

  return (
    isOpen && (
      <div
        style={{
          width: "100%",
          height: `calc(${scrollableHeight}px - 100px)`,
          position: "absolute",
          right: 0,
          zIndex: 1,
          display: "flex",
        }}
      >
        <div
          style={{
            width: "calc(100% - 500px)",
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.7)",
          }}
          onClick={() => setIsOpen(false)}
        ></div>
        <div
          style={{
            width: "500px",
            height: "100%",
            backgroundColor: "#F2EE9D",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
              color: "#8C3333",
            }}
          >
            <h2>Lista de lectura</h2>
          </div>
          <UserList />
        </div>
      </div>
    )
  );
};

export default UserSidePanel;

UserSidePanel.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
