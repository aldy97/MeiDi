import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 100px;
  background: #696969;
`;

export const Contact = styled.div`
  height: 50px;
  width: 30%;
  margin-left: calc(35vw);
  margin-top: 10px;
  float: left;
  .contactus,
  .wechat,
  .aboutus {
    cursor: pointer;
    color: #dddddd;
    height: 50px;
    width: 33%;
    float: left;
    line-height: 50px;
    text-align: center;
  }
  .contactus: hover {
    color: #228b22;
  }
  .wechat: hover {
    color: #228b22;
  }
  .aboutus: hover {
    color: #228b22;
  }
`;

export const CopyRights = styled.div`
  padding-top: 60px;
  text-align: center;
  color: #dddddd;
`;
