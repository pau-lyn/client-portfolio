import React, { ReactNode } from "react";
import { Button } from "react-bootstrap";
import "./style.scss";

interface ButtonComponentProps {
  children: ReactNode;
  onClick?: () => void;
  classname?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  onClick,
  classname,
}) => {
  return (
    <Button className={classname} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
