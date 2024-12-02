// // store/useAuthStore.ts
// import create from 'zustand';
// import { persist } from 'zustand/middleware';
// import { setCookie, destroyCookie } from 'nookies';
// import { useRouter } from 'next/router';

// interface AuthState {
//   user: any | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   error: string | null;
//   signup: (email: string, password: string) => Promise<void>;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => Promise<void>;
//   forgotPassword: (email: string) => Promise<void>;
//   resetPassword: (token: string, newPassword: string) => Promise<void>;
// }

// export const useAuthStore = create<AuthState>()(
//   persist(
//     (set) => ({
//       user: null,
//       isAuthenticated: false,
//       isLoading: false,
//       error: null,

//       signup: async (email: string, password: string) => {
//         set({ isLoading: true, error: null });
//         try {
//           const response = await fetch('/api/auth/signup', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password }),
//           });

//           const data = await response.json();

//           if (!response.ok) {
//             throw new Error(data.message || 'Signup failed');
//           }

//           // Redirect to login page after successful signup
//           window.location.href = '/auth/login';
//         } catch (error: any) {
//           set({ error: error.message });
//         } finally {
//           set({ isLoading: false });
//         }
//       },

//       login: async (email: string, password: string) => {
//         set({ isLoading: true, error: null });
//         try {
//           const response = await fetch('/api/auth/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password }),
//           });

//           const data = await response.json();

//           if (!response.ok) {
//             throw new Error(data.message || 'Login failed');
//           }

//           // Set JWT in cookie
//           setCookie(null, 'auth_token', data.token, {
//             maxAge: 30 * 24 * 60 * 60, // 30 days
//             path: '/',
//           });

//           set({ user: data.user, isAuthenticated: true });
//           window.location.href = '/user-profile';
//         } catch (error: any) {
//           set({ error: error.message });
//         } finally {
//           set({ isLoading: false });
//         }
//       },

//       logout: async () => {
//         try {
//           await fetch('/api/auth/logout', { method: 'POST' });
//           // Clear JWT cookie
//           destroyCookie(null, 'auth_token');
//           set({ user: null, isAuthenticated: false });
//           window.location.href = '/';
//         } catch (error: any) {
//           set({ error: error.message });
//         }
//       },

//       forgotPassword: async (email: string) => {
//         set({ isLoading: true, error: null });
//         try {
//           const response = await fetch('/api/auth/forgot-password', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email }),
//           });

//           const data = await response.json();

//           if (!response.ok) {
//             throw new Error(data.message || 'Failed to send reset email');
//           }
//         } catch (error: any) {
//           set({ error: error.message });
//         } finally {
//           set({ isLoading: false });
//         }
//       },

//       resetPassword: async (token: string, newPassword: string) => {
//         set({ isLoading: true, error: null });
//         try {
//           const response = await fetch('/api/auth/reset-password', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ token, newPassword }),
//           });

//           const data = await response.json();

//           if (!response.ok) {
//             throw new Error(data.message || 'Password reset failed');
//           }

//           window.location.href = '/auth/login';
//         } catch (error: any) {
//           set({ error: error.message });
//         } finally {
//           set({ isLoading: false });
//         }
//       },
//     }),
//     {
//       name: 'auth-storage',
//       partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
//     }
//   )
// );