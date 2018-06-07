import tmdbApi from '@/helpers/tmdbApi';

const configuration = {
  namespaced: true,
  state: {
    images: {},
  },
  mutations: {
    updateImages(state, payload) {
      state.images = payload.images;
    },
  },
  actions: {
    fetchApiData(context) {
      return new Promise((resolve, reject) => {
        fetch(tmdbApi.configuration).then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        }).then((json) => {
          const payload = {
            images: json.images,
          };
          context.commit('updateImages', payload);
          resolve();
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error.message);
          reject(error);
        });
      });
    },
    getConfiguration(context) {
      return new Promise((resolve, reject) => {
        if (Object.keys(context.state.images).length) {
          resolve();
        } else {
          context.dispatch('fetchApiData').then(() => {
            resolve();
          }).catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error.message);
            reject(error);
          });
        }
      });
    },
  },
};

export default configuration;
