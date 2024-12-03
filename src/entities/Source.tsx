import { Genre } from "./Genre";

export interface Source {
  title_fa: string;
  title_en: string;
  imdb_rank: number;
  poster_path: string;
  is_active: number;
  country: string;
  publish_date: string;
  is_series: number;
  genres: Genre[];

  name_fa:string; //Genre
  for_search: number; //Genre


}
