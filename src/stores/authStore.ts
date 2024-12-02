import { create } from "zustand";
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import axiosClient from "@/services/http";
import { AxiosError } from "axios";
import { AuthState } from "@/types";

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isLoading: false,
        sessionExpiry: null,
        _hasHydrated: false,
        redirectPath: null,
        user: { firstName: null, lastName: null, id: null, email: null, emailVerified: false},
        // Action to update hydration state
        setHasHydrated: (state) => set({ _hasHydrated: state }),
        setUser: (user) => set({ user }, false, "setUser"),
        resetState: () => set({user: null, sessionExpiry: null }, false, "resetState"),
        setRedirectLink: (path) => set({ redirectPath: path }),

        // TODO: show signup success msg or any errors
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

            const {user, sessionExpiry} = response.data;
            console.log(user, 'data-aaya', sessionExpiry)
            set((state) => ({ ...state, user, sessionExpiry, isLoading: false }), false, "login/success");
          } catch (error) {
            const err = error as AxiosError;
            set((state) => ({ ...state, isLoading: false }), false, "login/error");
            throw err
          }
        },

        logout: async () => {
          try {
            await axiosClient.post("/auth/logout");
            set((state) => ({...state, user:null, sessionExpiry: null}), true, "logout");
            
          } catch (error) {
            const err = error as AxiosError;
            throw err
          }
        },

        verifyEmail: async (token) => {
          set((state) => ({ ...state, isLoading: true }), false, "verifyEmail/start");
          try {
            const response = await axiosClient.get(`auth/verify-email?token=${token}`);

            if (response.status !== 200) throw new Error("Verification failed");

            set((state) => ({ 
              ...state, 
              user: state.user ? { ...state.user, emailVerified: true } : null, 
              isLoading: false 
            }), false, "verifyEmail/success");
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
          user: state.user,
          sessionExpiry: state.sessionExpiry
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