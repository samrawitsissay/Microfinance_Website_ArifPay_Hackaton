import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('users/login/', form);
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <div className='form-container'>
      <h2>Login</h2>
      {error && <p className='error'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name='username' placeholder='Username' value={form.username} onChange={handleChange} required />
        <input name='password' placeholder='Password' type='password' value={form.password} onChange={handleChange} required />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
