import React from 'react';
import logo from './logo.svg';
import './App.css';
import KnackCategory from './components/knack-category';
import KnackPack from './components/knack-pack';
import KnackPack2 from './components/knack-pack2';
import KnackPack3 from './components/knack-pack3';
import KnackPack4 from './components/knack-pack4';
import Banner from './components/banner';
import Header from './components/header';

const App: React.FC = () => {
  return (
    <div>
      <Header height="70vh" title='Measure any skill. Make any decision.' imgUrl='/assets/img/header_image.jpg' subTitle='Pick from our skill packs or create your own.' />
      <KnackCategory imgUrl='/assets/img/people.png' title='Skills' link='/' />
      <KnackPack imgUrl='/assets/img/skills.jpg' title='Most in-demand skills' subTitle='Some sub text explaining more aboutthe skill.It should be about two lines long. Shouldbe about.' />
      <KnackPack2 title='Most in-demand skills' subTitle="Some sub text explaining more aboutthe skill.It should be about two lines long. Shouldbe about" imgUrl='/assets/img/entry1.jpg' />
      <KnackPack3 title='Most in-demand skills' subTitle="Some sub text explaining more aboutthe skill.It should be about two lines long. Shouldbe about" imgUrl='/assets/img/startups1.jpg' />
      <KnackPack4 title='Most in-demand skills' subTitle="Some sub text explaining more aboutthe skill.It should be about two lines long. Shouldbe about" imgUrl='/assets/img/startups1.jpg' />
      <Banner title='Want a customised skill pack' imgUrl='/assets/img/land.jpg' subTitle='Browse our Skill Store' buttonText="Take me there" />
    </div>
  );
}

export default App;
