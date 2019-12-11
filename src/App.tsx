import React from 'react';
import logo from './logo.svg';
import './App.css';
import KnackCategory from './components/knack-category';

const App: React.FC = () => {
  return (
    <div>
      <KnackCategory imgUrl='/assets/img/skills.jpg' title='kfjk' link='kjhbjh' />
    </div>
  );
}

export default App;
