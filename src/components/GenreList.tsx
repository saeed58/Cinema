import { apiQuery } from "@/entities/apiQuery";
import { Results } from "@/entities/Results";
import apiClient from "@/services/apiClient";
import { Button } from "@chakra-ui/react";
import { List } from "@chakra-ui/react/list";
import { Stack } from "@chakra-ui/react/stack";
import { useQuery } from "@tanstack/react-query";

interface Props {
  onSelectGenre: (genre: Results) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const fetchGenre = () =>
    apiClient
        .get<apiQuery>('/genre' , {
          params: {
          query: "",
          size: 50,
        }},)
        .then((res) => res.data.entity.results);
      

  const { data } = useQuery({
    queryKey: ["genre"],
    queryFn: fetchGenre ,
    staleTime: 24 * 60 * 60 * 1000, //24h
    
  });
  return (
    <Stack align="flex-start" flex={1} gap={6}>
      <List.Root variant="plain">
        {data?.map((genre, index) => (
          <List.Item key={index}>
            <Button
              whiteSpace="normal"
              variant="plain"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.source.name_fa}
            </Button>
          </List.Item>
        ))}
      </List.Root>
    </Stack>
  );
};

export default GenreList;
