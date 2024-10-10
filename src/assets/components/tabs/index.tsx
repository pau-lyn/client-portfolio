import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { pdfFiles } from "../portfolio/pdf-files";
import { Row, Col } from "react-bootstrap";

import "./style.scss";

const categories = [
  { key: "all", title: "All" },
  { key: "console-based", title: "Console-Based System" },
  { key: "web-dev", title: "Web Development" },
  { key: "desktop-app", title: "Desktop App" },
  { key: "prototypes", title: "Prototypes" },
];

function TabComponent() {
  return (
    <Tabs
      defaultActiveKey="all"
      id="tab-component"
      className="mb-3 custom-tabs"
    >
      {categories.map((category) => (
        <Tab eventKey={category.key} title={category.title} key={category.key}>
          <div className="tab-content">
            <Row className="d-flex">
              {category.key === "all"
                ? pdfFiles.map((pdf, index) => (
                    <Col lg={3} md={6} xs={12} className="pdf-item" key={index}>
                      <a
                        href={pdf.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={pdf.imageSrc} alt={pdf.title} />
                        <p>{pdf.content}</p>
                      </a>
                    </Col>
                  ))
                : pdfFiles
                    .filter((pdf) => pdf.category === category.key)
                    .map((pdf, index) => (
                      <Col
                        lg={3}
                        md={6}
                        xs={12}
                        className="pdf-item"
                        key={index}
                      >
                        <a
                          href={pdf.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={pdf.imageSrc} alt={pdf.title} />
                          <p>{pdf.content}</p>
                        </a>
                      </Col>
                    ))}
            </Row>
          </div>
        </Tab>
      ))}
    </Tabs>
  );
}

export default TabComponent;
