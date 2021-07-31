import React from "react";
import * as S from "./styles";

const Button = ({ children, onClick, disabled, ...otherProps }) => {
  return (
    <S.Button onClick={onClick} disabled={disabled} {...otherProps}>
      {children}
    </S.Button>
  );
};

export default Button;
