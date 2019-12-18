import * as React from "react";
import { Container } from "./styles"
import Spinner from "../spinner";
import KnackPack3 from "../knack-pack3";
import { knacks3 } from "../../data/index";

const KnackList: React.FC = () => {

  return (
    <Container>
      {knacks3.map(knack => (
        <KnackPack3 key={knack.id} title={knack.title} subTitle={knack.subTitle} imgUrl={knack.imgUrl} />
      ))}
    </Container>
  );
};

export default KnackList;
