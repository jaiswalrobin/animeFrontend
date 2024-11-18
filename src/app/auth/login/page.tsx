"use client";

import AuthForm from "@/components/AuthForm";
import useAuthStore from "@/stores/authStore";
import { useState } from "react";
import styles from "../../styles/login.module.css";
import { AxiosError } from "axios";
import withRouteGuard from "@/components/RouteGuard";

export const Login = () => {
  const { login, isLoading } = useAuthStore();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: Event, email: string, password: string) => {
    try {
      e.preventDefault();
      await login(email, password);
      console.log("Login successful:");
      setError(null);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Login failed:", error);

        setError(
          error?.response?.data?.message || "An error occurred during login"
        );
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>Login</h1>
        {error && <div className={styles.error}>{error}</div>}
        <AuthForm onSubmit={handleLogin} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default withRouteGuard(Login)