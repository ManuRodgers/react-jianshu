import axios from 'axios';

export default {
  namespace: 'header',

  state: {
    focused: false,
    mouseIn: false,
    trendingSearchList: [],
    page: 1,
    totalPage: 1,
  },
  reducers: {
    searchFocused(state, {}) {
      return { ...state, focused: true };
    },
    searchBlurred(state, {}) {
      return { ...state, focused: false };
    },
    mouseEnter(state, {}) {
      return { ...state, mouseIn: true };
    },
    mouseLeave(state, {}) {
      return { ...state, mouseIn: false };
    },
    changePage(state, { page, spin }) {
      if (spin) {
        let originalAngel = spin.style.transform.replace(/[^0-9]/gi, ``);
        if (originalAngel) {
          originalAngel = parseInt(originalAngel, 10);
          console.log(originalAngel);
        } else {
          originalAngel = 0;
          console.log(originalAngel);
        }
        spin.style.transform = `rotate(${originalAngel + 360}deg)`;
      }
      return { ...state, page };
    },
    getTrendingSearchListSync(state, { trendingSearchList, totalPage }) {
      return { ...state, trendingSearchList, totalPage };
    },
  },

  effects: {
    *getTrendingSearchListAsync({}, { call, put }) {
      try {
        const { data, status } = yield call(axios, {
          method: `get`,
          url: 'http://localhost:8000/api/trendingSearchList',
        });
        if (status) {
          yield put({
            type: 'getTrendingSearchListSync',
            trendingSearchList: data.data,
            totalPage: Math.ceil(data.data.length / 10), // 每页显示10条数据
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
