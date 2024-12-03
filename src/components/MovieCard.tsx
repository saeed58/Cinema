import { Source } from "@/react-query/MovieAllList";
import {
  Badge,
  Box,
  Card,
  Circle,
  Float,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import no_image from "../../public/assets/No_image.png";
const limit = 17;
interface Props {
    movie : Source;
}
const MovieCard = ({movie} : Props) => (
  <Card.Root  variant='subtle'  >
    {movie.imdb_rank && (
      <Float offsetY="6" offsetX="-4">
        <Circle
          shadow="sm"
          size="10"
          bg={
            movie.imdb_rank > 7.8
              ? "green.800"
              : movie.imdb_rank > 6.7
              ? "green.600"
              : "orange"
          }
          color="white"
        >
          {movie.imdb_rank}
        </Circle>
      </Float>
    )}

    <Image
      src={movie.poster_path ? movie.poster_path : no_image}
    />
    <Box margin="10px">
      <Text fontSize="md">
        {movie.title_fa.substring(0, limit)}
        {movie.title_fa.length > limit ? "..." : null}
      </Text>

      <HStack fontSize="sm" color="gray.500">
        {movie.genres.map((genre) => (
          <Badge size="xs" variant="outline" color="gray.500">
            {genre.name_fa}
          </Badge>
        ))}
      </HStack>

      <HStack marginTop={1}>
        <Badge size="sm" variant="solid" colorPalette="teal">
          {movie.publish_date + " " + movie.country}
        </Badge>
        {movie.is_series == 1 ? (
          <Badge size="sm" variant="solid" colorPalette="red">
            سریال{" "}
          </Badge>
        ) : null}
      </HStack>
    </Box>
  </Card.Root>
);

export default MovieCard;
