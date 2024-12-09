import { Results } from "./Results";

export interface Entity {
  totalHits: number;
  results: Results[];
}
