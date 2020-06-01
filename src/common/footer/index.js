import React from 'react';
import { FooterWrapper, Contact, CopyRights } from './style';

function Footer() {
  return (
    <FooterWrapper>
      <Contact>
        <div className='contactUs'>联系我们</div>
        <div className='wechat'>官方微信</div>
        <div className='aboutUs'>关于美地</div>
      </Contact>
      <CopyRights></CopyRights>
    </FooterWrapper>
  );
}

export default Footer;
