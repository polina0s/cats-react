import { useState } from 'react';
import './main.scss';
import Navigation from './components/navigation/navigation';
import Header from './components/header/header';

function App() {
  return (
    <>
      <Header />
      <Navigation />
    </>
  );
}

export default App;
