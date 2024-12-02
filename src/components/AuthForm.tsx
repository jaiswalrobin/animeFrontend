import React, { useState } from 'react';
import LoadingIcon from './icons/Loading';
import styles from '../styles/AuthForm.module.css'
import Link from 'next/link';

interface AuthFormProps {
  onSubmit: (e: Event, email: string, password: string) => void;
  isLoading: boolean
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, isLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.authForm}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <div className={styles.forgotPassword}><Link href={'/auth/forgot-password'}>Forgot Password</Link></div>
      <button className={styles.button} onClick={(e) => onSubmit(e, email, password)} >Submit {isLoading && <span><LoadingIcon width={22}/></span>}</button>
    </div>
  );
};

export default AuthForm;
