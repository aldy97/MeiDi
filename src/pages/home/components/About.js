import React from 'react';
import { connect } from 'react-redux';
import {
  AboutWrapper,
  AboutNavWrapper,
  NavItemWrapper,
  AboutNavItem,
} from '../style';

function About(props) {
  return (
    <AboutWrapper>
      <AboutNavWrapper>
        <NavItemWrapper>
          {props.aboutInfoList.map((item) => {
            return (
              <AboutNavItem className='aboutnavitem'>{item.title}</AboutNavItem>
            );
          })}
        </NavItemWrapper>
      </AboutNavWrapper>
    </AboutWrapper>
  );
}

const mapState = (state) => {
  return {
    aboutInfoList: state.getIn(['home', 'aboutInfoList']),
  };
};

export default connect(mapState, null)(About);
