import * as React from "react";
// import { Link } from "react-router-dom";
import { Container } from "./styles";

interface Props {
  imgUrl: string;
  title: string;
  link: string;
}

const KnackCategory: React.FC<Props> = ({ imgUrl, title, link }) => {
  return (
    // <a href={link}>
    //   <Container img={imgUrl}>
    //     <h3>{title}</h3>
    //   </Container>
      
    // </a>
  <Container img={imgUrl}>
    <img src={imgUrl} />
    <div className="centered"><h2>{title}</h2></div>
  </Container>
  );
};

export default KnackCategory;
