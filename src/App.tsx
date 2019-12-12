import React from 'react';
import logo from './logo.svg';
import './App.css';
import KnackCategory from './components/knack-category';
import KnackPack from './components/knack-pack';
import KnackPack2 from './components/knack-pack2';
import KnackPack3 from './components/knack-pack3';
import KnackPack4 from './components/knack-pack4';

const App: React.FC = () => {
  return (
    <div>
      <KnackCategory imgUrl='/assets/img/people.png' title='Skills' link='/' />
      <KnackPack imgUrl='/assets/img/skills.jpg' title='Most in-demand skills' subTitle='Some sub text explaining more aboutthe skill.It should be about two lines long. Shouldbe about.' />
      <KnackPack2 title='Most in-demand skills' subTitle="Some sub text explaining more aboutthe skill.It should be about two lines long. Shouldbe about" imgUrl='/assets/img/entry1.jpg' />
      <KnackPack3 title='Most in-demand skills' subTitle="Some sub text explaining more aboutthe skill.It should be about two lines long. Shouldbe about" imgUrl='/assets/img/startups1.jpg' />
      <KnackPack4 title='Most in-demand skills' subTitle="Some sub text explaining more aboutthe skill.It should be about two lines long. Shouldbe about" imgUrl='/assets/img/startups1.jpg' />
    </div>
  );
}

export default App;
