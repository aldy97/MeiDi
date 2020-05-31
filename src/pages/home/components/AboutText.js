import React from 'react';
import { connect } from 'react-redux';
import { AboutTextWrapper } from '../style';

//三大业务导航所对应的图片加简介
function AboutText(props) {
  return (
    <AboutTextWrapper>
      <div className='textWrapper'>
        <div className='text'>{props.aboutInfoList[props.index].desc}</div>
      </div>
      <img
        className='background'
        src={props.aboutInfoList[props.index].imgURL}
      />
    </AboutTextWrapper>
  );
}

const mapState = (state) => {
  return {
    aboutInfoList: state.getIn(['home', 'aboutInfoList']),
  };
};

export default connect(mapState, null)(AboutText);
