import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 95px;
`;

export const ImgWrapper = styled.div`
  width: calc(33.5vw);
  height: 95px;
  float: left;
  cursor: pointer;
  .logo {
    width: calc(33.5vw);
    height: 95px;
    object-fit: contain;
  }
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
  color: #333;
  transition: 0.3s;
  &: hover {
    background: #32cd32;
    color: #fff;
  }
  &.selected {
    background: #228b22;
    color: #fff;
  }
`;

export const NavItemDropDownWrapper = styled.div`
  width: calc(9.28vw);
  text-align: center;
  cursor: pointer;
  background: #333;
  margin-top: -5px;
  position: absolute;
  z-index: 9999;
  opacity: 0.7;
`;

export const NavItemDropDownItem = styled.div`
  width: calc(9.28vw);
  border-bottom: 1px solid #fff;
  font-size: 14px;
  height: 35px;
  line-height: 35px;
  cursor: pointer;
  &.navitemdropdownitem: hover {
    color: #228b22;
  }
`;
