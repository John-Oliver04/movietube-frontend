import './App.css';
import HomePage from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Library from './pages/Library';


function App() {

  const isLoggedIn = !!localStorage.getItem('loggedInUser');

  return ( 
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/library" element={isLoggedIn ? <Library /> : <Navigate to="/login" />}
/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
