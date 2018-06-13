import tmdbApi from '@/utils/tmdbApi';

const tvDetails = {
  namespaced: true,
  state: {
    shows: {},
  },
  getters: {
    show: state => showId => state.shows[showId],
  },
  mutations: {
    addShow(state, payload) {
      const newShow = {
        ...state.shows,
        [payload.showId]: payload.data,
      };
      state.shows = newShow;
    },
  },
  actions: {
    fetchApiData(context, showId) {
      return new Promise((resolve, reject) => {
        fetch(tmdbApi.tvDetails(showId)).then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        }).then((json) => {
          const payload = {
            data: json,
            showId,
          };
          context.commit('addShow', payload);
          resolve();
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error.message);
          reject(error);
        });
      });
    },
    getShow(context, showId) {
      return new Promise((resolve, reject) => {
        if (showId in context.state.shows) {
          resolve();
        } else {
          context.dispatch('fetchApiData', showId).then(() => {
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

export default tvDetails;
