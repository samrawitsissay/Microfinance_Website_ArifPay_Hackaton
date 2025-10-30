import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://127.0.0.1:8000/api/users/register/', form);
      alert('Registered. Please login.');
      navigate('/login');
    } catch (err) {
      setError(JSON.stringify(err.response?.data || err.message));
    }
  };

  return (
    <div className='form-container'>
      <h2>Register</h2>
      {error && <p className='error'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name='username' placeholder='Username' value={form.username} onChange={handleChange} required />
        <input name='email' placeholder='Email' type='email' value={form.email} onChange={handleChange} required />
        <input name='password' placeholder='Password' type='password' value={form.password} onChange={handleChange} required />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}
