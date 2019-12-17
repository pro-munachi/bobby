import * as React from "react";
import { Card } from "./styles";

interface Props {
  imgUrl: string;
  title: string;
  subTitle: string;
}
const KnackPack2: React.FC<Props> = ({ imgUrl, title, subTitle }) => {
  return (
    <Card>
      <div className="card">
        <img className="img" src={imgUrl} alt="" />
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
