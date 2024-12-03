import { SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import MovieCard from "@/components/MovieCard";
import MovieCardContainer from "@/components/MovieCardContainer";
import MovieSkeleon from "@/components/MovieSkeleon";

interface Genre {
  id: number;
  name_fa: string;
}

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
}

interface Results {
  documentId: number;
  source: Source;
}

interface Entity {
  totalHits: number;
  results: Results[];
}

interface MoviesAll {
  entity: Entity;
}
const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MovieAllList = () => {
  const fetchMovies = () =>
    axios
      .get<MoviesAll>("https://searchia.ir/api/index/movie", {
        params: {
          query: "",
          size: 20,
          sorts: "publish_date<DESC>",
        },
        headers: {
          apikey: "mLpqZlvuCXk1vypda5givd5GqgCyDi8u",
        },
      })
      .then((res) => res.data.entity.results);

  const { data, isPending } = useQuery({
    queryKey: ["movie"],
    queryFn: fetchMovies,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

  return (
    <SimpleGrid columns={{ xl: 6, lg: 4, md: 3, sm: 1 }} marginLeft={5} gap={5}>
      {isPending &&
        Skeletons.map((skeleton) => (
          <MovieCardContainer key={skeleton}>
            <MovieSkeleon  />
          </MovieCardContainer>
        ))}
      {data?.map(
        (movie) =>
          movie.source.is_active == 1 && (
            <MovieCardContainer key={movie.documentId}>
              <MovieCard movie={movie.source} />
            </MovieCardContainer>
          )
      )}
    </SimpleGrid>
  );
};

export default MovieAllList;
