import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/library.css';

const Library = () => {
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const username = localStorage.getItem('loggedInUser');

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/auth/${username}/library`);
        setFavorites(res.data.favorites);
        setWatchlist(res.data.watchlist);
      } catch (err) {
        console.error("Error fetching user library:", err);
      }
    };
    fetchLibrary();
  }, [username]);

  return (
    <div className="library-page">
      <h2>🎬 Welcome, {username}</h2>

      <section>
        <h3>⭐ Favorites</h3>
        <div className="movie-grid">
          {favorites.map(movie => (
            <div className="movie-card" key={movie.tmdbId}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
              <h4>{movie.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>⏳ Watchlist</h3>
        <div className="movie-grid">
          {watchlist.map(movie => (
            <div className="movie-card" key={movie.tmdbId}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
              <h4>{movie.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Library;
