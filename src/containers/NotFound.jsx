import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: white;
  div {
    text-align: center;
  }
  h1 {
    font-size: 50px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 40px;
  }
  a {
    color: white;
    border: 1px solid #fff;
    padding: 10px 30px;
    text-decoration: none;
    transition: background-color 0.4s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;
const NotFound = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <p>Oops! Something went wrong!</p>
        <Link to="/">Go Home</Link>
      </div>
    </Wrapper>
  );
};

export default NotFound;
