import React from 'react';
import { SelectedProjectsWrapper } from '../style';
import SingleProject from './SingleProject';
import { connect } from 'react-redux';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function SelectedProjects(props) {
  return (
    <SelectedProjectsWrapper>
      <div className='sectionTitle'>精品项目</div>
      <Carousel arrows slidesPerPage={3}>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
        <SingleProject></SingleProject>
      </Carousel>
    </SelectedProjectsWrapper>
  );
}

const mapState = (state) => {};

export default connect(mapState, null)(SelectedProjects);
