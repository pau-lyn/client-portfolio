import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import "./style.scss";

function SideBar() {
  return (
    <div className="side-bar">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div>this is sidebar</div>
        </Container>
      </Navbar>
    </div>
  );
}

export default SideBar;
