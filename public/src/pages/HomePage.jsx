import { useEffect, useState } from 'react';
import { useMovieContext } from '../context/MovieContext';
import Hero from '../components/common/Hero';
import MovieList from '../components/common/MovieList';

const HomePage = () => {
  const { 
    featuredMovie, 
    trendingMovies, 
    popularMovies, 
    topRatedMovies,
    isLoading,
    error
  } = useMovieContext();
  
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Simulate a slight delay to show animations
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (error) {
    return (
      <div className="error-container">
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={`home-page ${isPageLoaded ? 'loaded' : ''}`}>
      {isLoading ? (
        <div className="loading-container">
          <div className="loader"></div>
          <p>Loading amazing movies...</p>
        </div>
      ) : (
        <>
          {featuredMovie && <Hero movie={featuredMovie} />}
          
          <div className="container">
            <MovieList 
              title="Trending Now" 
              movies={trendingMovies} 
              viewAll="/categories?filter=trending" 
              layout="row"
            />
            
            <MovieList 
              title="Popular Movies" 
              movies={popularMovies} 
              viewAll="/categories?filter=popular" 
              layout="row"
            />
            
            <MovieList 
              title="Top Rated" 
              movies={topRatedMovies} 
              viewAll="/categories?filter=top-rated" 
              layout="row"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;