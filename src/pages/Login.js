import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/auth/login', form);
      setMessage(res.data);
    } catch (err) {
      setMessage(err.response.data);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;
