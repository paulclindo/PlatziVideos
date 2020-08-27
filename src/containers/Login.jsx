import React from 'react';
import styled from 'styled-components';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginSection = styled.section`
  background-image: linear-gradient(#21c08b, #8f57fd);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 60px 30px;
  min-height: calc(100vh - 200px); /* El ancho será igual al tamaño de todo el height menos 200px (100px del header + 100px del footer) */
`;
const LoginContainer = styled.section`
  background-color: rgba(255,255,255,0.1);
  /* border: 2px solid white; */
  border-radius: 40px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 700px;
  padding: 60px 60px 40px;
  max-width: 480px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  input:not([type="checkbox"]) {
    background-color: transparent;
    border-bottom: 2px solid white;
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    color: white;
    font-family: 'Muli', sans-serif;
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
  input[type= 'checkbox']{
    appearance: none;
    background-color: #fafafa;
    border: 1px solid #cacece;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
    padding: 9px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
    :checked {
    background-color: #e9ecee;
    border: 1px solid #adb8c0;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
    color: #99a1a7;
  }
  }
  label {
    font-size: 14px;
  }
`;

const RememberMe = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  a {
    color: white;
    font-size: 14px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
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
  font-family: 'Muli', sans-serif;
  height: 50px;
  letter-spacing: 1px;
  margin: 10px 0px;
`;

const SocialMedia = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  margin-bottom: 10px;
  button + button {
    margin-top: 10px;
  }
  button {
    display: flex;
    border: none;
    cursor: pointer;
    background: none;
    align-items: center;
    color: white;
  }
  img {
    margin-right: 10px;
    width: 30px;
  }
`;

const RegisterSection = styled.div`
  font-size: 14px;
  a {
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-left: 10px;
    /* text-decoration: none; */
  }
`;

const Login = (props) => {
  return (
    <>
      <Header transparent />
      <LoginSection>
        <LoginContainer>
          <h2>Inicia sesión</h2>
          <LoginForm>
            <input type='text' placeholder='Correo' />
            <input type='password' placeholder='Contraseña' />
            <Button type='button'>Iniciar sesión</Button>
            <RememberMe>
              <label htmlFor='cbox1'>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </RememberMe>
          </LoginForm>
          <SocialMedia>
            <button type='button'>
              <img src={googleIcon} alt='' />
                Inicia sesión con Google
            </button>
            <button type='button'>
              <img src={twitterIcon} alt='' />
              Inicia sesión con Twitter
            </button>
          </SocialMedia>
          <RegisterSection>
            No tienes ninguna cuenta
            <a href='htttps://google.com'>Regístrate</a>
          </RegisterSection>
        </LoginContainer>
      </LoginSection>
      <Footer />
    </>
  );
};

export default Login;
