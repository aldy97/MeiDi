import styled from 'styled-components';

export const FieldWrapper = styled.div`
  width: 100%;
`;

export const BannerImgWrapper = styled.div`
  width: 100%;
`;

export const NavigationWrapper = styled.div`
  width: 100%;
  height: 83px;
  background: #dcdcdc;
`;

export const NavItemWrapper = styled.div`
  height: 83px;
  width: 756px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const NavItem = styled.div`
  height: 83px;
  flex: 1;
  text-align: center;
  float: left;
  line-height: 83px;
  color: #666666;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  cursor: pointer;
  transition: 0.3s;
  &.navitem:hover {
    background: #228b22;
    color: #fff;
  }
`;

export const TextWrapper = styled.div`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  .title {
    font-size: 24px;
    color: #228b22;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }
  .spec {
    color: #666666;
    margin-bottom: 30px;
  }
`;
