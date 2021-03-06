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
  width: calc(83.3vw);
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const AboutNavItem = styled.div`
  color: #333;
  flex: 1;
  border-right: 1px solid black;
  line-height: 77px;
  text-align: center;
  cursor: pointer;
  border-left: 1px solid #e7e7e7;
  border-right: 1px solid #e7e7e7;
  transition: 0.3s;
  &.aboutnavitem: hover {
    background: #a0a0a0;
    color: white;
  }
  .iconfont {
    display: inline-box;
  }
`;

export const AboutTextWrapper = styled.div`
  width: calc(83.4vw);
  height: 493px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  .background {
    height: 493px;
    object-fit: cover;
    width: calc(83.4vw);
  }
  .textWrapper {
    margin-top: 443px;
    width: calc(83.4vw);
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
    display: block;
    color: #666;
    width: calc(18vh);
    height: 70px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    line-height: 90px;
    text-align: center;
    font-size: 24px;
    cursor: pointer;
    font-weight: bold;
    border-bottom: 7px solid transparent;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    transition: all 0.5s;
  }
  .sectiontitle: hover {
    border-bottom: 7px solid #228b22;
  }
`;

export const ProjectWrapper = styled.div`
  width: 350px;
  height: 310px;
  border: 1px solid grey;
  cursor: pointer;
  float: left;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 30px;
  box-shadow: 2px 2px 2px #888888;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: 0.3s;
  &.project: hover {
    .infosection {
      .title {
        color: #228b22;
      }
    }
    transform: scale(1.02);
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
