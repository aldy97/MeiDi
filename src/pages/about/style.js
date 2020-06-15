import styled from 'styled-components';

export const BannerImgWrapper = styled.div`
  width: 100%;
  height: 300px;
  .bannerImg {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export const NavigationWrapper = styled.div`
  width: 100%;
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
  width: 24%;
  height: 60px;
  border-left: 1px solid white;
  border-right: 1px solid white;
  line-height: 60px;
  text-align: center;
  color: #666666;
  cursor: pointer;
  transition: 0.3s;
  &.navitem: hover {
    background: #228b22;
    color: #fff;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  background: #fff;
  .title {
    height: 80px;
    line-height: 80px;
    width: calc(14vw);
    margin-left: calc(42.3vw);
    text-align: center;
    font-size: 30px;
    color: #228b22;
  }
  .content {
    width: 40%;
    margin-top: -10px;
    margin-left: auto;
    margin-right: auto;
    color: #666;
  }
`;

export const CarouselWrapper = styled.div`
  margin-top: 30px;
`;

export const PartnerLogoWrapper = styled.div`
  width: 200px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  float: left;
  .partner-logo {
    width: 200px;
    height: 120px;
    object-fit: contain;
  }
`;
