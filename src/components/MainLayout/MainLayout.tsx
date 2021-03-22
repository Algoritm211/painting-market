import React from 'react';
import Header from '../Header/Header';
import PaintingsContainer from "../PaintingsContainer/PaintingsContainer";

const MainLayout = () => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
       <PaintingsContainer />
      </main>
      <footer>
        Footer
      </footer>
    </React.Fragment>
  );
};

export default MainLayout;
