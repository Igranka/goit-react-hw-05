import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2U1MTU2YmRjNGVhYTFhNDM2NGU3NzY4NDU2MmZkYiIsIm5iZiI6MTcyNjY3NTg2My44NzUxOTksInN1YiI6IjY2ZWFmOTljODJmZjg3M2Y3ZDFmNjQ1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YGB9PzI0P7e0Qy2ZK8eEwpgMFesyfZBYu_eAfpVUgL8",
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day", options);
  return response.data.results;
};
export const getSearchMovies = async (query) => {
  const response = await axios.get("/search/movie", {
    params: {
      query: query,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2U1MTU2YmRjNGVhYTFhNDM2NGU3NzY4NDU2MmZkYiIsIm5iZiI6MTcyNjY3NTg2My44NzUxOTksInN1YiI6IjY2ZWFmOTljODJmZjg3M2Y3ZDFmNjQ1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YGB9PzI0P7e0Qy2ZK8eEwpgMFesyfZBYu_eAfpVUgL8",
    },
  });
  return response.data;
};
export const getMovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}`, options);
  return response.data;
};
export const getMovieCast = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`, options);
  return response.data.cast;
};
export const getMovieReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`, options);
  return response.data.results;
};