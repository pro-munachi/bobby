import * as React from "react";
import { Container } from './styles'
import "../../App.css";
import Header from "../../components/header";
import PackHead from "../../components/section-head";
import KnackCatergory from "../../components/knack-category-list";
import KnackPack1 from "../../components/knack-pack-list";
import KnackPack2 from "../../components/knack-pack2-list";
import KnackPack3 from "../../components/knack-pack3-list";
import KnackPack4 from "../../components/knack-pack4-list";
import Banner from "../../components/banner";

const KnackCatergories: React.FC = () => {

    const title ="Measure any skill. Make any decision.";
    const subTitle ="Pick from our skill packs or create your own.";
    const imgUrl ="/assets/img/header_image.jpg";
    const height ="70vh";
    const textAllign = "center"
    const cardAllign = "left"
    const tittle1 = "Explore Categories"
    const Subtitle1 = "Select a category below to start exploring"
    const tittle2= "Promoted Skill Packs"
    const tittle3= "Recommended Skill Packs"
    const tittle4= "Trending Skill Packs"
    const tittle5= "Entry Level Skill Packs"
    const tittle6 = "Skill Packs for Startups"
    const tittle7 = "Skill Packs for Innovative Advantage"
    const tittle8 = "Skill Packs for 21st Century Digital Businesses"
    const tittle9 = "Foundational Skill Packs"
    const tittle10 = "Skill Packs for Winning Teams"
    const tittle11 = "Skill Packs for Junior Management"
    const Subtitle2= "Some subtext that goes here and is about this length"
  return (
    <Container>
        <Header title={title} subTitle={subTitle} imgUrl={imgUrl} height={height} />
        <div className="packs">
            <PackHead textAllign={textAllign} subTitle={Subtitle1} title={tittle1} />
            <KnackCatergory />

            <PackHead textAllign={cardAllign} subTitle={Subtitle2} title={tittle2} />
            <KnackPack1 />

            <PackHead textAllign={cardAllign} subTitle={Subtitle2} title={tittle3} />
            <KnackPack1 />

            <PackHead textAllign={cardAllign} subTitle={Subtitle2} title={tittle4} />
            <KnackPack1 />

            <Banner
                title="Want a customised skill pack"
                imgUrl="/assets/img/land.jpg"
                subTitle="Browse our Skill Store"
                buttonText="Take me there"
            />


            <PackHead textAllign={cardAllign} subTitle={Subtitle2} title={tittle5} />
            <KnackPack2 />

            <PackHead textAllign={cardAllign} subTitle={Subtitle2} title={tittle6} />
            <KnackPack3 /><br /><br />
            <KnackPack3 />

            <PackHead textAllign={cardAllign} subTitle={Subtitle2} title={tittle7} />
            <KnackPack2 />

            <Banner
                title="Want a customised skill pack"
                imgUrl="/assets/img/land.jpg"
                subTitle="Browse our Skill Store"
                buttonText="Take me there"
            />

            <PackHead textAllign={cardAllign} subTitle={Subtitle2} title={tittle8} />
            <KnackPack1 />

            <PackHead textAllign={cardAllign} subTitle={Subtitle2} title={tittle9} />
            <KnackPack4 />

            <PackHead textAllign={cardAllign} subTitle={Subtitle2} title={tittle10} />
            <KnackPack4 />


            <Banner
                title="Want a customised skill pack"
                imgUrl="/assets/img/land.jpg"
                subTitle="Browse our Skill Store"
                buttonText="Take me there"
            />

            <PackHead textAllign={cardAllign} subTitle={Subtitle2} title={tittle11} />
            <KnackPack1 />            
        </div>
    </Container>
  );
};

export default KnackCatergories;