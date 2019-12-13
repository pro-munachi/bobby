import * as React from "react";
// import { Link } from "react-router-dom";
import { Container } from "./styles";

const Header: React.FC = () => {
  return (
  <Container>
    <div className="header">
    <div className="header__logo">
        <a>
            <span className="logo">KnackApp</span>
        </a>
    </div>
    <div className="header__navs">
        <ul className="menu">
            <li><a>Home</a><span className="isactive"></span></li>
            <li className="dropdown"><a>Explore</a><span className="isactive"></span></li>
            <li><a>Help</a><span className="isactive"></span></li>
            <li><a href="https://www.knackapp.com/" target="_blank">Website</a><span className="isactive"></span></li>
            <li><a className="bold">Login</a></li>
            <li><a className="button outline bold">Sign Up</a></li>
        </ul>
    </div>
</div>
  </Container>
  );
};

export default Header;
