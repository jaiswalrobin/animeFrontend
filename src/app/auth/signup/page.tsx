'use client'; // Enables client-side functionality

import { useEffect, useState } from 'react';
import useAuthStore from '@/stores/authStore'; // Import the Zustand store
// import { useCounterStore } from '@/stores/countStore';
import styles from '../../styles/signup.module.css'; // Custom CSS module for signup page
import { useRouter } from 'next/navigation';

// const logCount = () => {
//   useCounterStore.setState({ count: 23 });
// };

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isLoading, user } = useAuthStore(); // Zustand signup action
  const router = useRouter()

  // useEffect(() => {
  //   if (user?.id) {
  //     // Redirect to profile page if the user is logged in
  //     router.replace('/user/profile');
  //   }
  // }, [user, router]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await signup(email, password, firstName, lastName);
      router.push('/auth/login')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className={styles.signupPage}>
      {/* <div className={styles.backgroundShapes}>
        <div className={styles.shapeCircle}></div>
        <div className={styles.shapeTriangle}></div>
        <div className={styles.shapeWave}></div>
        <div className={styles.shapeStar}></div>
      </div> */}
      <div className={styles.container}>
        <h1 className={styles.title}>Join the Anime Adventure!</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.input}
              placeholder="first name"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={styles.input}
              placeholder="last name"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="email"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="keep it secret"
              required
            />
          </div>
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </button>
          {/* {error && <p className={styles.error}>{error}</p>} */}
        </form>
        
        <div className={styles.characterIllustration}>
          <img src="/path/to/anime-character.png" alt="Anime Character" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
