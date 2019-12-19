import * as React from "react";
import { Card } from "./styles";
import  Modal from '../modal';
import  PackPop from '../card-pop-up';



interface Props {
  imgUrl: string;
  title: string;
  subTitle: string;
}
const KnackPack2: React.FC<Props> = ({ imgUrl, title, subTitle }) => {

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
          <PackPop closeModal={closeModal} />
        </Modal>
      }
      <div className="card">
        <img onClick={openModal} className="img" src={imgUrl} alt="" />
        <div className="b_text">
          <p>
            <span className="content1">{title}</span>
            <br />
            <span className="content2">{subTitle}</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default KnackPack2;
