import * as React from "react";
// import { Link } from "react-router-dom";
import { Modal } from "./styles";
import Backdrop from "../backdrop";

interface Props {
  closeModal: any;
}

const PopUp: React.FC<Props> = (props) => {
  return (
    <div>
      <Modal>
        {props.children}
      </Modal>
      <Backdrop closeModal={props.closeModal} />
  </div>
  );
};

export default PopUp;
