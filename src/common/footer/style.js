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
  float: left;
  .contactUs,
  .wechat,
  .aboutUs {
    cursor: pointer;
    color: #dddddd;
    height: 50px;
    width: 33%;
    float: left;
    line-height: 50px;
    text-align: center;
  }
`;

export const CopyRights = styled.div`
  height: 48px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;
