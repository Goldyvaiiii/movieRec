import { createContext, useContext, useState, useEffect } from 'react';
import { 
  fetchTrendingMovies, 
  fetchPopularMovies, 
  fetchTopRatedMovies, 
  fetchMovieDetails 
} from '../services/movieService';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteMovies');
    if (storedFavorites) {
      try {
        setFavoriteMovies(JSON.parse(storedFavorites));
      } catch (error) {
        console.error('Error parsing favorites from localStorage:', error);
      }
    }
  }, []);

  // Update localStorage when favorites change
  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      try {
        // Fetch all movie data in parallel
        const [trending, popular, topRated] = await Promise.all([
          fetchTrendingMovies(),
          fetchPopularMovies(),
          fetchTopRatedMovies()
        ]);

        setTrendingMovies(trending);
        setPopularMovies(popular);
        setTopRatedMovies(topRated);

        // Set a featured movie
        if (trending.length > 0) {
          // Randomly select a trending movie for the hero section
          const randomIndex = Math.floor(Math.random() * Math.min(3, trending.length));
          const featured = trending[randomIndex];
          
          // Fetch full details for the featured movie
          const featuredDetails = await fetchMovieDetails(featured.id);
          setFeaturedMovie(featuredDetails);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setError('Failed to load movies. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Toggle movie in favorites
  const toggleFavorite = async (movieId) => {
    const isFavorited = favoriteMovies.some(movie => movie.id === movieId);
    
    if (isFavorited) {
      // Remove from favorites
      setFavoriteMovies(favoriteMovies.filter(movie => movie.id !== movieId));
    } else {
      // Add to favorites - first check if we already have the movie data
      let movieToAdd = [...trendingMovies, ...popularMovies, ...topRatedMovies]
        .find(movie => movie.id === movieId);
      
      // If not found in our lists, fetch it
      if (!movieToAdd) {
        try {
          movieToAdd = await fetchMovieDetails(movieId);
        } catch (error) {
          console.error('Error fetching movie details for favorite:', error);
          return;
        }
      }
      
      setFavoriteMovies([...favoriteMovies, movieToAdd]);
    }
  };

  // Check if a movie is in favorites
  const isFavorite = (movieId) => {
    return favoriteMovies.some(movie => movie.id === movieId);
  };

  const value = {
    trendingMovies,
    popularMovies,
    topRatedMovies,
    featuredMovie,
    favoriteMovies,
    isLoading,
    error,
    toggleFavorite,
    isFavorite
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};