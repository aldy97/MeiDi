import React from 'react';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  ImgWrapper,
  NavigationWrapper,
  NavItemWrapper,
} from './style';

const Header = (props) => {
  return (
    <HeaderWrapper>
      <ImgWrapper></ImgWrapper>
      <NavigationWrapper>
        {props.navItemList.map((item) => {
          return (
            <NavItemWrapper className='navitemwrapper'>{item}</NavItemWrapper>
          );
        })}
      </NavigationWrapper>
    </HeaderWrapper>
  );
};

const mapState = (state) => {
  return {
    navItemList: state.getIn(['header', 'navItemList']),
  };
};

export default connect(mapState, null)(Header);
