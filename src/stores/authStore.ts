import { create } from "zustand";
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import axiosClient from "@/services/http";
import { AxiosError } from "axios";

interface User  {
  email: string | null;
  firstName: string | null;
  lastName:string | null;
  id: string | null;
}
interface AuthState {
  user: User | null,
  isLoading: boolean;
  _hasHydrated: boolean;
  setUser: (user: User | null) => void;
  setHasHydrated: (state: boolean) => void;
  clearUser: () => void;
  signup: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  verifyEmail: (token: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isLoading: false,
        _hasHydrated: false,
        user: { firstName: null, lastName: null, id: null, email: null},
        // Action to update hydration state
        setHasHydrated: (state) => set({ _hasHydrated: state }),
        setUser: (user) => set({ user }, false, "setUser"),
        clearUser: () => set({ user: null }, false, "clearUser"),

        signup: async (email, password, firstName, lastName) => {
          set((state) => ({ ...state, isLoading: true }), false, "signup/start");
          try {
            await axiosClient.post("/auth/signup", {
              email,
              password,
              firstName,
              lastName
            });

            set((state) => ({ ...state, isLoading: false }), false, "signup/success");
          } catch (error) {
            const err = error as AxiosError;
            set((state) => ({ ...state, isLoading: false }), false, "signup/error");
            throw err
          }
        },

        login: async (email, password) => {
          set((state) => ({ ...state, isLoading: true }), false, "login/start");
          try {
            const response = await axiosClient.post("/auth/login", {
              email,
              password,
            });

            const data = response.data.user;
            console.log(data, 'data-aaya')
            set((state) => ({ ...state, user: data, isLoading: false }), false, "login/success");
          } catch (error) {
            const err = error as AxiosError;
            set((state) => ({ ...state, isLoading: false }), false, "login/error");
            throw err
          }
        },

        logout: () => {
          // set((state) => ({ }), false, "logout");
          set((state) => ({ ...state, user: null }), false, "logout");
          localStorage.removeItem('user');
        },

        verifyEmail: async (token) => {
          set((state) => ({ ...state, isLoading: true, error: null }), false, "verifyEmail/start");
          try {
            const response = await axiosClient.get(`auth/verify-email/${token}`);

            if (response.status !== 200) throw new Error("Verification failed");

            set((state) => ({ ...state, isLoading: false }), false, "verifyEmail/success");
          } catch (error) {
            const err = error as AxiosError;
            set((state) => ({ ...state, isLoading: false }), false, "verifyEmail/error");
            throw err
          }
        },

        forgotPassword: async (email) => {
          // Call your API endpoint for forgot password
          const response = await axiosClient.post('/api/auth/forgot-password', {
            data: JSON.stringify({ email }),
          });
      
          if (response.status !== 200) {
            throw new Error('Failed to send reset password email');
          }
      
          // return await response.json(); // or any response handling as needed
        },
      }),
      {
        name: "user",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          user: state.user
        }),
        onRehydrateStorage: (state) => {
          // Set `_hasHydrated` to true after hydration completes
          return () => state?.setHasHydrated(true);
        },
      }
    ),
    { name: "AuthStore" }
  )
);

console.log("AuthStore created:", useAuthStore.getState());

export default useAuthStore;