import React from 'react';
import { QRCodeWrapper } from './style';

//Footer官网微信悬浮出现二维码
function QRCode() {
  return (
    <QRCodeWrapper>
      <img src={require('../../static/QRCode.JPG')} alt='' className='qrcode' />
    </QRCodeWrapper>
  );
}

export default QRCode;
