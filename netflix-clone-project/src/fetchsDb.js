/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
const API_KEY = '446422254363b2af0aa6e70f81985f45';
const API_BASE = 'https://api.themoviedb.org/3';

const fetchMovies = async (endpoint) => {
  const api = await fetch(`${API_BASE}${endpoint}`);
  const json = await api.json();
  return json;
};

export default {
  getHomeLists: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais Netflix',
        items: await fetchMovies(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await fetchMovies(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await fetchMovies(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'actions',
        title: 'Ação',
        items: await fetchMovies(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await fetchMovies(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await fetchMovies(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await fetchMovies(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await fetchMovies(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getMovieInfo: async (movideId, type) => {
    let info = {};
    if (movideId) {
      switch (type) {
        case 'movie':
          info = await fetchMovies(
            `/movie/${movideId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case 'tv':
          info = await fetchMovies(
            `/tv/${movideId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
