import React from "react";
import styled from "styled-components";
import Header from "../Header";

const Section = styled.section`
  background-image: linear-gradient(#21c08b, #8f57fd);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 60px 30px 0;
`;

const SimpleLayout = ({ children }) => {
  return (
    <>
      <Header transparent />
      <Section>{children}</Section>
    </>
  );
};
export default SimpleLayout;
