import React, { useState } from 'react';
import Swiper from './components/Swiper';
import { connect } from 'react-redux';

function Home(props) {
  return <Swiper></Swiper>;
}

export default connect(null, null)(Home);
