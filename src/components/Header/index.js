import React, { Component } from 'react';
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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from './style.js';
class Header extends Component {
  render() {
    const { header, dispatch } = this.props;
    const { focused, mouseIn, trendingSearchList, page, totalPage } = header;
    let paginatedTrendingSearchList = [];
    for (let i = (page - 1) * 10; i < 10 * page; i++) {
      paginatedTrendingSearchList.push(trendingSearchList[i]);
    }
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
