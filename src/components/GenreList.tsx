
import { Genres } from "@/entities/Genres";
import useGenres from "@/Hooks/useGenres";
import { Button } from "@chakra-ui/react";
import { List } from "@chakra-ui/react/list";
import { Stack } from "@chakra-ui/react/stack";

interface Props {
  onSelectGenre: (genre: Genres) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { data , error } = useGenres() ;
  if (error) return error.message ;

  return (
    <Stack align="flex-start" flex={1} gap={6}>
      <List.Root variant="plain">

        {data?.map((genre, index) => (
          <List.Item key={index}>
            <Button
              whiteSpace="normal"
              variant="plain"
              onClick={() => onSelectGenre(genre.source)}
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
