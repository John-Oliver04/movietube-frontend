import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      console.log("Login successful, redirecting...");

      navigate('/library');
    } catch (err) {
      console.error('Login error:', err);
      alert('Invalid login: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <>
      <input onChange={e => setForm({ ...form, username: e.target.value })} placeholder="Username" />
      <input type="password" onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
