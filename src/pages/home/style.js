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
    margin-left: calc(54.4vw);
    margin-top: 320px;
  }
  .desc {
    position: absolute;
    font-size: 19px;
    color: #fff;
    margin-left: calc(54.8vw);
    margin-top: 400px;
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
    width: 1205px;
    height: 493px;
    object-fit: cover;
  }
  .textWrapper {
    margin-top: 443px;
    width: 1205px;
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
  margin-top: 25px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  height: 464px;
  .sectiontitle {
    color: #333;
    width: calc(18vh);
    height: 20%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    line-height: calc(12.5vh);
    text-align: center;
    font-size: 24px;
    cursor: pointer;
    font-weight: bold;
  }
  .sectiontitle: hover {
    color: #228b22;
  }
`;

export const ProjectWrapper = styled.div`
  width: 350px;
  height: 310px;
  box-shadow: 0px 3px 3px #666;
  border-bottom: 1px solid #d3d3d3;
  transition: all 0.3s;
  &.project: hover {
    transform: scale(1.02);
    .infosection {
      .title {
        color: #228b22;
      }
      .desc {
        color: #228b22;
      }
    }
  }
`;

export const ImgSection = styled.div`
  height: 200px;
  .project-img {
    height: 200px;
    width: 350px;
    object-fit: cover;
  }
`;

export const InfoSection = styled.div`
  height: 100px;
  line-height: 40px;
  .title {
    font-size: 18px;
    margin-left: 10px;
    color: #666;
    margin-top: 12px;
  }
  .desc {
    font-size: 14px;
    margin-left: 10px;
    color: #999;
  }
`;
