import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import MovieCard from "@/components/MovieCard";
import MovieCardContainer from "@/components/MovieCardContainer";
import MovieSkeleon from "@/components/MovieSkeleon";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useMovies from "@/Hooks/useMovies";

import { Genres } from "@/entities/Genres";

interface Props {
  selectedGenre: Genres | null;
  searchText: String | null;
}
const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MovieAllList = ({ selectedGenre, searchText }: Props) => {
  const { data, fetchNextPage, hasNextPage, isFetching } = useMovies({
    selectedGenre,
    searchText,
  });
  const fetchcount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  const total =
    data?.pages.reduce(
      (total, page) => page.totalHits + 0 - 1 + total / total,
      0
    ) || 0;
  return (
    <>
      <InfiniteScroll
        dataLength={fetchcount}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner color="blue.500" borderWidth="4px" size="xl" />}
        
      >
        <Text color="gray.600" fontSize="sm" margin={2}>
          تعداد رکورد : {total}
        </Text>

        <SimpleGrid
          columns={{ xl: 6, lg: 5, md: 4, mdDown: 2 }}
          margin={3}
          gap={3}
        >
          {isFetching &&
            Skeletons.map((skeleton) => (
              <MovieCardContainer key={skeleton}>
                <MovieSkeleon />
              </MovieCardContainer>
            ))}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map(
                (movie) =>
                  movie.source.is_active == 1 && (
                    <MovieCardContainer key={movie.documentId}>
                      <MovieCard movie={movie.source} />
                    </MovieCardContainer>
                  )
              )}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {/* {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginBottom='50px'>
          {isFetching ? "در حال بارگذاری ..." : "بیشتر"}{" "}
        </Button>
      )} */}
    </>
  );
};

export default MovieAllList;
