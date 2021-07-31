import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 20px;
  ${(props) =>
    props.user === "gaby" &&
    css`
      background-color: red;
      padding: 50px;
      margin-top: 20px;
    `}
`;

export const Title = styled.p`
  letter-spacing: 1em;
`;

export const Barrinha = styled.div`
  width: 30px;
  height: 30px;
  background: violet;
  margin: 20px;
`;
