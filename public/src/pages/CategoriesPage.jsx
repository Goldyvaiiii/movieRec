import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchGenres, fetchMoviesByGenre, fetchTrendingMovies, fetchPopularMovies, fetchTopRatedMovies } from '../services/movieService';
import MovieList from '../components/common/MovieList';

const CategoriesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeGenre = searchParams.get('genre') || '';
  const activeFilter = searchParams.get('filter') || '';
  
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageTitle, setPageTitle] = useState('All Categories');

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const genreList = await fetchGenres();
        setGenres(genreList);
      } catch (error) {
        console.error('Error fetching genres:', error);
        setError('Failed to load categories. Please try again later.');
      }
    };

    loadGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        let movieList = [];
        
        if (activeGenre) {
          // Fetch movies by genre
          movieList = await fetchMoviesByGenre(activeGenre);
          setPageTitle(`${activeGenre} Movies`);
        } else if (activeFilter) {
          // Fetch by filter (trending, popular, top-rated)
          switch (activeFilter) {
            case 'trending':
              movieList = await fetchTrendingMovies();
              setPageTitle('Trending Movies');
              break;
            case 'popular':
              movieList = await fetchPopularMovies();
              setPageTitle('Popular Movies');
              break;
            case 'top-rated':
              movieList = await fetchTopRatedMovies();
              setPageTitle('Top Rated Movies');
              break;
            default:
              setPageTitle('All Movies');
          }
        } else {
          // Default to popular if no filter or genre is selected
          movieList = await fetchPopularMovies();
          setPageTitle('Popular Movies');
        }
        
        setMovies(movieList);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('Failed to load movies. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [activeGenre, activeFilter]);

  const handleGenreClick = (genre) => {
    setSearchParams({ genre });
  };

  const handleFilterClick = (filter) => {
    setSearchParams({ filter });
  };

  return (
    <div className="container">
      <div className="categories-page">
        <h1 className="page-title">{pageTitle}</h1>
        
        <div className="categories-filters">
          <div className="filter-section">
            <h3>Filters</h3>
            <div className="filter-buttons">
              <button 
                className={`search-filter ${activeFilter === 'trending' ? 'active' : ''}`}
                onClick={() => handleFilterClick('trending')}
              >
                Trending
              </button>
              <button 
                className={`search-filter ${activeFilter === 'popular' ? 'active' : ''}`}
                onClick={() => handleFilterClick('popular')}
              >
                Popular
              </button>
              <button 
                className={`search-filter ${activeFilter === 'top-rated' ? 'active' : ''}`}
                onClick={() => handleFilterClick('top-rated')}
              >
                Top Rated
              </button>
            </div>
          </div>
          
          <div className="genre-section">
            <h3>Genres</h3>
            <div className="genre-buttons">
              {genres.map(genre => (
                <button 
                  key={genre} 
                  className={`search-filter ${activeGenre === genre ? 'active' : ''}`}
                  onClick={() => handleGenreClick(genre)}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {isLoading ? (
          <div className="loading-container">
            <div className="loader"></div>
            <p>Loading movies...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p>{error}</p>
          </div>
        ) : (
          <MovieList
            title={`${movies.length} Movies Found`}
            movies={movies}
            layout="grid"
          />
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;