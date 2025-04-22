import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/movieService';
import MovieList from '../components/common/MovieList';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    if (!query.trim()) return;
    
    const fetchMovieResults = async () => {
      setIsLoading(true);
      try {
        const results = await searchMovies(query);
        setMovies(results);
      } catch (error) {
        console.error('Error searching movies:', error);
        setError('Failed to search movies. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieResults();
  }, [query]);

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Filter movies based on active filter
  const filteredMovies = () => {
    if (activeFilter === 'all') return movies;
    
    if (activeFilter === 'high-rated') {
      return movies.filter(movie => movie.voteAverage >= 8);
    }
    
    if (activeFilter === 'recent') {
      const currentYear = new Date().getFullYear();
      return movies.filter(movie => {
        const movieYear = movie.releaseDate ? parseInt(movie.releaseDate.split('-')[0]) : 0;
        return movieYear >= currentYear - 2;
      });
    }
    
    return movies;
  };

  return (
    <div className="container">
      <div className="search-page">
        <h1 className="page-title">Search Results for "{query}"</h1>
        
        {isLoading ? (
          <div className="loading-container">
            <div className="loader"></div>
            <p>Searching movies...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p>{error}</p>
          </div>
        ) : (
          <>
            {movies.length > 0 ? (
              <>
                <div className="search-filters">
                  <button 
                    className={`search-filter ${activeFilter === 'all' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('all')}
                  >
                    All Results
                  </button>
                  <button 
                    className={`search-filter ${activeFilter === 'high-rated' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('high-rated')}
                  >
                    High Rated
                  </button>
                  <button 
                    className={`search-filter ${activeFilter === 'recent' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('recent')}
                  >
                    Recent Movies
                  </button>
                </div>
                
                <MovieList
                  title={`${filteredMovies().length} Results Found`}
                  movies={filteredMovies()}
                  layout="grid"
                />
              </>
            ) : query ? (
              <div className="search-empty">
                <h3>No movies found for "{query}"</h3>
                <p>Try adjusting your search or check the spelling</p>
              </div>
            ) : (
              <div className="search-empty">
                <h3>Enter a search term to find movies</h3>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;