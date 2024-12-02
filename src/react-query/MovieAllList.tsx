import {
  Card,
  Circle,
  Float,
  Text,
  Image,
  SimpleGrid,
  HStack,
  Box,
  Badge,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import no_image from "../../public/assets/No_image.png";

interface Genre {
  id: number;
  name_fa: string;
}

interface Source {
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

  const { data } = useQuery({
    queryKey: ["movie"],
    queryFn: fetchMovies,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

  return (
    <SimpleGrid columns={5} marginLeft={5} gap={5}>
      {data?.map(
        (movie) =>
          movie.source.is_active == 1 && (
            <Card.Root bg="gray.900" overflow="hidden" rounded="3xl">
              {movie.source.imdb_rank && (
                <Float offsetY="6" offsetX="-4">
                  <Circle
                    shadow="sm"
                    size="10"
                    bg={
                      movie.source.imdb_rank > 7.8
                        ? "green.800"
                        : movie.source.imdb_rank > 6.7
                        ? "green.600"
                        : "orange"
                    }
                    color="white"
                  >
                    {movie.source.imdb_rank}
                  </Circle>
                </Float>
              )}

              <Image
                src={
                  movie.source.poster_path ? movie.source.poster_path : no_image
                }
              />
              <Box margin="10px">
                <HStack>
                  <Badge size="sm" variant="solid" colorPalette="teal">
                    {movie.source.publish_date + " " + movie.source.country}
                  </Badge>
                  {movie.source.is_series == 1 ? (
                    <Badge size="sm" variant="solid" colorPalette="red">
                      سریال{" "}
                    </Badge>
                  ) : null}
                </HStack>
                <Text fontSize="lg">{movie.source.title_fa}</Text>
                <HStack fontSize="sm" color="gray.500">
                  {movie.source.genres.map((genre, index) => (
                    <Text>
                      {index == 0 ? genre.name_fa : "/ " + genre.name_fa}
                    </Text>
                  ))}
                </HStack>
              </Box>
            </Card.Root>
          )
      )}
    </SimpleGrid>
  );
};

export default MovieAllList;
