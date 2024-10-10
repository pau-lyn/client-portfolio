import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import TopBar from "./assets/components/top-bar";
import SideBar from "./assets/components/side-bar";
import MainContent from "./assets/components/content";
import "./App.scss";

type Section = "about" | "resume" | "portfolio" | "blog" | "contact";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [isCompressed, setIsCompressed] = useState(false);

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
  };

  // Detect the screen size and set sidebar to be Compressed by default on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setIsCompressed(true);
      } else {
        setIsCompressed(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCompressed(!isCompressed);
  };

  return (
    <div className={`app ${isCompressed ? "sidebar-Compressed" : ""}`}>
      <Row>
        <Col
          lg={isCompressed ? 1 : 3}
          md={isCompressed ? 2 : 2}
          xs={isCompressed ? 2 : 2}
          className="bar-col"
        >
          <SideBar isCompressed={isCompressed} toggleSidebar={toggleSidebar} />
        </Col>

        <Col
          lg={isCompressed ? 11 : 9}
          md={isCompressed ? 10 : 10}
          xs={isCompressed ? 10 : 10}
          className="content-col"
        >
          <TopBar onSectionChange={handleSectionChange} />
          <MainContent activeSection={activeSection} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
