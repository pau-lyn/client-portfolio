import { useState } from "react";
import ButtonComponent from "../button";
import { Row, Col } from "react-bootstrap";
import CardComponent from "../card";
import "./style.scss";

function AboutContent() {
  const [isPersonalInfoVisible, setPersonalInfoVisible] = useState(true);
  const togglePersonalInfo = () => {
    setPersonalInfoVisible((prev) => !prev);
  };

  return (
    <div id="about" className="about">
      <div className="top d-flex justify-content-between mb-3">
        <h3>About Me</h3>
        <ButtonComponent onClick={togglePersonalInfo}>
          {isPersonalInfoVisible
            ? "Hide Personal Information"
            : "Show Personal Information"}
        </ButtonComponent>
      </div>
      <div
        className={`personal-info ${isPersonalInfoVisible ? "visible" : ""}`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        dignissim nisi et sollicitudin accumsan. Duis convallis, velit mattis
        imperdiet semper, eros urna volutpat elit, eu pulvinar libero nisl nec
        justo. Aliquam dapibus malesuada massa, quis scelerisque odio pulvinar
        in. Nullam gravida sapien quis bibendum tincidunt. Integer et nisi
        tincidunt, condimentum libero fermentum, feugiat sem. Nunc venenatis sit
        amet massa non commodo. Cras tincidunt arcu sit amet nisl tincidunt, sed
        euismod quam molestie. Suspendisse egestas egestas lectus vitae
        malesuada.
      </div>
      <div
        className={`what-im-doing ${!isPersonalInfoVisible ? "expanded" : ""}`}
      >
        <h5 className="mb-3">What I am doing</h5>
        <div className="services">
          <Row>
            <Col lg={3} xs={12}>
              <CardComponent
                title="UI/UX Designer"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        dignissim nisi et sollicitudin accumsan."
              />
            </Col>
            <Col lg={3} xs={12}>
              <CardComponent
                title="UI/UX Designer"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        dignissim nisi et sollicitudin accumsan."
              />
            </Col>
            <Col lg={3} xs={12}>
              <CardComponent
                title="UI/UX Designer"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        dignissim nisi et sollicitudin accumsan."
              />
            </Col>
            <Col lg={3} xs={12}>
              <CardComponent
                title="UI/UX Designer"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        dignissim nisi et sollicitudin accumsan."
              />
            </Col>
            <Col lg={3} xs={12}>
              <CardComponent
                title="UI/UX Designer"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        dignissim nisi et sollicitudin accumsan."
              />
            </Col>
            <Col lg={3} xs={12}>
              <CardComponent
                title="UI/UX Designer"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        dignissim nisi et sollicitudin accumsan."
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
