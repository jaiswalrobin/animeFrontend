import React, { useState } from 'react';
// import Input from './Input';
// import Button from './Button';

interface AuthFormProps {
  onSubmit: (email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={() => onSubmit(email, password)} >Submit</button>
    </div>
  );
};

export default AuthForm;
