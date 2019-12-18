import * as React from "react";
import { Container } from "./styles"
import Spinner from "../spinner";
import KnackPack2 from "../knack-pack2";
import { knacks2 } from "../../data/index";

const KnackList: React.FC = () => {

  return (
    <Container>
      {knacks2.map(knack => (
        <KnackPack2 key={knack.id} title={knack.title} subTitle={knack.subTitle} imgUrl={knack.imgUrl} />
      ))}
    </Container>
  );
};

export default KnackList;
