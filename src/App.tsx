import React from "react";
import "./App.css";
import KnackCategories from "./components/knack-category-list";
import KnackPack from "./components/knack-pack";
import KnackPack2 from "./components/knack-pack2";
import KnackPack3 from "./components/knack-pack3";
import KnackPack4 from "./components/knack-pack4";
import Banner from "./components/banner";
import Header from "./components/header";
import Modal from "./components/modal";
import CardCarousel from "./components/card-carousel";
import SectionHead from "./components/section-head";

import { categories } from "./data";

const App: React.FC = () => {
  return (
    <div>
      <Modal>
        <h1>Modal is working</h1>
      </Modal>
      <CardCarousel />
      <Header
        height="70vh"
        title="Measure any skill. Make any decision."
        imgUrl="/assets/img/header_image.jpg"
        subTitle="Pick from our skill packs or create your own."
      />
      <KnackCategories categories={categories} />
      <SectionHead
        title="Promoted Skill Packs"
        subTitle="Some subtext that goes here and is about this length"
      />
      <KnackPack
        imgUrl="/assets/img/skills.jpg"
        title="Most in-demand skills"
        subTitle="Some sub text explaining more aboutthe skill.It should be about two lines long. Shouldbe about."
      />
      <KnackPack2
        title="Most in-demand skills"
        subTitle="Some sub text explaining more aboutthe skill.It should be about two lines long. Shouldbe about"
        imgUrl="/assets/img/entry1.jpg"
      />
      <KnackPack3
        title="Most in-demand skills"
        subTitle="Some sub text explaining more aboutthe skill.It should be about two lines long. Shouldbe about"
        imgUrl="/assets/img/startups1.jpg"
      />
      <KnackPack4
        title="Most in-demand skills"
        subTitle="Some sub text explaining more aboutthe skill.It should be about two lines long. Shouldbe about"
        imgUrl="/assets/img/startups1.jpg"
      />
      <Banner
        title="Want a customised skill pack"
        imgUrl="/assets/img/land.jpg"
        subTitle="Browse our Skill Store"
        buttonText="Take me there"
      />
    </div>
  );
};

export default App;
