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
