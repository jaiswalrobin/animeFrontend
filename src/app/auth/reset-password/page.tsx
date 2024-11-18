'use client';

import axiosClient from '@/services/http';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '../../styles/ForgotPassword.module.css';
import withRouteGuard from '@/components/RouteGuard';

const ResetPasswordPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get the reset token from the URL
  const token = searchParams.get('token')
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      setError('Reset token is missing.');
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axiosClient.post('/auth/reset-password', {
        resetToken: token,
        newPassword,
      });

      if (response.status >= 500) {
        throw new Error('Internal Server Error');
      }

      setMessage('Password has been successfully reset. You can now login with your new password.');
      setTimeout(() => router.push('/auth/login'), 2000);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className={styles.forgotPasswordForm}>
      <h1>Reset Your Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default withRouteGuard(ResetPasswordPage)
