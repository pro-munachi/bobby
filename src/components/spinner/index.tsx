import * as React from "react";
// import { Link } from "react-router-dom";
import { Container } from "./styles";

const Spinner: React.FC = () => {
  return (
  <Container>
      <div className="loader"></div>
  </Container>
  );
};

export default Spinner;
