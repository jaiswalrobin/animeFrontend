'use client';

import axiosClient from '@/services/http';
import { useState } from 'react';
import styles from '../../styles/ForgotPassword.module.css'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axiosClient.post('/auth/forgot-password', {
        email,
      });

      if (response.status >= 500) {
        throw new Error('Internal Server Error');
      }

      setMessage(response.statusText);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className={styles.forgotPasswordForm}>
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ForgotPasswordPage;
