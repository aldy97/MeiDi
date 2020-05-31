import React from 'react';
import NavItem from './NavItem';
import { connect } from 'react-redux';
import { HeaderWrapper, ImgWrapper, NavigationWrapper } from './style';

const Header = (props) => {
  return (
    <HeaderWrapper>
      <ImgWrapper>
        <img className='logo' src={require('../../static/img/headerImg.png')} />
      </ImgWrapper>
      <NavigationWrapper>
        {props.navItemList.map((item) => {
          return (
            <NavItem
              className='navitemwrapper'
              item={item.name}
              dropdown={item.dropDown}
            ></NavItem>
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
