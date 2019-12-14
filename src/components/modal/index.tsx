import * as React from "react";
// import { Link } from "react-router-dom";
import { Modal } from "./styles";

const PopUp: React.FC = (props) => {
  return (
  <Modal>
    {props.children}
    <h1>Modal is working</h1>
  </Modal>
  );
};

export default PopUp;
