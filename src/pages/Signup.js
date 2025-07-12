import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/auth/signup', form);
      setMessage(res.data);
    } catch (err) {
      setMessage(err.response.data);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <button onClick={handleSignup}>Sign Up</button>
      <p>{message}</p>
    </div>
  );
};

export default Signup;
