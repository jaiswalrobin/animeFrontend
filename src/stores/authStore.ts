import { create } from "zustand";
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import axiosClient from "@/services/http";
import { AxiosError } from "axios";

interface AuthState {
  email: string | null;
  isAuthenticated: boolean;
  token: string | null;
  error: string | null;
  isLoading: boolean;
  signup: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  verifyEmail: (token: string) => Promise<void>;
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        email: null,
        isAuthenticated: false,
        token: null,
        error: null,
        isLoading: false,

        signup: async (email, password, firstName, lastName) => {
          set((state) => ({ ...state, isLoading: true, error: null }), false, "signup/start");
          try {
            const response = await axiosClient.post("/auth/signup", {
              email,
              password,
              firstName,
              lastName
            });

            const data = response.data;
            set((state) => ({ ...state, email, isAuthenticated: true, token: data.token, isLoading: false }), false, "signup/success");
          } catch (error) {
            const err = error as AxiosError;
            set((state) => ({ ...state, error: err.message || "Signup failed", isAuthenticated: false, isLoading: false }), false, "signup/error");
          }
        },

        login: async (email, password) => {
          set((state) => ({ ...state, isLoading: true, error: null }), false, "login/start");
          try {
            const response = await axiosClient.post("/auth/login", {
              email,
              password,
            });

            const data = response.data;
            set((state) => ({ ...state, email, isAuthenticated: true, token: data.token, isLoading: false }), false, "login/success");
          } catch (error) {
            const err = error as AxiosError;
            set((state) => ({ ...state, error: err.message || "Login failed", isAuthenticated: false, isLoading: false }), false, "login/error");
          }
        },

        logout: () => {
          set((state) => ({ ...state, email: null, isAuthenticated: false, token: null }), false, "logout");
        },

        verifyEmail: async (token) => {
          set((state) => ({ ...state, isLoading: true, error: null }), false, "verifyEmail/start");
          try {
            const response = await axiosClient.get(`auth/verify-email/${token}`);

            if (response.status !== 200) throw new Error("Verification failed");

            set((state) => ({ ...state, isAuthenticated: true, isLoading: false }), false, "verifyEmail/success");
          } catch (error) {
            const err = error as AxiosError;
            set((state) => ({ ...state, error: err.message || "Verification failed", isLoading: false }), false, "verifyEmail/error");
          }
        },
      }),
      {
        name: "user",
        storage: createJSONStorage(() => localStorage),
      }
    ),
    { name: "AuthStore" }
  )
);

console.log("AuthStore created:", useAuthStore.getState());

export default useAuthStore;