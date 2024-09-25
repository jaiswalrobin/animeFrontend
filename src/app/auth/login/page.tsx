// src/app/auth/login/page.tsx
'use client';

import AuthForm from '@/components/AuthForm';
import axios from 'axios';

export default function Login() {
  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      console.log('Login successful:', response.data);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm onSubmit={handleLogin} />
    </div>
  );
}
