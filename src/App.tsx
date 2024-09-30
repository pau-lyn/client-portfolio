import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import TopBar from "./assets/components/top-bar";
import SideBar from "./assets/components/side-bar";
import MainContent from "./assets/components/content";
import "./App.scss";

type Section = "about" | "resume" | "portfolio" | "blog" | "contact";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
  };

  // Detect the screen size and set sidebar to be collapsed by default on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`app ${isCollapsed ? "sidebar-collapsed" : ""}`}>
      <Row>
        <Col
          lg={isCollapsed ? 1 : 3}
          xs={isCollapsed ? 2 : 2}
          className="bar-col"
        >
          <SideBar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        </Col>

        <Col
          lg={isCollapsed ? 11 : 9}
          xs={isCollapsed ? 10 : 10}
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
