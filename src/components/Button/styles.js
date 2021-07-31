import styled, { css } from "styled-components";

const Button = styled.button`
  outline: none;
  cursor: pointer;
  font-weight: normal;
  font-size: 20px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  ${(props) =>
    props.disabled &&
    css`
      background: #7e8190;
      cursor: not-allowed;
    `};
`;

export { Button };
