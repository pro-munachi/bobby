import * as React from "react";
import { Card } from './styles';
import  Modal from '../modal';
import  PackPop from '../card-pop-up';

interface Props {
  imgUrl: string;
  title: string;
  subTitle: string;
}
const KnackPack4: React.FC<Props> = ({ imgUrl, title, subTitle }) => {

  let [modal, setModal] = React.useState(false);

  const openModal = () => {
    setModal(modal = true);
  }

  const closeModal = () => {
    setModal(modal = false);
  }

  return (
    <Card>
      {/* {modal &&
        <Modal>
          <PackPop closeModal={closeModal} />
      </Modal>
      } */}
      <img onClick={openModal} src={imgUrl} />
      <div className="container">
        <div className="footer">
          <img className="share" src="/assets/icon/share.svg" />
          <span className="icon_text">1000 Recommendations</span><br /><br />
          <p>{subTitle}</p>
          {/* <img className="icon" src="/assets/icon/heart.png" />&nbsp; */}
          {/* <span className="icon_text">1000 likes</span> */}
        </div>
      </div>
    </Card>
  );
};

export default KnackPack4;
