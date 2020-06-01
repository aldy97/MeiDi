import styled from 'styled-components';

export const AboutImgWrapper = styled.div`
  width: 100%;
  height: 300px;
  .aboutImg {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export const NavigationWrapper = styled.div`
  width: 100%;
  height: 600px;
  background: #dcdcdc;
`;

export const NavSection = styled.div`
  width: 40%;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
`;

export const NavItem = styled.div`
  float: left;
  width: 24.6%;
  height: 60px;
  border-left: 1px solid white;
  border-right: 1px solid white;
  line-height: 60px;
  text-align: center;
  color: #666666;
  cursor: pointer;
  &.navitem: hover {
    background: #228b22;
    color: #fff;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 600px;
  background: #fff;
  .title {
    border: 1px solid black;
    height: 80px;
    line-height: 80px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 2.5rem;
    color: #228b22;
  }
  .content {
    margin-top: 20px;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
    color: #666;
    p {
      padding-bottom: 10px;
    }
  }
`;