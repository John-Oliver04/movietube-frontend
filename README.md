# 🎥 MovieTube Frontend

The frontend of **MovieTube**, a full-stack movie streaming web application built using **React**, **TMDB API**, and **React Router**. This connects to the Spring Boot backend for user authentication, watchlist, and favorites.
```
BACKEND LINK
https://github.com/John-Oliver04/movietube-backend
```
---

## ✨ Features

- 🔐 Login & Signup with JWT
- 📃 Home page with trending & popular movies from TMDB
- ⭐ Add to Favorites & ⏳ Watchlist
- 🎬 Movie posters, ratings, subtitles, and watch buttons
- 🧭 Route protection (e.g. /library only for logged-in users)
- 🎠 Carousel Hero design
- 🧑 Avatar + Logout after login

---

## ⚙ Tech Stack

- ⚛️ React
- 🌐 Axios
- 🔀 React Router DOM
- 📦 TMDB API
- 🎨 CSS (custom + responsive)
- 🔐 JWT (token stored in localStorage)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/movie-frontend.git
cd movie-frontend
```
###2. Install Dependencies
```
npm install
```
###3. Add Environment Variable
Create a .env file in the root of your React project:
```
env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
✅ Also add this to .gitignore:

gitignore
.env
```
###4. Run the App
```
npm start
The app will start on: http://localhost:3000

🔌 Connect to Backend
The frontend communicates with your Spring Boot backend at:


http://localhost:8080/api/auth/
```
####Make sure your backend is running for login and library pages to work.

📂 Folder Structure
```
pgsql
Copy
Edit
src/
 ├── components/
 │   └── Navbar, MovieCard, CarouselHero, etc.
 ├── pages/
 │   ├── Home.js
 │   ├── Login.js
 │   ├── Signup.js
 │   └── Library.js
 ├── App.js
 ├── App.css
 └── index.js

 ```
🔐 Token-Based Auth Flow
```
On login, JWT token is stored in localStorage


/library is protected: redirects to /login if no token


Authorization: Bearer <token> is sent on requests to backend
```

💡 Roadmap Ideas
```
✅ Movie detail page


✅ Watch trailer feature (YouTube popup)


🔜 User profile & history


🔜 Search & filter


🔜 Pagination or infinite scroll


```
🤝 License
This project is for learning and portfolio purposes. You're welcome to fork or extend it.



👩‍💻 Author
```
Built by John Oliver Virola

📧 [Johnolivervirola4@gmail.com]

🔗 [[Portfolio | LinkedIn | GitHub](https://www.linkedin.com/in/john-oliver-virola-309315285/)]
```
