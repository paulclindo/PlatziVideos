import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  align-items: center;
  display: flex;
  height: 100px;
  width: 100%;
  a {
    color: white;
    cursor: pointer;
    font-size: 14px;
    padding-left: 30px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <a href="/">Terminos de uso</a>
    <a href="/">Declaración de privacidad</a>
    <a href="/">Centro de ayuda</a>
  </FooterWrapper>
);

export default Footer;
