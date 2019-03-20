import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import TopicItem from './components/TopicItem';
import ArticleItem from './components/ArticleItem';
import Banner from './components/Banner';
import Writer from './components/Writer';
import { Divider, Button } from 'antd';
import axios from 'axios';
import './index.less';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,picture`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: true,
      loading: false,
      data: [],
      list: [],
    };
  }
  componentDidMount = async () => {
    const { dispatch } = this.props;
    dispatch({ type: 'home/getTopicListAsync' });
    dispatch({ type: 'home/getArticleListAsync' });
    await this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  };
  getData = async callback => {
    try {
      const { data, status } = await axios({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
      });
      if (status === 200) {
        return callback(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  onLoadMore = async () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    await this.getData(res => {
      // const data = this.state.data.concat(res.results);
      console.log(res);
      const data = [...this.state.data, ...res.results];
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        }
      );
    });
  };
  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button htmlType={`button`} onClick={this.onLoadMore}>
            loading more
          </Button>
        </div>
      ) : null;
    const { dispatch, home } = this.props;
    const { topicList, articleList, articlePage } = home;
    console.log('TCL: render -> articleList', articleList);
    return (
      <div className={`homeContainer`}>
        <div className={`homeLeft`}>
          <Banner />
          <div className={`topic`}>
            {topicList.map(topic => (
              <TopicItem key={topic.id} topic={topic} />
            ))}
          </div>
          <Divider />
          <div className={`list`}>
            {articleList.map((article, index) => (
              <ArticleItem key={index} article={article} />
            ))}
            {articleList.length >= 6 ? (
              <Button className={`loadMore`}>No More To Load</Button>
            ) : (
              <div
                onClick={() => {
                  dispatch({ type: 'home/getMoreArticleListAsync', articlePage });
                }}
                className={`loadMore`}
              >
                Load More
              </div>
            )}
          </div>
        </div>
        <div className={`homeRight`}>
          <Writer initLoading={initLoading} list={list} loadMore={loadMore} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  home: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ home }) => ({ home });

export default connect(mapStateToProps)(App);
