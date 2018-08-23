import tmdbApi from "@/utils/tmdbApi";

const searchResult = {
  namespaced: true,
  state: {
    list: {}
  },
  getters: {
    resultBySearchString: state => searchString => state.list[searchString]
  },
  mutations: {
    addToList(state, payload) {
      const newList = {
        ...state.list,
        [payload.query]: payload.results
      };
      state.list = newList;
    }
  },
  actions: {
    fetchApiData(context, searchString) {
      return new Promise((resolve, reject) => {
        fetch(tmdbApi.searchMulti(searchString))
          .then(response => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then(json => {
            const results = json.results.map(result => {
              const newResult = {
                ...result,
                image_path:
                  result.media_type === "person"
                    ? result.profile_path
                    : result.poster_path,
                name: result.media_type === "movie" ? result.title : result.name
              };
              return newResult;
            });
            const payload = {
              results,
              query: searchString
            };
            context.commit("addToList", payload);
            resolve();
          })
          .catch(error => {
            // eslint-disable-next-line no-console
            console.log(error.message);
            reject(error);
          });
      });
    },
    getResult(context, searchString) {
      return new Promise((resolve, reject) => {
        if (searchString in context.state.list) {
          resolve();
        } else {
          context
            .dispatch("fetchApiData", searchString)
            .then(() => {
              resolve();
            })
            .catch(error => {
              // eslint-disable-next-line no-console
              console.log(error.message);
              reject(error);
            });
        }
      });
    }
  }
};

export default searchResult;
