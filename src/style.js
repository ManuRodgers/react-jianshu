import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
 html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
@font-face {font-family: "iconfont";
  src: url('./assets/iconfont/iconfont.eot?t=1552351374132'); /* IE9 */
  src: url('./assets/iconfont/iconfont.eot?t=1552351374132#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./assets/iconfont/iconfont.woff?t=1552351374132') format('woff'),
  url('./assets/iconfont/iconfont.ttf?t=1552351374132') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./assets/iconfont/iconfont.svg?t=1552351374132#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconAa:before {
  content: "\\e636";
}

.iconApache:before {
  content: "\\e61b";
}

.iconfangdajing:before {
  content: "\\e6dd";
}

.iconpen-copy:before {
  content: "\\e6de";
}

.iconApache-copy:before {
  content: "\\e6df";
}
`;
