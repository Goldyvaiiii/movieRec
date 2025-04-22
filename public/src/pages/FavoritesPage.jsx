import { useMovieContext } from '../context/MovieContext';
import MovieList from '../components/common/MovieList';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const { favoriteMovies } = useMovieContext();

  return (
    <div className="container">
      <div className="favorites-page">
        <h1 className="page-title">Your Favorites</h1>
        
        {favoriteMovies.length > 0 ? (
          <MovieList
            title={`${favoriteMovies.length} Movies`}
            movies={favoriteMovies}
            layout="grid"
          />
        ) : (
          <div className="favorites-empty">
            <div className="favorites-empty-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3>Your favorites list is empty</h3>
            <p>Start adding movies you love to your favorites collection</p>
            <Link to="/" className="btn btn-primary">
              Discover Movies
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;