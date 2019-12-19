import * as React from "react";
import { useState } from 'react';
import { Card } from "./styles";
import  Modal from '../modal';
import { ReactComponent as ShareButton } from "../../assets/icons/share.svg";

interface Props {
  imgUrl: string;
  title: string;
  subTitle: string;
}
const KnackPack3: React.FC<Props> = ({ imgUrl, title, subTitle }) => {

  let [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(modal = true);
  }

  const closeModal = () => {
    setModal(modal = false);
  }

  return (
    <Card>
      {modal &&
        <Modal>
        <h2 onClick={closeModal} style={{float: "right"}}>X</h2>
        card modal working
      </Modal>
      }
      <img onClick={openModal} src={imgUrl} alt='' />
      <div className="container">
        <h1>
          <b>{title}</b>
        </h1>
        <br />
        <div className="p">{subTitle}</div>
        <br />
        <div className="footer">
          <ShareButton className="share" />
          <span className="icon_text">1000 likes</span>
        </div>
      </div>
    </Card>
  );
};

export default KnackPack3;
