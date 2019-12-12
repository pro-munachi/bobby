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

export default KnackPack;
