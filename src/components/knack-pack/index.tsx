import * as React from "react";
import { Card } from './styles';
import  Modal from '../modal';

interface Props {
  imgUrl: string;
  title: string;
  subTitle: string;
}
const KnackPack: React.FC<Props> = ({ imgUrl, title, subTitle }) => {

  let [modal, setModal] = React.useState(false);

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
      <img onClick={openModal} src={imgUrl} />
      <div className="container">
        <h1><b>{title}</b></h1><br />
        <p>{subTitle}</p><br />
        <div className="footer">
          <img className="share" src="/assets/icon/share.svg" />
          <img className="icon" src="/assets/icon/heart.png" />&nbsp;
          <span className="icon_text">1000 likes</span>
        </div>
      </div>
    </Card>
  );
};

export default KnackPack;
