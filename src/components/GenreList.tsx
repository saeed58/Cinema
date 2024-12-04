import { apiQuery } from "@/entities/apiQuery";
import { Results } from "@/entities/Results";
import { Button } from "@chakra-ui/react";
import { List } from "@chakra-ui/react/list";
import { Stack } from "@chakra-ui/react/stack";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Props {
  onSelectGenre: (genre: Results) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const fetchGenre = () =>
    axios
      .get<apiQuery>("https://searchia.ir/api/index/genre", {
        params: {
          query: "",
          size: 50,
        },
        headers: {
          apikey: "mLpqZlvuCXk1vypda5givd5GqgCyDi8u",
        },
      })
      .then((res) => res.data.entity.results);

  const { data } = useQuery({
    queryKey: ["genre"],
    queryFn: fetchGenre,
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
