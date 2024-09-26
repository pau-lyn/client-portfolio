import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import TopBar from "./assets/components/top-bar";
import SideBar from "./assets/components/side-bar";
import MainContent from "./assets/components/content";

import "./App.scss";

type Section = "about" | "resume";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <Row className="">
        <Col lg={3} xs={2} className="bar-col">
          <SideBar />
        </Col>
        <Col lg={9} xs={10} className="bar-col">
          <TopBar onSectionChange={handleSectionChange} />
          <MainContent activeSection={activeSection} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
