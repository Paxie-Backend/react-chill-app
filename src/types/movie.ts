export type MovieCategory =
  "new_release" | "recent" | "top_rating" | "trending";

export interface Movie {
  id: number;
  name: string;
  is_new_episode: boolean;
  year: string;
  is_premium: boolean;
  type: MovieCategory;
  cover_url: string;
  banner_url: string;
}
