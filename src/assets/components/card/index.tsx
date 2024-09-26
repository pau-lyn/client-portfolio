import React from "react";
import Card from "react-bootstrap/Card";

import "./style.scss";

interface CardComponentProps {
  title?: string;
  text?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, text }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center pb-2">
          <div>Icon</div>
          <div className="text-end">{title}</div>
        </Card.Title>
        <Card.Text className="text-end py-2">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
