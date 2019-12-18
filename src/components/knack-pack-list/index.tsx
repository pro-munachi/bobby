import * as React from "react";
import { Container } from "./styles"
import Spinner from "../../components/spinner";
import KnackPack from "../../components/knack-pack";
import { knacks } from "../../data/index";

const KnackList: React.FC = () => {

  return (
    <Container>
      {knacks.map(knack => (
        <KnackPack key={knack.id} title={knack.title} subTitle={knack.subTitle} imgUrl={knack.imgUrl} />
      ))}
    </Container>
  );
};

export default KnackList;
