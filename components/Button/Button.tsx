import styled from "styled-components";
import { MouseEventHandler } from "react";

type ButtonType = "primary" | "secondary" | "alternative";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  buttonType: ButtonType;
  title?: string;
  fontWeight?: "bold" | undefined;
  color?: string;
  backgroundColor?: string;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement> & Function;
}

const Button = ({
  title,
  fontWeight,
  color,
  backgroundColor,
  buttonType,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      style={{ color, backgroundColor, fontWeight }}
      buttonType={buttonType}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  width: 200px;
  height: 60px;
  border-radius: ${(props) =>
    props.buttonType === "primary" ? "5px" : "10px"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  color: white;
  background-color: red;
  outline: none;
  border: 1px solid grey;
`;

export default Button;
