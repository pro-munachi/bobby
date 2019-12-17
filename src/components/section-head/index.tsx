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
      <h1 className="main">{title}</h1>
      <h2 className="sub">{subTitle}</h2>
    </Section>
  );
};

export default PopUp;
