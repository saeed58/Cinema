import { Movies } from "@/entities/Movies";
import { Image } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react/card";
import { Stack } from "@chakra-ui/react/stack";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MovieList = () => {
  const fetchMovie = () =>
    axios
      .get<Movies>("https://api.tamashakhoneh.ir/v4/movies/categories/143")
      .then((res) => res.data.data[0].data.items);

  const { data } = useQuery({
    queryKey: ["movie"],
    queryFn: fetchMovie,
  });

  return (
    <>
      {data?.map((movie) => (
        <Stack direction={{ base: "column", md: "row" }} gap="10" padding={2}>
          <Card.Root maxW="sm" overflow="hidden">
            <Image
              src={movie.poster_path}
            />
            <Card.Body gap="2">
              <Card.Title>{movie.title_fa}</Card.Title>
              <Card.Description>
                {movie.imdb_rank}
              </Card.Description>
            </Card.Body>
            
          </Card.Root>
        </Stack>
      ))}
    </>
  );
};

export default MovieList;
