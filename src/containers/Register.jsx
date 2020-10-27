import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import * as routes from "../routes/routes";
import { registerRequest } from "../actions";

const RegisterContainer = styled.section`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 40px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 700px;
  padding: 60px 60px 40px;
  min-width: 400px;
  a {
    color: white;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  input:not([type="checkbox"]) {
    background-color: transparent;
    border-bottom: 2px solid white;
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    color: white;
    font-family: "Muli", sans-serif;
    font-size: 16px;
    height: 50px;
    margin-bottom: 20px;
    outline: none;
    padding: 0px20px;
    min-width: 100%;
    ::placeholder {
      color: white;
    }
  }
  input[type="checkbox"] {
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #cacece;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
    :checked {
      background-color: #e9ecee;
      border: 1px solid #adb8c0;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
        inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
        inset 15px 10px -12px rgba(255, 255, 255, 0.1);
      color: #99a1a7;
    }
  }
  label {
    font-size: 14px;
  }
`;

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  font-family: "Muli", sans-serif;
  height: 50px;
  letter-spacing: 1px;
  margin: 10px 0px;
`;

const Register = ({ registerRequest }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const history = useHistory();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerRequest(formData);
    history.push(routes.home);
  };

  return (
    <RegisterContainer>
      <h2>Regístrate</h2>
      <RegisterForm onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          className="input"
          type="text"
          value={email}
          name="email"
          onChange={handleChange}
          placeholder="Correo"
        />
        <input
          className="input"
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          placeholder="Contraseña"
        />
        <Button type="submit" className="button">
          Registrarme
        </Button>
      </RegisterForm>
      <Link to={routes.login}>Iniciar sesión</Link>
    </RegisterContainer>
  );
};
const mapDispatchToProps = {
  registerRequest,
};
export default connect(null, mapDispatchToProps)(Register);
