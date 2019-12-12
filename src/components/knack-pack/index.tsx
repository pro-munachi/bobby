import * as React from "react";
import { Card } from './styles';

interface Props {
  imgUrl: string;
  title: string;
  subTitle: string;
}
const KnackPack: React.FC<Props> = ({ imgUrl, title, subTitle }) => {
  return (
    <Card>
      <img src={imgUrl} />
      <div className="container">
        <h3><b>{title}</b></h3><br />
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
