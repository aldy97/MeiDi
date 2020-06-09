import React from 'react';
import Swiper from './components/Swiper';
import About from './components/About';
import SelectedProjects from './components/SelectedProjects';

export default function Home() {
  return (
    <div>
      <Swiper />
      <About />
      <SelectedProjects />
    </div>
  );
}
