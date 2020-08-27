import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  h3 {
    background: #8f57fd;
    color: white;
    font-size: 16px;
    margin-top: -16px;
    position: absolute;
    padding-left: 30px;
    width: 100%;
  }
`;

const Categories = ({ children, title }) => (
  <Wrapper>
    <h3>{title}</h3>
    {children}
  </Wrapper>
);
export default Categories;
