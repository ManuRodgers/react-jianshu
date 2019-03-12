import axios from 'axios';

export default {
  namespace: 'header',

  state: {
    focused: false,
  },
  reducers: {
    searchFocused(state, {}) {
      return { ...state, focused: true };
    },
    searchBlurred(state, {}) {
      return { ...state, focused: false };
    },
  },

  effects: {},

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        console.log(location);
      });
    },
  },
};
