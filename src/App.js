import './App.css';
import HomePage from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return ( 
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
