// SignUp.jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignUp = () => {
    // Implement signup logic here (e.g., API request)
    // If signup is successful, redirect to the main page
    history.push('/main');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
