import React, { Component } from 'react';
import { connect } from 'dva';
import { Link, router } from 'umi';

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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from './style.js';
class Header extends Component {
  render() {
    const { header, dispatch, login } = this.props;
    console.log('TCL: Header -> render -> login', login);
    const { focused, mouseIn, trendingSearchList, page, totalPage } = header;
    let paginatedTrendingSearchList = [];
    for (let i = (page - 1) * 10; i < 10 * page; i++) {
      paginatedTrendingSearchList.push(trendingSearchList[i]);
    }
    return (
      <HeaderWrapper>
        {/* <Link to={`/`}>
          <Logo />
        </Link> */}
        <Nav>
          <Link to={`/`}>
            <NavItem className={`left active`}>Home</NavItem>
          </Link>
          {login.login ? (
            <Link
              onClick={() => {
                dispatch({ type: 'login/logout' });
              }}
              to={`/`}
            >
              <NavItem style={{ cursor: 'pointer' }} className={`right`}>
                Logout
              </NavItem>
            </Link>
          ) : (
            <Link to={`login`}>
              <NavItem style={{ cursor: 'pointer' }} className={`right`}>
                Log In
              </NavItem>
            </Link>
          )}
          {/* <NavItem className={`right`}>
            <span className="iconfont">&#xe636;</span>
          </NavItem> */}
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                onFocus={() => {
                  dispatch({ type: 'header/searchFocused' });
                  trendingSearchList.length === 0 &&
                    dispatch({ type: 'header/getTrendingSearchListAsync' });
                }}
                onBlur={() => {
                  dispatch({ type: 'header/searchBlurred' });
                }}
                className={focused ? `focused` : ``}
              />
            </CSSTransition>
            <span
              style={{ cursor: `pointer` }}
              className={focused ? `iconfont zoom focused` : `zoom iconfont`}
            >
              &#xe6dd;
            </span>
            {focused || mouseIn ? (
              <SearchInfo
                onMouseEnter={() => {
                  dispatch({ type: 'header/mouseEnter' });
                }}
                onMouseLeave={() => {
                  dispatch({ type: 'header/mouseLeave' });
                }}
              >
                <SearchInfoTitle>
                  Trending
                  <span
                    ref={icon => {
                      this.spinIcon = icon;
                    }}
                    className="iconfont spin"
                  >
                    &#xe851;
                  </span>
                  <SearchInfoSwitch
                    onClick={() => {
                      if (page < totalPage) {
                        dispatch({
                          type: 'header/changePage',
                          page: page + 1,
                          spin: this.spinIcon,
                        });
                      } else {
                        dispatch({ type: 'header/changePage', page: 1 });
                      }
                    }}
                  >
                    换一批
                  </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                  {trendingSearchList.length > 0
                    ? paginatedTrendingSearchList.map(item => (
                        <SearchInfoItem key={item}>{item}</SearchInfoItem>
                      ))
                    : null}
                </SearchInfoList>
              </SearchInfo>
            ) : null}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className={`reg`}>Register</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  header: PropTypes.object.isRequired,
  login: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ header, login }) => ({
  header,
  login,
});

export default connect(mapStateToProps)(Header);
