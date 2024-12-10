
import { MovieGenre } from "./MoveGenres";

export interface Movies {
  title_fa: string;
  title_en: string;
  imdb_rank: number;
  poster_path: string;
  is_active: number;
  country: string;
  publish_date: string;
  is_series: number;
  genres: MovieGenre[];
}
