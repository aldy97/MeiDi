import React, { useState } from 'react';
import Swiper from './components/Swiper';
import About from './components/About';
import SelectedProjects from './components/SelectedProjects';

function Home() {
  return (
    <div>
      <Swiper />
      <About />
      <SelectedProjects />
    </div>
  );
}

export default Home;
