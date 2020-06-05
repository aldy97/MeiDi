import React, { useState } from 'react';
import { connect } from 'react-redux';
import AboutText from './AboutText';
import {
  AboutWrapper,
  AboutNavWrapper,
  NavItemWrapper,
  AboutNavItem,
} from '../style';

//位于轮播图正下方的三大业务领域
function About(props) {
  const [index, setIndex] = useState(0);

  return (
    <AboutWrapper>
      <AboutNavWrapper>
        <NavItemWrapper>
          {props.aboutInfoList.map((item, i) => {
            return (
              <AboutNavItem
                className='aboutnavitem'
                onMouseEnter={() => {
                  setIndex(item.id);
                }}
                onClick={() => {
                  window.location.href = `/field?value=${i}`;
                }}
              >
                {item.title}
              </AboutNavItem>
            );
          })}
        </NavItemWrapper>
      </AboutNavWrapper>
      <AboutText index={index}></AboutText>
    </AboutWrapper>
  );
}

const mapState = (state) => {
  return {
    aboutInfoList: state.getIn(['home', 'aboutInfoList']),
  };
};

export default connect(mapState, null)(About);
