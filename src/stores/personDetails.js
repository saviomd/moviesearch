import tmdbApi from "@/utils/tmdbApi";

const personDetails = {
  namespaced: true,
  state: {
    people: {}
  },
  getters: {
    person: state => personId => state.people[personId]
  },
  mutations: {
    addPerson(state, payload) {
      const newPeople = {
        ...state.people,
        [payload.personId]: payload.data
      };
      state.people = newPeople;
    }
  },
  actions: {
    fetchApiData(context, personId) {
      return new Promise((resolve, reject) => {
        fetch(tmdbApi.personDetails(personId))
          .then(response => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then(json => {
            const payload = {
              data: json,
              personId
            };
            context.commit("addPerson", payload);
            resolve();
          })
          .catch(error => {
            // eslint-disable-next-line no-console
            console.log(error.message);
            reject(error);
          });
      });
    },
    getPerson(context, personId) {
      return new Promise((resolve, reject) => {
        if (personId in context.state.people) {
          resolve();
        } else {
          context
            .dispatch("fetchApiData", personId)
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

export default personDetails;
