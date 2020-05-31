import styled from 'styled-components';

export const SlideWrapper = styled.div`
  width: 100%;
  height: 525px;
  .slideImg {
    width: 100%;
    height: 525px;
    object-fit: cover;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  height: 572px;
  border: 1px solid black;
`;

export const AboutNavWrapper = styled.div`
  width: 100%;
  height: 77px;
  background: #f5f5f5;
`;

export const NavItemWrapper = styled.div`
  height: 77px;
  width: 1210px;
  margin-left: auto;
  margin-right: auto;
`;

export const AboutNavItem = styled.div`
  height: 77px;
  width: 400px;
  float: left;
  color: #333;
  border-right: 1px solid black;
  line-height: 77px;
  text-align: center;
  cursor: pointer;
  border-left: 1px solid #e7e7e7;
  border-right: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  &.aboutnavitem: hover {
    background: #666;
    color: white;
  }
`;

export const SelectedProjectsWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  height: 464px;
  border: 1px solid black;
  .sectionTitle {
    width: calc(18vh);
    height: 25%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    line-height: calc(15vh);
    text-align: center;
    font-size: 24px;
    cursor: pointer;
  }
  .sectiontitle: hover {
    color: yellow;
  }
`;

export const ProjectWrapper = styled.div`
  width: 300px;
  height: 260px;
  border: 1px solid black;
`;

export const ImgSection = styled.div`
  height: 160px;
  border-bottom: 1px solid black;
`;

export const InfoSection = styled.div`
  height: 100px;
  border-bottom: 1px solid black;
`;
