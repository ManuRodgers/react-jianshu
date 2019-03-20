import axios from 'axios';

export default {
  namespace: 'home',

  state: {
    topicList: [],
    articleList: [],
    articlePage: 1,
  },
  reducers: {
    getTopicListSync(state, { topicList }) {
      return { ...state, topicList };
    },
    getArticleListSync(state, { articleList }) {
      return { ...state, articleList };
    },
    getMoreArticleListSync(state, { articleList, nextPage }) {
      return {
        ...state,
        articleList: [...state.articleList, ...articleList],
        articlePage: nextPage,
      };
    },
  },

  effects: {
    *getTopicListAsync({}, { call, put }) {
      try {
        const { data, status } = yield call(axios, {
          method: `get`,
          url: `http://localhost:8000/api/topics`,
        });
        if (status === 200) {
          yield put({ type: 'getTopicListSync', topicList: data });
        }
      } catch (error) {
        console.error(error);
      }
    },
    *getArticleListAsync({}, { call, put }) {
      try {
        const { data, status } = yield call(axios, {
          method: `get`,
          url: `http://localhost:8000/api/articles`,
        });
        if (status === 200) {
          yield put({ type: 'getArticleListSync', articleList: data });
        }
      } catch (error) {
        console.error(error);
      }
    },
    *getMoreArticleListAsync({ articlePage }, { call, put }) {
      try {
        const { data, status } = yield call(axios, {
          method: `get`,
          url: `http://localhost:8000/api/moreArticles?page=${articlePage}`,
        });
        if (status === 200) {
          yield put({
            type: 'getMoreArticleListSync',
            articleList: data,
            nextPage: articlePage + 1,
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {});
    },
  },
};
