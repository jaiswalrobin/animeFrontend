export interface Anime {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  // Add more properties as needed
}

export interface SearchFilters {
  genre: string;
  season: string;
  sortBy: string;
}

interface User {
  email: string | null | undefined;
  firstName: string | null;
  lastName:string | null;
  id: string | null;
  emailVerified: boolean
}

interface AuthState {
  user: User | null,
  redirectPath: string | null,
  isLoading: boolean;
  _hasHydrated: boolean;
  sessionExpiry: string | null,
  setUser: (user: User | null) => void;
  setHasHydrated: (state: boolean) => void;
  resetState: () => void;
  signup: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  verifyEmail: (token: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  setRedirectLink: (path: string) => void
}

interface UserState {
  userProfile: object | null;
  _hasHydrated: boolean;
  setUserState: (user: User | null) => void;
  setHasHydrated: (state: boolean) => void;
  resetState: () => void;
  getUser: (id: string) => Promise<void>;
}

interface ErrorState {
  error: string | null | undefined;
  resetError: () => void;
  setError: (error: string) => void;
  handleUnauthorized: () => void;
  handleForbidden: () => void;
  handleOtherErrors: (error: string) => void;
}

type RouteConfig = {
  pattern: RegExp;
  auth: 'required' | 'optional' | 'none';
  verifiedEmail?: boolean;
};
export type {AuthState, User, RouteConfig, UserState, ErrorState}