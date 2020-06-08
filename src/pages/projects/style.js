import styled from 'styled-components';
export const TitleWrapper = styled.div`
  height: 75px;
  width: 100%;
  font-size: 35px;
  margin-top: 30px;
  padding-left: calc(9.8vw);
  line-height: 75px;
  color: #666;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 300px;
  .bannerimg {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export const TypeSelectorWrapper = styled.div`
  height: 75px;
  width: 50%;
  margin-left: calc(7.8vw);
`;

export const TypeSelectorItem = styled.span`
  height: 75px;
  width: 50px;
  line-height: 75px;
  padding-left: 30px;
  color: #666;
  font-size: 18px;
  &.selected {
    color: #228b22;
    font-weight: bold;
  }
  &.notSelected {
    cursor: pointer;
  }
`;

export const ProjectsSectionWrapper = styled.div`
  width: 80%;
  height: 1030px;
  margin-left: auto;
  margin-right: auto;
`;
