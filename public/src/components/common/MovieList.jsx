import MovieCard from './MovieCard';

const MovieList = ({ title, movies, viewAll, layout = "grid" }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="section">
        <div className="section-title">
          <h2>{title}</h2>
        </div>
        <div className="movie-empty">
          <p>No movies found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="section-title">
        <h2>{title}</h2>
        {viewAll && (
          <a href={viewAll} className="btn btn-text">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        )}
      </div>
      
      {layout === "grid" ? (
        <div className="movie-grid">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="movie-row">
          {movies.map(movie => (
            <div key={movie.id} className="movie-row-item">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;