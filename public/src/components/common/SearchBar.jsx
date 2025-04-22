import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../../services/movieService';

const SearchBar = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (query.trim().length > 2) {
        handleSearch();
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [query]);

  const handleSearch = async () => {
    if (query.trim().length < 3) return;
    
    setIsLoading(true);
    try {
      const data = await searchMovies(query);
      setResults(data.slice(0, 6)); // Limit to 6 results
    } catch (error) {
      console.error('Error searching movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
    if (onClose) onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length > 0) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      if (onClose) onClose();
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search for movies"
        />
        {query && (
          <button type="button" className="search-clear" onClick={handleClear} aria-label="Clear search">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </form>
      
      {query.trim().length > 0 && (
        <div className="search-results">
          {isLoading ? (
            <div className="search-empty">Loading...</div>
          ) : results.length > 0 ? (
            results.map(movie => (
              <div key={movie.id} className="search-result-item" onClick={() => handleMovieClick(movie.id)}>
                <div className="search-result-poster">
                  <img src={movie.posterUrl} alt={movie.title} />
                </div>
                <div className="search-result-info">
                  <div className="search-result-title">{movie.title}</div>
                  <div className="search-result-year">{movie.year}</div>
                </div>
              </div>
            ))
          ) : query.trim().length > 2 ? (
            <div className="search-empty">No movies found</div>
          ) : null}
          
          {query.trim().length > 2 && results.length > 0 && (
            <div className="search-result-item" onClick={() => navigate(`/search?q=${encodeURIComponent(query)}`)}>
              <div className="search-result-info">
                <div className="search-result-title">See all results for "{query}"</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;