import React from 'react';
import Component from './Component';
import Navbar from './components/Navbar';
import Header from './components/Header';

const App = () => {

  return (
    <div>
      <h1> App <Navbar />
      <Header/>
      </h1>
    </div>
  );
};

export default App;