import * as React from "react";
import { Container } from "./styles"
import Spinner from "../spinner";
import KnackPack1 from "../knack-pack1";
import { knacks2 } from "../../data/index";

const KnackList: React.FC = () => {

  return (
    <Container>
      {knacks2.map(knack => (
        <KnackPack1 key={knack.id} title={knack.title} subTitle={knack.subTitle} imgUrl={knack.imgUrl} />
      ))}
    </Container>
  );
};

export default KnackList;
