import React from 'react';
import { FooterWrapper, Contact, CopyRights } from './style';

function Footer() {
  return (
    <FooterWrapper>
      <Contact>
        <div
          className='contactus'
          onClick={() => {
            window.location.href = '/contact/?value=0';
          }}
        >
          联系我们
        </div>
        <div className='wechat'>官方微信</div>
        <div
          className='aboutus'
          onClick={() => {
            window.location.href = '/about/?value=0';
          }}
        >
          关于美地
        </div>
      </Contact>
      <CopyRights>
        Copyright 2020 ©上海美地园林有限公司 All rights reserved. Powered by
        Feng Xiong.
      </CopyRights>
    </FooterWrapper>
  );
}

export default Footer;
