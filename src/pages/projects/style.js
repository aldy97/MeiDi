import styled from 'styled-components';
export const TitleWrapper = styled.div`
  height: 100px;
  width: 100%;
  border: 1px solid black;
  font-size: 22px;
  padding-left: calc(12.4vw);
  line-height: 100px;
  color: #333;
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
  height: 50px;
`;

export const TypeSelectorItem = styled.span`
  height: 50px;
  width: 50px;
  line-height: 50px;
  padding-left: calc(12.4vw);
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
  width: 75%;
  height: 100px;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
`;
