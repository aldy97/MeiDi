import React, { useEffect } from 'react';
import Navigation from './component/Navigation';
import { connect } from 'react-redux';
import { AboutImgWrapper } from './styled';

//关于美地：分页面入口
function About(props) {
  useEffect(() => {
    document.title = '关于美地';
  });

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
