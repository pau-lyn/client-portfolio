import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./style.scss";

interface TopBarProps {
  onSectionChange: (section: "about" | "resume") => void;
}

const TopBar: React.FC<TopBarProps> = ({ onSectionChange }) => {
  return (
    <div className="top-bar">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#about">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" onClick={() => onSectionChange("about")}>
                About
              </Nav.Link>
              <Nav.Link
                href="#resume"
                onClick={() => onSectionChange("resume")}
              >
                Resume
              </Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
