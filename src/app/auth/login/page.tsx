// src/app/auth/login/page.tsx
'use client';

import AuthForm from '@/components/AuthForm';
import useAuthStore from '@/stores/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
  const { login, isLoading, user } = useAuthStore();
  const router = useRouter()

  // useEffect(() => {
  //   if (user?.id) {
  //     // Redirect to profile page if the user is logged in
  //     router.replace('/user/profile');
  //   }
  // }, [user, router]);

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await login(email, password );
      console.log('Login successful:', response);
      router.push('/user/profile')
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {
        isLoading ? <div>Logging you in...</div> : <div>login done</div>
      }
      <AuthForm onSubmit={handleLogin} />
    </div>
  );
}
