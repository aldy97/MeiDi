import styled from 'styled-components';
import Logo from '../../static/img/headerImg.png';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 95px;
`;

export const ImgWrapper = styled.div`
  width: 34%;
  height: 95px;
  background: url(${Logo}) no-repeat center center;
  float: left;
`;

export const NavigationWrapper = styled.div`
  width: 65%;
  height: 95px;
  float: right;
  line-height: 100px;
`;

export const NavItemWrapper = styled.div`
  width: 12.5%;
  height: 95px;
  float: left;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  &.navitemwrapper: hover {
    background: #36a390;
    color: #fff;
  }
`;
