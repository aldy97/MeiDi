import React from 'react';
import { SelectedProjectsWrapper } from '../style';
import SingleProject from './SingleProject';
import { connect } from 'react-redux';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

//首页精品项目区块
function SelectedProjects(props) {
  return (
    <SelectedProjectsWrapper>
      <div
        className='sectiontitle'
        onClick={() => {
          window.location.href = '/project/?value=0';
        }}
      >
        精品项目
      </div>
      <Carousel arrows infinite slidesPerPage={3}>
        {props.projectList.map((item) => {
          return (
            <SingleProject
              imgURL={item.imgURL}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </Carousel>
    </SelectedProjectsWrapper>
  );
}

const mapState = (state) => {
  return {
    projectList: state.getIn(['home', 'projectList']),
  };
};

export default connect(mapState, null)(SelectedProjects);
