import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Navbar/Banner';

const App = () => {
  return (
    <>
      {/* Navbar */}
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
        <nav>
          <Banner></Banner>
        </nav>
      </header>
    </>
  );
};

export default App;