import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in both fields.');
      return;
    }

    console.log('Logging in with', username, password);

   
    navigate('/dashboard');
  };

  return (
    <>
    <div>
      <h1 className='bg-primary text-center'>LOGIN PAGE</h1>
    </div>
    <div className='LogBox'>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type='text'
          placeholder='Enter your username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password: </label>
        <input
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/dashboard">
          <button type='submit'>Login</button>
        </Link>
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        
      </form>
    </div>
    </>
  );
}

export default Login;
