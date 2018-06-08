import tmdbApi from '@/helpers/tmdbApi';

const movieDetails = {
  namespaced: true,
  state: {
    movies: {},
  },
  getters: {
    movie: state => movieId => state.movies[movieId],
  },
  mutations: {
    addMovie(state, payload) {
      const newMovies = {
        ...state.movies,
        [payload.movieId]: payload.data,
      };
      state.movies = newMovies;
    },
  },
  actions: {
    fetchApiData(context, movieId) {
      return new Promise((resolve, reject) => {
        fetch(tmdbApi.movieDetails(movieId)).then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        }).then((json) => {
          const payload = {
            data: json,
            movieId,
          };
          context.commit('addMovie', payload);
          resolve();
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error.message);
          reject(error);
        });
      });
    },
    getMovie(context, movieId) {
      return new Promise((resolve, reject) => {
        if (movieId in context.state.movies) {
          resolve();
        } else {
          context.dispatch('fetchApiData', movieId).then(() => {
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

export default movieDetails;
