import React, { useEffect } from 'react';
import NavItem from './NavItem';
import { connect } from 'react-redux';
import { HeaderWrapper, ImgWrapper, NavigationWrapper } from './style';

const Header = (props) => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.pathname);
    const myParam = urlParams;
    console.log('myParam: ' + myParam);
  });

  return (
    <HeaderWrapper>
      <ImgWrapper>
        <img
          alt=''
          className='logo'
          src={require('../../static/img/headerImg.png')}
          onClick={() => {
            window.location.href = '/';
          }}
        />
      </ImgWrapper>
      <NavigationWrapper>
        {props.navItemList.map((item, i) => {
          return (
            <NavItem
              className='navitemwrapper'
              item={item.name}
              key={i}
              dropdown={item.dropDown}
              href={item.href}
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
