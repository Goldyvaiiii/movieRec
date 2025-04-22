import { Link } from 'react-router-dom';

const Hero = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="hero">
      <div className="hero-background">
        <img src={movie.backdropUrl} alt={movie.title} />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">{movie.title}</h1>
        <p className="hero-overview">{movie.overview}</p>
        
        <div className="hero-meta">
          <div className="hero-rating">
            <span className="hero-rating-icon">★</span>
            <span className="hero-rating-value">{movie.voteAverage.toFixed(1)}</span>
          </div>
          <div className="hero-year">{movie.releaseDate?.split('-')[0]}</div>
          {movie.runtime && (
            <div className="hero-duration">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {movie.runtime} min
            </div>
          )}
          {movie.genres?.length > 0 && (
            <div className="hero-genre">{movie.genres.slice(0, 3).join(', ')}</div>
          )}
        </div>
        
        <div className="hero-actions">
          <Link to={`/movie/${movie.id}`} className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Watch Trailer
          </Link>
          <Link to={`/movie/${movie.id}`} className="btn btn-outline">More Info</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;