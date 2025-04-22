// Mock data for a movie service
// In a real application, this would fetch from a real API like TMDB

// MOCK DATA - would come from API in real app
const mockMovies = [
  {
    id: 1,
    title: "Dune: Part Two",
    overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    posterUrl: "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseDate: "2024-03-01",
    voteAverage: 8.2,
    runtime: 166,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    cast: [
      { id: 101, name: "Timothée Chalamet", character: "Paul Atreides", profileUrl: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 102, name: "Zendaya", character: "Chani", profileUrl: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 103, name: "Rebecca Ferguson", character: "Lady Jessica", profileUrl: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    budget: 165000000,
    revenue: 707441178,
    status: "Released"
  },
  {
    id: 2,
    title: "Oppenheimer",
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    posterUrl: "https://images.pexels.com/photos/2873671/pexels-photo-2873671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseDate: "2023-07-21",
    voteAverage: 8.4,
    runtime: 180,
    genres: ["Biography", "Drama", "History"],
    cast: [
      { id: 104, name: "Cillian Murphy", character: "J. Robert Oppenheimer", profileUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 105, name: "Emily Blunt", character: "Katherine Oppenheimer", profileUrl: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 106, name: "Robert Downey Jr.", character: "Lewis Strauss", profileUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    budget: 100000000,
    revenue: 953800000,
    status: "Released"
  },
  {
    id: 3,
    title: "The Batman",
    overview: "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    posterUrl: "https://images.pexels.com/photos/10826121/pexels-photo-10826121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseDate: "2022-03-04",
    voteAverage: 7.8,
    runtime: 176,
    genres: ["Action", "Crime", "Drama"],
    cast: [
      { id: 107, name: "Robert Pattinson", character: "Bruce Wayne / Batman", profileUrl: "https://images.pexels.com/photos/1862547/pexels-photo-1862547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 108, name: "Zoë Kravitz", character: "Selina Kyle / Catwoman", profileUrl: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 109, name: "Paul Dano", character: "Edward Nashton / Riddler", profileUrl: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    budget: 185000000,
    revenue: 770836163,
    status: "Released"
  },
  {
    id: 4,
    title: "Everything Everywhere All at Once",
    overview: "A middle-aged Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
    posterUrl: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseDate: "2022-03-25",
    voteAverage: 8.7,
    runtime: 139,
    genres: ["Action", "Adventure", "Comedy"],
    cast: [
      { id: 110, name: "Michelle Yeoh", character: "Evelyn Wang", profileUrl: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 111, name: "Ke Huy Quan", character: "Waymond Wang", profileUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 112, name: "Jamie Lee Curtis", character: "Deirdre Beaubeirdre", profileUrl: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    budget: 25000000,
    revenue: 140795000,
    status: "Released"
  },
  {
    id: 5,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterUrl: "https://images.pexels.com/photos/4097159/pexels-photo-4097159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/18457727/pexels-photo-18457727/free-photo-of-view-of-the-ocean-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseDate: "2014-11-07",
    voteAverage: 8.6,
    runtime: 169,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    cast: [
      { id: 113, name: "Matthew McConaughey", character: "Cooper", profileUrl: "https://images.pexels.com/photos/14514310/pexels-photo-14514310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 114, name: "Anne Hathaway", character: "Brand", profileUrl: "https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 115, name: "Jessica Chastain", character: "Murph", profileUrl: "https://images.pexels.com/photos/18989966/pexels-photo-18989966/free-photo-of-redhead-woman-with-freckles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    budget: 165000000,
    revenue: 701729206,
    status: "Released"
  },
  {
    id: 6,
    title: "Parasite",
    overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    posterUrl: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseDate: "2019-10-11",
    voteAverage: 8.5,
    runtime: 132,
    genres: ["Comedy", "Drama", "Thriller"],
    cast: [
      { id: 116, name: "Song Kang-ho", character: "Kim Ki-taek", profileUrl: "https://images.pexels.com/photos/4588012/pexels-photo-4588012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 117, name: "Lee Sun-kyun", character: "Park Dong-ik", profileUrl: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 118, name: "Cho Yeo-jeong", character: "Park Yeon-kyo", profileUrl: "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    budget: 11400000,
    revenue: 258773551,
    status: "Released"
  },
  {
    id: 7,
    title: "Spider-Man: Across the Spider-Verse",
    overview: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    posterUrl: "https://images.pexels.com/photos/4150128/pexels-photo-4150128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseDate: "2023-06-02",
    voteAverage: 8.6,
    runtime: 140,
    genres: ["Animation", "Action", "Adventure"],
    cast: [
      { id: 119, name: "Shameik Moore", character: "Miles Morales", profileUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 120, name: "Hailee Steinfeld", character: "Gwen Stacy", profileUrl: "https://images.pexels.com/photos/3152227/pexels-photo-3152227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 121, name: "Oscar Isaac", character: "Miguel O'Hara", profileUrl: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    budget: 100000000,
    revenue: 690514888,
    status: "Released"
  },
  {
    id: 8,
    title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    posterUrl: "https://images.pexels.com/photos/3910141/pexels-photo-3910141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/3617467/pexels-photo-3617467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseDate: "2010-07-16",
    voteAverage: 8.4,
    runtime: 148,
    genres: ["Action", "Adventure", "Sci-Fi"],
    cast: [
      { id: 122, name: "Leonardo DiCaprio", character: "Dom Cobb", profileUrl: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 123, name: "Joseph Gordon-Levitt", character: "Arthur", profileUrl: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 124, name: "Elliot Page", character: "Ariadne", profileUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    budget: 160000000,
    revenue: 826133916,
    status: "Released"
  },
  {
    id: 9,
    title: "Avatar: The Way of Water",
    overview: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    posterUrl: "https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/3876407/pexels-photo-3876407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseDate: "2022-12-16",
    voteAverage: 7.6,
    runtime: 192,
    genres: ["Action", "Adventure", "Fantasy"],
    cast: [
      { id: 125, name: "Sam Worthington", character: "Jake Sully", profileUrl: "https://images.pexels.com/photos/1081188/pexels-photo-1081188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 126, name: "Zoe Saldana", character: "Neytiri", profileUrl: "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 127, name: "Sigourney Weaver", character: "Kiri", profileUrl: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    budget: 250000000,
    revenue: 2320250281,
    status: "Released"
  },
  {
    id: 10,
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterUrl: "https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/73833/weld-multi-layer-welding-seam-73833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseDate: "1994-10-14",
    voteAverage: 8.7,
    runtime: 142,
    genres: ["Drama"],
    cast: [
      { id: 128, name: "Tim Robbins", character: "Andy Dufresne", profileUrl: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 129, name: "Morgan Freeman", character: "Ellis Boyd 'Red' Redding", profileUrl: "https://images.pexels.com/photos/92933/pexels-photo-92933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 130, name: "Bob Gunton", character: "Warden Norton", profileUrl: "https://images.pexels.com/photos/412840/pexels-photo-412840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    budget: 25000000,
    revenue: 28341469,
    status: "Released"
  },
  {
    id: 11,
    title: "The Godfather",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterUrl: "https://images.pexels.com/photos/2229671/pexels-photo-2229671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/17239073/pexels-photo-17239073/free-photo-of-suit-man-standing-in-night-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseDate: "1972-03-24",
    voteAverage: 8.7,
    runtime: 175,
    genres: ["Crime", "Drama"],
    cast: [
      { id: 131, name: "Marlon Brando", character: "Don Vito Corleone", profileUrl: "https://images.pexels.com/photos/1370719/pexels-photo-1370719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 132, name: "Al Pacino", character: "Michael Corleone", profileUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 133, name: "James Caan", character: "Sonny Corleone", profileUrl: "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    budget: 6000000,
    revenue: 250000000,
    status: "Released"
  },
  {
    id: 12,
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    posterUrl: "https://images.pexels.com/photos/1978722/pexels-photo-1978722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/3880650/pexels-photo-3880650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseDate: "1994-10-14",
    voteAverage: 8.5,
    runtime: 154,
    genres: ["Crime", "Drama"],
    cast: [
      { id: 134, name: "John Travolta", character: "Vincent Vega", profileUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 135, name: "Samuel L. Jackson", character: "Jules Winnfield", profileUrl: "https://images.pexels.com/photos/1042140/pexels-photo-1042140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 136, name: "Uma Thurman", character: "Mia Wallace", profileUrl: "https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    budget: 8000000,
    revenue: 213900000,
    status: "Released"
  }
];

// Helper function to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Get trending movies
export const fetchTrendingMovies = async () => {
  await delay(800);
  return mockMovies.slice(0, 5);
};

// Get popular movies
export const fetchPopularMovies = async () => {
  await delay(600);
  return mockMovies.slice(5, 10);
};

// Get top rated movies
export const fetchTopRatedMovies = async () => {
  await delay(700);
  return mockMovies.filter(movie => movie.voteAverage >= 8.5);
};

// Get movie details by ID
export const fetchMovieDetails = async (id) => {
  await delay(500);
  const movie = mockMovies.find(movie => movie.id === id);
  if (!movie) {
    throw new Error('Movie not found');
  }
  return movie;
};

// Search movies
export const searchMovies = async (query) => {
  await delay(300);
  if (!query || query.trim() === '') {
    return [];
  }
  
  const lowerCaseQuery = query.toLowerCase();
  return mockMovies.filter(movie => 
    movie.title.toLowerCase().includes(lowerCaseQuery) || 
    movie.overview.toLowerCase().includes(lowerCaseQuery)
  );
};

// Get movies by genre
export const fetchMoviesByGenre = async (genre) => {
  await delay(500);
  if (!genre || genre.trim() === '') {
    return [];
  }
  
  const lowerCaseGenre = genre.toLowerCase();
  return mockMovies.filter(movie => 
    movie.genres.some(g => g.toLowerCase() === lowerCaseGenre)
  );
};

// Get similar movies
export const fetchSimilarMovies = async (id) => {
  await delay(800);
  const movie = mockMovies.find(movie => movie.id === id);
  if (!movie) {
    return [];
  }
  
  // Get movies with at least one matching genre
  return mockMovies
    .filter(m => 
      m.id !== id && 
      m.genres.some(genre => movie.genres.includes(genre))
    )
    .slice(0, 4);
};

// Get all genres
export const fetchGenres = async () => {
  await delay(300);
  // Extract unique genres from all movies
  const allGenres = new Set();
  mockMovies.forEach(movie => {
    movie.genres.forEach(genre => allGenres.add(genre));
  });
  
  return Array.from(allGenres).sort();
};