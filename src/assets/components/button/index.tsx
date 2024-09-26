import React, { ReactNode } from "react";
import { Button } from "react-bootstrap";
import "./style.scss";

interface ButtonComponentProps {
  children: ReactNode;
  onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  onClick,
}) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ButtonComponent;
