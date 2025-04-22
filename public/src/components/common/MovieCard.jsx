import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMovieContext } from '../../context/MovieContext';

const MovieCard = ({ movie }) => {
  const { toggleFavorite, isFavorite } = useMovieContext();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(movie.id);
  };

  const isMovieFavorite = isFavorite(movie.id);

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <div className="movie-card-poster">
        {!imageLoaded && <div className="loading-shimmer" style={{ width: '100%', height: '100%' }}></div>}
        <img 
          src={movie.posterUrl} 
          alt={movie.title} 
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        {movie.voteAverage >= 8 && (
          <div className="movie-card-badge">Top Rated</div>
        )}
      </div>
      <div className="movie-card-content">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div className="movie-card-info">
          <div className="movie-card-year">{movie.releaseDate?.split('-')[0] || 'N/A'}</div>
          <div className="movie-card-rating">
            <span className="movie-card-rating-icon">★</span>
            <span className="movie-card-rating-value">{movie.voteAverage.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className="movie-card-actions">
        <button 
          className={`movie-card-action favorite ${isMovieFavorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={isMovieFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isMovieFavorite ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          )}
        </button>
      </div>
    </Link>
  );
};

export default MovieCard;