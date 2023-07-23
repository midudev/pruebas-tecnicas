import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <div>
      <Navbar
        className="bg-body-tertiary"
        style={{ height: "50px", paddingBottom: "20px", paddingTop: "20px" }}
      >
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <span style={{ fontSize: "35px", color: "yellowgreen" }}>
            CyberLib
          </span>
        </div>
      </Navbar>
    </div>
  );
};
