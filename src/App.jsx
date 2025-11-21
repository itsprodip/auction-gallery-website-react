import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Navbar/Banner';
import Main from './Components/Main/Main';

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
      {/* Main section */}
      <main className="bg-[#ebf0f5]">
        <Main></Main>
      </main>
    </>
  );
};

export default App;