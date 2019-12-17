import * as React from "react";
import { Container } from './styles'
import "../../App.css";
import Header from "../../components/header";
import PackHead from "../../components/section-head";
import KnackCatergory from "../../components/knack-category-list"

const KnackCatergories: React.FC = () => {

    const title ="Measure any skill. Make any decision.";
    const subTitle ="Pick from our skill packs or create your own.";
    const imgUrl ="/assets/img/header_image.jpg";
    const height ="70vh";
    const textAllign = "center"
    const cardAllign = "left"
    const tittle1 = "Explore Categories"
    const Subtitle1 = "Select a category below to start exploring"
    const tittle2= "Select a category below to start exploring"
    const Subtitle2= "Select a category below to start exploring"
  return (
    <Container>
        <Header title={title} subTitle={subTitle} imgUrl={imgUrl} height={height} />
        <div className="packs">
            <PackHead textAllign={textAllign} subTitle={Subtitle1} title={tittle1} />
            <KnackCatergory />
            <PackHead textAllign={cardAllign} subTitle={Subtitle2} title={tittle2} />
        </div>
    </Container>
  );
};

export default KnackCatergories;