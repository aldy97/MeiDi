import styled from 'styled-components';

export const TitleWrapper = styled.div`
  height: 75px;
  width: 1152px;
  font-size: 35px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  line-height: 75px;
  color: #666;
  .title {
    margin-left: 15px;
  }
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
  width: 1152px;
  margin-left: auto;
  margin-right: auto;
`;

export const TypeSelectorItem = styled.div`
  height: 75px;
  display: inline-block;
  line-height: 75px;
  color: #666;
  font-size: 18px;
  .Sfq {
    margin-left: 15px;
    margin-right: 15px;
  }
  &.selected {
    color: #228b22;
    font-weight: bold;
  }
  &.notSelected {
    cursor: pointer;
  }
`;

export const ProjectsSectionWrapper = styled.div`
  width: 1152px;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  margin-left: auto;
  margin-right: auto;
`;
