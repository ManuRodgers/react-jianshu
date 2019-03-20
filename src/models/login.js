/* eslint-disable no-empty-pattern */
import axios from 'axios';

export default {
  namespace: 'login',

  state: {
    login: false,
  },
  reducers: {
    login(state, {}) {
      return { ...state, login: true };
    },
    logout(state, {}) {
      return { ...state, login: false };
    },
  },

  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {});
    },
  },
};
