import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import * as routes from "../routes/routes";
import userIcon from "../assets/static/user-icon.png";
import { gravatar } from "../utils/gravatar";
import { logoutRequest } from "../actions";

const WrapperHeader = styled.header`
  align-items: center;
  background: ${(props) => (props.transparent ? "transparent" : "#8f57fd")};
  color: white;
  display: flex;
  height: 100px;
  justify-content: space-between;
  top: 0px;
  width: 100%;
  position: absolute;
`;
const LogoImg = styled.img`
  margin-left: 30px;
  width: 200px;
`;
const Menu = styled.div`
  margin-right: 30px;
  &:hover ul {
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
    object-fit: cover;
    border-radius: 50%;
  }
`;
const Header = ({ transparent, user, logoutRequest }) => (
  <WrapperHeader transparent={transparent}>
    <Link to={routes.home}>
      <LogoImg src={logo} alt="Platzi Video" />
    </Link>
    <Menu>
      <ProfileCard>
        {user && user.email ? (
          <img src={gravatar(user.email)} alt="" />
        ) : (
          <img src={userIcon} alt="" />
        )}
        <p>Perfil</p>
      </ProfileCard>
      <ul>
        {user && user.email ? (
          <>
            <li>
              <a href="/">Cuenta</a>
            </li>
            <li onClick={() => logoutRequest({})}>
              <a href="/">Cerrar Sesión</a>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>
        )}
      </ul>
    </Menu>
  </WrapperHeader>
);

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  logoutRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
