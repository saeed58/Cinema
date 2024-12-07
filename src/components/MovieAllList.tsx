import { SimpleGrid ,Text} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MovieCard from "@/components/MovieCard";
import MovieCardContainer from "@/components/MovieCardContainer";
import MovieSkeleon from "@/components/MovieSkeleon";
import { apiQuery } from "../entities/apiQuery";
import { Results } from "@/entities/Results";

interface Props {
  selectedGenre: Results | null;
  searchText : String | null;
}
const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MovieAllList = ( {selectedGenre , searchText} : Props) => {
  const fetchMovies = () =>
    axios
      .get<apiQuery>("https://searchia.ir/api/index/movie", {
        params: {
          query: searchText? searchText : '',
          facets:'country,genre',
          filters:'is_active:1',
          facetFilters: selectedGenre ? 'genre:'+selectedGenre?.source.name_fa: '',

          size: 20,
          sorts: "publish_date<DESC>",
        },
        headers: {
          apikey: "mLpqZlvuCXk1vypda5givd5GqgCyDi8u",
        },
      })
      .then((res) => res.data.entity);

  const { data, isPending } = useQuery({
    queryKey: ["movie",selectedGenre,searchText],
    queryFn: fetchMovies,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
  const totalHint = data?.totalHits;

  const MovieResult=data?.results;

  return (
    <>
    
    <Text color='gray.600' fontSize='sm' marginBottom={2}>تعداد رکورد :  {totalHint}</Text>
    <SimpleGrid columns={{ xl: 6, lg: 5, md: 4, mdDown: 2 }} marginLeft={5} gap={5}>
      {isPending &&
        Skeletons.map((skeleton) => (
          <MovieCardContainer key={skeleton}>
            <MovieSkeleon />
          </MovieCardContainer>
        ))}
      {MovieResult?.map(
        (movie) =>
          movie.source.is_active == 1 && (
            <MovieCardContainer key={movie.documentId}>
              <MovieCard movie={movie.source} />
            </MovieCardContainer>
          )
      )}
    </SimpleGrid>
    </>
  );
};

export default MovieAllList;
