import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { searchVideo } from "../actions";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 300px;
  border-radius: 0px 0px 40px 40px;
  h2 {
    color: white;
    font-size: 25px;
  }
`;

const SearchInput = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid white;
  border-radius: 25px;
  color: white;
  font-family: "Muli", sans-serif;
  font-size: 16px;
  height: 50px;
  margin-bottom: 20px;
  outline: none;
  padding: 0px 20px;
  ::placeholder {
    color: white;
  }
  width: 70%;
`;

const Search = ({ searchVideo }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    searchVideo(value);
  };
  return (
    <Container>
      <h2>¿Qué quieres ver hoy?</h2>
      <SearchInput
        value={searchValue}
        onChange={handleChange}
        type="text"
        placeholder="Buscar..."
      />
    </Container>
  );
};
const mapDispatchToProps = {
  searchVideo,
};
export default connect(null, mapDispatchToProps)(Search);
