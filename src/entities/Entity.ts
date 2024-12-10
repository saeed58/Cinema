import { Results } from "./Results";

export interface Entity<T> {
  totalHits: number;
  results: Results<T>[];
}
