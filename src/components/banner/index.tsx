import * as React from "react";
// import { Link } from "react-router-dom";
import { Container } from "./styles";

interface Props {
  imgUrl: string;
  title: string;
  subTitle: string;
  buttonText: string;
}

const Banner: React.FC<Props> = ({ imgUrl, title, subTitle, buttonText }) => {
  return (
  <Container img={imgUrl}>
    <div className="container">
        <div className="textSide">
            <h1 className="title">{title}</h1>
            <h2 className="sub">{subTitle}</h2>
        </div>
        <div className="buttonSide">
            <button className="cta-button">
            {buttonText}
            </button>
        </div>
    </div>
  </Container>
  );
};

export default Banner;
