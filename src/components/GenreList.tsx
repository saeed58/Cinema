import { Results } from "@/entities/Results";
import useGenres from "@/Hooks/useGenres";
import { Button } from "@chakra-ui/react";
import { List } from "@chakra-ui/react/list";
import { Stack } from "@chakra-ui/react/stack";


interface Props {
  onSelectGenre: (genre: Results) => void;
}
const GenreList = ({ onSelectGenre }: Props) => { 
  const { data } = useGenres();

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
