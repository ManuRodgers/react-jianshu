import styled from 'styled-components';
import logoPic from '../../assets/nav-logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  overflow: visible;
  background: #fff;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  height: 100%;
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  box-sizing: border-box;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    color: #666;
    &.focused {
      color: #fff;
      background: #777;
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`;
export const SearchInfoTitle = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  span.spin {
    display: block;
    position: absolute;
    right: 35px;
    top: -5px;
    font-size: 12px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
`;
export const SearchInfoList = styled.span`
  /* overflow: hidden; */
`;
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border-radius: 3px;
  border: 1px solid #ddd;
  color: #787878;
`;
export const NavSearch = styled.input.attrs({
  placeholder: 'search',
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    width: 160px;
    transition: all 0.2s ease-in;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    width: 240px;
    transition: all 0.2s ease-in;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  height: 38px;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`;
