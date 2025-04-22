import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails, fetchSimilarMovies } from '../services/movieService';
import MovieList from '../components/common/MovieList';
import RatingStars from '../components/common/RatingStars';
import { useMovieContext } from '../context/MovieContext';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const { toggleFavorite, isFavorite } = useMovieContext();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch movie details and similar movies in parallel
        const [movieData, similarMoviesData] = await Promise.all([
          fetchMovieDetails(parseInt(id)),
          fetchSimilarMovies(parseInt(id))
        ]);
        
        setMovie(movieData);
        setSimilarMovies(similarMoviesData);
        
        // Check if user has rated this movie before
        const storedRatings = JSON.parse(localStorage.getItem('userRatings') || '{}');
        if (storedRatings[id]) {
          setUserRating(storedRatings[id]);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError('Failed to load movie details. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    window.scrollTo(0, 0);
    fetchData();
  }, [id]);

  const handleRatingChange = (rating) => {
    setUserRating(rating);
    
    // Save rating to localStorage
    const storedRatings = JSON.parse(localStorage.getItem('userRatings') || '{}');
    storedRatings[id] = rating;
    localStorage.setItem('userRatings', JSON.stringify(storedRatings));
  };

  const handleFavoriteToggle = () => {
    toggleFavorite(parseInt(id));
  };

  const isMovieFavorite = movie ? isFavorite(movie.id) : false;

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading movie details...</p>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="error-container">
        <h2>Something went wrong</h2>
        <p>{error || 'Movie not found'}</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="movie-details">
      <div className="movie-details-header">
        <div className="movie-backdrop">
          <img src={movie.backdropUrl} alt={movie.title} />
        </div>
      </div>
      
      <div className="container">
        <div className="movie-main">
          <div className="movie-poster">
            <img src={movie.posterUrl} alt={movie.title} />
          </div>
          
          <div className="movie-info">
            <h1 className="movie-title">{movie.title}</h1>
            {movie.tagline && <p className="movie-tagline">{movie.tagline}</p>}
            
            <div className="movie-meta">
              <div className="movie-meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {movie.releaseDate?.split('-')[0]}
              </div>
              
              {movie.runtime && (
                <div className="movie-meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {movie.runtime} min
                </div>
              )}
              
              <div className="movie-meta-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={movie.voteAverage > 7 ? 'var(--color-accent)' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                {movie.voteAverage.toFixed(1)}
              </div>
            </div>
            
            {movie.genres && (
              <div className="movie-genres">
                {movie.genres.map((genre, index) => (
                  <span key={index} className="movie-genre">{genre}</span>
                ))}
              </div>
            )}
            
            <div className="movie-actions">
              <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Watch Trailer
              </a>
              
              <button 
                className={`btn btn-outline ${isMovieFavorite ? 'active' : ''}`} 
                onClick={handleFavoriteToggle}
              >
                {isMovieFavorite ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    Remove from Favorites
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    Add to Favorites
                  </>
                )}
              </button>
            </div>
            
            <div className="movie-overview">
              <p>{movie.overview}</p>
            </div>
            
            <div className="movie-stats">
              {movie.budget > 0 && (
                <div className="movie-stat">
                  <div className="movie-stat-value">${(movie.budget / 1000000).toFixed(1)}M</div>
                  <div className="movie-stat-label">Budget</div>
                </div>
              )}
              
              {movie.revenue > 0 && (
                <div className="movie-stat">
                  <div className="movie-stat-value">${(movie.revenue / 1000000).toFixed(1)}M</div>
                  <div className="movie-stat-label">Revenue</div>
                </div>
              )}
              
              <div className="movie-stat">
                <div className="movie-stat-label">Your Rating</div>
                <RatingStars 
                  initialRating={userRating} 
                  onRatingChange={handleRatingChange} 
                />
              </div>
            </div>
          </div>
        </div>
        
        {movie.cast && movie.cast.length > 0 && (
          <div className="movie-section">
            <h2 className="movie-section-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Cast
            </h2>
            <div className="cast-grid">
              {movie.cast.map(person => (
                <div key={person.id} className="cast-item">
                  <div className="cast-photo">
                    <img src={person.profileUrl} alt={person.name} />
                  </div>
                  <div className="cast-info">
                    <div className="cast-name">{person.name}</div>
                    <div className="cast-character">{person.character}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {movie.trailerUrl && (
          <div className="movie-section">
            <h2 className="movie-section-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
              Trailer
            </h2>
            <div className="trailer-container">
              <iframe 
                src={movie.trailerUrl}
                title={`${movie.title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
        )}
        
        {similarMovies.length > 0 && (
          <MovieList title="Similar Movies" movies={similarMovies} layout="row" />
        )}
      </div>
    </div>
  );
};

export default MovieDetailsPage;