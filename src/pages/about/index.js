import React from 'react';
import Navigation from './component/Navigation';
import { connect } from 'react-redux';
import { AboutImgWrapper } from './styled';

//关于美地：分页面
function About(props) {
  return (
    <div>
      <AboutImgWrapper>
        <img alt='' className='aboutImg' src={props.aboutImg} />
      </AboutImgWrapper>
      <Navigation />
    </div>
  );
}

const mapState = (state) => {
  return {
    aboutImg: state.getIn(['about', 'aboutImg']),
  };
};

export default connect(mapState, null)(About);
