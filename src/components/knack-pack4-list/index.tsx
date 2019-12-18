import * as React from "react";
import { Container } from "./styles"
import Spinner from "../spinner";
import KnackPack4 from "../knack-pack4";
import { knacks4 } from "../../data/index";

const KnackList: React.FC = () => {

  return (
    <Container>
      {knacks4.map(knack => (
        <KnackPack4 key={knack.id} title={knack.title} subTitle={knack.subTitle} imgUrl={knack.imgUrl} />
      ))}
    </Container>
  );
};

export default KnackList;
