import * as React from "react";
// import { Link } from "react-router-dom";
import { Modal } from "./styles";
import Backdrop from "../backdrop"

const PopUp: React.FC = (props) => {
  return (
    <div>
      <Modal>
        {props.children}
      </Modal>
      <Backdrop />
  </div>
  );
};

export default PopUp;
