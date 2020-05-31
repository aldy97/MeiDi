import styled from 'styled-components';

export const SlideWrapper = styled.div`
  width: 100%;
  height: 525px;
  .slideImg {
    width: 100%;
    height: 525px;
    object-fit: cover;
  }
  .title {
    position: absolute;
    font-size: 48px;
    color: #fff;
    margin-left: calc(52.4vw);
    margin-top: 400px;
  }
  .desc {
    position: absolute;
    font-size: 19px;
    color: #fff;
    margin-left: calc(52.8vw);
    margin-top: 480px;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  height: 572px;
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
  &.aboutnavitem: hover {
    background: #a0a0a0;
    color: white;
  }
`;

export const AboutTextWrapper = styled.div`
  width: 1210px;
  height: 493px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  .background {
    width: 1210px;
    height: 493px;
    object-fit: cover;
  }
  .textWrapper {
    margin-top: 443px;
    width: 1210px;
    background: black;
    height: 50px;
    opacity: 0.6;
    position: absolute;
    .text {
      margin-left: 30px;
      color: #fff;
      line-height: 50px;
      opacity: 1;
    }
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
