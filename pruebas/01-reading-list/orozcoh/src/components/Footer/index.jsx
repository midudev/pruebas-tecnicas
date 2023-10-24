import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const Footer = () => {
  return (
    <div>
      <Navbar className="bg-body-tertiary" style={{ height: "50px" }}>
        <Container>
          <Navbar.Brand href="/">
            <span style={{ fontSize: "20px", color: "yellowgreen" }}>
              dev.orozcoh
            </span>
          </Navbar.Brand>

          <Navbar.Text>
            <span style={{ fontSize: "15px", color: "gray" }}>
              01 - Reading List (FrontEnd - Nivel: Junior)
            </span>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
};
