import * as React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

interface Props {
  imgUrl: string;
  title: string;
  link: string;
}

const KnackCategory: React.FC<Props> = ({ imgUrl, title, link }) => {
  return (
    <Link to={link}>
      <Container img={imgUrl}>
        <h3>{title}</h3>
      </Container>
    </Link>
  );
};

export default KnackCategory;
