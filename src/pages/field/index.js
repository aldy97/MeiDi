import React, { useState, useEffect } from 'react';
import {
  FieldWrapper,
  NavigationWrapper,
  NavItemWrapper,
  NavItem,
  TextWrapper,
} from './style';
import { BannerImgWrapper } from '../about/style';
import { connect } from 'react-redux';

//分页面：业务领域
function Field(props) {
  const [index, setIndex] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('value');
    return myParam;
  });

  useEffect(() => {
    document.title = '业务领域';
  });

  return (
    <FieldWrapper>
      <BannerImgWrapper>
        <img className='bannerImg' src={props.fieldBannerImg} alt='' />
      </BannerImgWrapper>
      <NavigationWrapper>
        <NavItemWrapper>
          {props.navItemList[2].dropDown.map((item, i) => {
            return (
              <NavItem
                className='navitem'
                key={i}
                onClick={() => {
                  setIndex(i);
                }}
              >
                {item}
              </NavItem>
            );
          })}
        </NavItemWrapper>
      </NavigationWrapper>
      <TextWrapper>
        <div className='title'>{props.navItemList[2].dropDown[index]}</div>
        <div className='spec'>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {props.aboutInfoList[index].spec}
        </div>
      </TextWrapper>
    </FieldWrapper>
  );
}

const mapState = (state) => {
  return {
    fieldBannerImg: state.getIn(['field', 'fieldBannerImg']),
    navItemList: state.getIn(['header', 'navItemList']),
    aboutInfoList: state.getIn(['home', 'aboutInfoList']),
  };
};

export default connect(mapState, null)(Field);
