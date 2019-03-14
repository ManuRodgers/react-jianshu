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
  src: url('./assets/iconfont/iconfont.eot?t=1552598780184'); /* IE9 */
  src: url('./assets/iconfont/iconfont.eot?t=1552598780184#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./assets/iconfont/iconfont.woff?t=1552598780184') format('woff'),
  url('./assets/iconfont/iconfont.ttf?t=1552598780184') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./assets/iconfont/iconfont.svg?t=1552598780184#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
