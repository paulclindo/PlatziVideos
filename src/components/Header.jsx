import React from 'react';
import styled from 'styled-components';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const WrapperHeader = styled.header`
  align-items: center;
  background: ${(props) => (props.transparent ? 'transparent' : '#8f57fd')};
  color: white;
  display: flex;
  height: 100px;
  justify-content: space-between;
  top: 0px;
  width: 100%;
  position:absolute;
`;
const LogoImg = styled.img`
   margin-left: 30px;
  width: 200px;
`;
const Menu = styled.div`
  margin-right: 30px;
  &:hover ul{
    display: block;
  }
  ul {
    display: none;
    list-style: none;
    margin: 0px 0px 0px -14px;
    padding: 0px;
    position: absolute;
    width: 100px;
    text-align: right;
    &:hover {
      display: block;
    }
    li {
      margin: 10px 0px;
      a {
        color: white;
      text-decoration: none;
      }
      &:hover {
      text-decoration: underline;
      }
    }
  }
`;
const ProfileCard = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  img {
    margin-right: 8px;
    width: 40px;
  }
`;
const Header = ({
  transparent,
}) => (
  <WrapperHeader transparent={transparent}>
    <LogoImg src={logo} alt='Platzi Video' />
    <Menu>
      <ProfileCard>
        <img src={userIcon} alt='' />
        <p>Perfil</p>
      </ProfileCard>
      <ul>
        <li>
          <a href='/'>Cuenta</a>
        </li>
        <li>
          <a href='/'>Cerrar Sesión</a>
        </li>
      </ul>
    </Menu>
  </WrapperHeader>
);

export default Header;
