'use client'; // Enables client-side functionality

import { useEffect, useState } from 'react';
import useAuthStore from '@/stores/authStore'; // Import the Zustand store
import { useCounterStore } from '@/stores/countStore';

const logCount = () => {
  useCounterStore.setState({count: 23})
  // increment({count: 23})
  // console.log(count, 'insidieffunction...')
}

const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isLoading, error } = useAuthStore(); // Zustand signup action

  const {count, increment} = useCounterStore()

  useEffect(() => {
      console.log("AuthStore state:", useAuthStore.getState());
      logCount()
  }, []);

  // console.log(count, 'count')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(email, password, firstName, lastName);
  };


  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <button onClick={increment}>Increment</button>
      <form onSubmit={handleSubmit}>
        
    <div>
      <div>{count}</div>
      <label>First Name</label>
        <input 
          type="text" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Last Name</label>
        <input 
          type="text" 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} 
          required 
        />
      </div>



        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignupPage;
