import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import '../css/home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = '4116b085e5a70d602764e151492abeb4';

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        setMovies(res.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">🎬 MovieZone</div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/favorites">Favorites</a>
          <a href="/search">Search</a>
          <label style={{marginLeft:'20px'}}> | </label>
          <a href="/signup">Signup</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      {/* Carousel Hero Section */}
        <section className="carousel-hero">
            <Slider {...settings}>
                {movies.slice(0, 5).map((movie) => (
                <div key={movie.id} className="carousel-slide">
                    <div
                    className="carousel-background"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    }}
                    >
                    <div className="carousel-overlay">
                        <h1>{movie.title}</h1>
                        <p>{movie.overview.substring(0, 150)}...</p>
                    </div>
                    </div>
                </div>
                ))}
            </Slider>
        </section>

      {/* Popular Movies Grid */}
        <div className="content">
            <h2>Popular Movies</h2>
            <div className="movie-grid">
                {movies.map((movie) => (
                <div className="movie-card" key={movie.id}>
                    <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    />
                    <div className="movie-info">
                    {/* Stars */}
                    <div className="stars">
                        {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} style={{ color: i < Math.round(movie.vote_average / 2) ? '#ffc107' : '#555' }}>★</span>
                        ))}
                        <span className="vote"> ({movie.vote_average.toFixed(1)})</span>
                    </div>
                    <h3>{movie.title}</h3>
                    <p className="subtitle">{movie.release_date} • {movie.original_language.toUpperCase()}</p>



                    {/* Watch Button */}
                    <button className="watch-btn">▶ Watch</button>
                    </div>
                </div>
                ))}
            </div>
        </div>

    </div>
  );
};

export default HomePage;
