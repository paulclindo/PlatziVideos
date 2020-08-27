import React from 'react';
import styled from 'styled-components';

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
  font-family: 'Muli', sans-serif;
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

const Search = () => (
  <Container>
    <h2>¿Qué quieres ver hoy?</h2>
    <SearchInput type='text' placeholder='Buscar...' />
  </Container>
);

export default Search;
