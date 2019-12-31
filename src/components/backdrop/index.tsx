import * as React from "react";
// import { Link } from "react-router-dom";
import { BackDrop } from "./styles";

interface Props {
  closeModal: any;
}

const Backdrop: React.FC<Props> = ({ closeModal }) => {
  return (
  <BackDrop onClick={closeModal} >
  </BackDrop>
  );
};

export default Backdrop;
