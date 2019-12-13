import * as React from "react";
// import { Link } from "react-router-dom";
import { Container } from "./styles";
import NavBar from "../nav-bar/index";

interface Props {
  imgUrl: string;
  title: string;
  subTitle: string;
  height: string;
}

const Header: React.FC<Props> = ({ imgUrl, title, subTitle, height }) => {
  return (
  <Container img={imgUrl} height={height}>
    <NavBar />
    <div className="header_text">
        <h1 className="header__bold">{title}</h1>
        <h1 className="header__small">{subTitle}</h1>
    </div>
  </Container>
  );
};

export default Header;
