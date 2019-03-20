import axios from 'axios';

export default {
  namespace: 'detail',

  state: {
    title: 'React rules all',
  },
  reducers: {},

  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {});
    },
  },
};
