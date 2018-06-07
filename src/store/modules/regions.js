const regions = {
  namespaced: true,
  state: {
    current: 'BR',
    list: ['BR', 'US'],
  },
  mutations: {
    updateCurrent(state, payload) {
      state.current = payload.current;
    },
  },
  actions: {
    setCurrent(context, current) {
      const payload = {
        current,
      };
      context.commit('updateCurrent', payload);
    },
  },
};

export default regions;
