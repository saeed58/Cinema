import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import MovieCard from "@/components/MovieCard";
import MovieCardContainer from "@/components/MovieCardContainer";
import MovieSkeleon from "@/components/MovieSkeleon";
import { apiQuery } from "../entities/apiQuery";
import { Results } from "@/entities/Results";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import apiClient from "@/services/apiClient";

interface Props {
  selectedGenre: Results | null;
  searchText: String | null;
}

const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const pageSize = 20;
const MovieAllList = ({ selectedGenre, searchText }: Props) => {
  const fetchMovies = ({ pageParam = 0 }) =>
    apiClient
      .get<apiQuery>('/movie' ,{
        params: {
          query: searchText ? searchText : "",
          facets: "country,genre",
          filters: "is_active:1",
          facetFilters: selectedGenre
            ? "genre:" + selectedGenre?.source.name_fa
            : "",
          from: pageParam,
          size: pageSize,
          sorts: "publish_date<DESC>",
        },
      })
      .then((res) => res.data.entity);
      

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching
  } = useInfiniteQuery({
    queryKey: ["movie", selectedGenre, searchText],
    queryFn: fetchMovies,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
     
      return lastPage.totalHits > allPages.length*pageSize
        ? allPages.length*pageSize
        : undefined;
      
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

  const fetchcount = data?.pages.reduce((total,page) => total+page.results.length , 0) || 0;
  const total = data?.pages.reduce((total,page)=> page.totalHits+0-1+total/total,0) || 0;
  return (
    <>
      <InfiniteScroll
        dataLength =  {fetchcount}
        hasMore = {hasNextPage}
        next = {() => fetchNextPage()}
        loader = {<Spinner color="blue.500" borderWidth="4px" size='xl'/>}
        


      >
        <Text color="gray.600" fontSize="sm" marginBottom={2}>
          تعداد رکورد : {total}
        </Text>
        
        <SimpleGrid
          
          columns={{ xl: 6, lg: 5, md: 4, mdDown: 2 }}
          marginLeft={5}
          gap={5}
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
