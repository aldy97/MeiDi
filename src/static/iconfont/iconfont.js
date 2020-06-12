import { createGlobalStyle } from 'styled-components';

export const GlobalStyleFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1591970993495'); /* IE9 */
  src: url('iconfont.eot?t=1591970993495#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1591970993495') format('woff'),
  url('iconfont.ttf?t=1591970993495') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1591970993495#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
}`;
