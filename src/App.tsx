import React from 'react';
import logo from './logo.svg';
import './App.css';
import KnackCategory from './components/knack-category';
import KnackPack from './components/knack-pack';

const App: React.FC = () => {
  return (
    <div>
      <KnackCategory imgUrl='/assets/img/people.png' title='Skiils' link='/' />
      <KnackPack imgUrl='/assets/img/skills.jpg' title='Most in-demand skills' subTitle='Some sub text explaining more aboutthe skill.It should be about two lines long. Shouldbe about.' />
    </div>
  );
}

export default App;
