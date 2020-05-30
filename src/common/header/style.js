import styled from 'styled-components';
import Logo from '../../static/img/headerImg.png';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 95px;
`;

export const ImgWrapper = styled.div`
  width: calc(35vw);
  height: 95px;
  background: url(${Logo}) no-repeat center center;
  float: left;
`;

export const NavigationWrapper = styled.div`
  width: calc(65vw);
  height: 95px;
  float: right;
  line-height: 100px;
`;

export const NavItemWrapper = styled.div`
  width: 14.28%;
  float: left;
  height: 95px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  color: #696969;
  &.navitemwrapper: hover {
    background: #228b22;
    color: #fff;
  }
`;

export const NavItemDropDownWrapper = styled.div`
  width: calc(9.28vw);
  text-align: center;
  cursor: pointer;
  background: #228b22;
  margin-top: -5px;
`;

export const NavItemDropDownItem = styled.div`
  width: calc(9.28vw);
  border-top: 1px solid #fff;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  &.navitemdropdownitem: hover {
    background: #32cd32;
  }
`;
