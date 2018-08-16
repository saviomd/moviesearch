const apiBaseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=6f875d4fba2e999f480afa6275a08f75';

const tmdbApi = {
  configuration: `${apiBaseUrl}configuration?${apiKey}`,
  imageAttribution: 'https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png',
  movieDetails: movieId => `${apiBaseUrl}movie/${movieId}?${apiKey}`,
  moviesNowPlaying: region => `${apiBaseUrl}movie/now_playing?${apiKey}&region=${region}`,
  moviesUpcoming: region => `${apiBaseUrl}movie/upcoming?${apiKey}&region=${region}`,
  personDetails: personId => `${apiBaseUrl}person/${personId}?${apiKey}`,
  searchMulti: searchQuery => `${apiBaseUrl}search/multi?${apiKey}&query=${searchQuery}`,
  tvDetails: showId => `${apiBaseUrl}tv/${showId}?${apiKey}`,
};

export default tmdbApi;
