import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
} from './style.js';
class Header extends PureComponent {
  render() {
    const { header, dispatch } = this.props;
    const { focused } = header;
    console.log(focused);
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className={`left active`}>首页</NavItem>
          <NavItem className={`left`}>下载App</NavItem>
          <NavItem className={`right`}>登陆</NavItem>
          <NavItem className={`right`}>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                onFocus={() => {
                  dispatch({ type: 'header/searchFocused' });
                }}
                onBlur={() => {
                  dispatch({ type: 'header/searchBlurred' });
                }}
                className={focused ? `focused` : ``}
              />
            </CSSTransition>
            <span className={focused ? `iconfont focused` : `iconfont`}>&#xe6dd;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className={`writing`}>
            <span className="iconfont">&#xe6de;</span> 写文章
          </Button>
          <Button className={`reg`}>注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  header: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ header }) => ({
  header,
});

export default connect(mapStateToProps)(Header);
