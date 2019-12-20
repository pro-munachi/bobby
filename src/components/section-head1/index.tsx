import * as React from "react";
import { Section } from "./styles";

interface Props {
  subTitle: string;
  title: string;
  textAllign: string;
}

const PopUp: React.FC<Props> = ({ title, subTitle, textAllign }) => {
  return (
    <Section textAllign={textAllign}>
      <h2 className="bodyHead"><b>{title}</b></h2>
      <h3 className="subhead">{subTitle}</h3>
    </Section>
  );
};

export default PopUp;
