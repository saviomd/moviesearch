import tmdbApi from '@/utils/tmdbApi';

const moviesUpcoming = {
  namespaced: true,
  state: {
    BR: [],
    US: [],
  },
  getters: {
    inRegion: state => region => state[region],
  },
  mutations: {
    populateRegion(state, payload) {
      state[payload.region] = payload.results;
    },
  },
  actions: {
    fetchApiData(context, region) {
      return new Promise((resolve, reject) => {
        fetch(tmdbApi.moviesUpcoming(region)).then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        }).then((json) => {
          const payload = {
            results: json.results,
            region,
          };
          context.commit('populateRegion', payload);
          resolve();
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error.message);
          reject(error);
        });
      });
    },
    getMovies(context, region) {
      return new Promise((resolve, reject) => {
        if (context.state[region].length) {
          resolve();
        } else {
          context.dispatch('fetchApiData', region).then(() => {
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

export default moviesUpcoming;
