import React, { useState } from 'react';
import QRCode from './QRCode';
import { FooterWrapper, Contact, CopyRights } from './style';

export default function Footer() {
  const [show, setShow] = useState(false);

  const showQRCode = (show) => {
    if (show) {
      return <QRCode />;
    }
  };

  return (
    <FooterWrapper>
      <Contact>
        <a className='contactus' href='/contact/?value=0'>
          联系我们
        </a>
        <div className='wechat'>
          {showQRCode(show)}
          <div
            onMouseOver={() => {
              setShow(true);
            }}
            onMouseLeave={() => {
              setShow(false);
            }}
          >
            微信公众号
          </div>
        </div>
        <a className='aboutus' href='/about/?value=0'>
          关于美地
        </a>
      </Contact>
      <CopyRights>
        Copyright 2020 ©上海美地园林有限公司 All rights reserved. Author:
        <a className='fengxiong' href='http://www.fengxiong.info'>
          &nbsp;Feng Xiong.
        </a>
      </CopyRights>
    </FooterWrapper>
  );
}
