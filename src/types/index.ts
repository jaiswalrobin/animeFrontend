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
  id: string;
  email: string;
  name: string;
  // Add other user properties as needed
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export type {AuthState, User}