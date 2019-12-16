import * as React from "react";
import { Card } from './styles';

interface Props {
  imgUrl: string;
  title: string;
  subTitle: string;
}
const KnackPack3: React.FC<Props> = ({ imgUrl, title, subTitle }) => {
  return (
    <Card>
      <img src={imgUrl} />
      <div className="container">
        <h1><b>{title}</b></h1><br />
        <div className="p">{subTitle}</div><br />
        <div className="footer">
          <img className="share" src="/assets/icon/share.svg" />
          <span className="icon_text">1000 likes</span>
        </div>
      </div>
    </Card>
  );
};

export default KnackPack3;
