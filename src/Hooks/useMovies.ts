import { Genres } from "@/entities/Genres";
import { Movies } from "@/entities/Movies";
import { Response } from "@/entities/Response";

import apiClient from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";

interface Props {
    selectedGenre: Genres | null;
    searchText: String | null;
  }

const pageSize = 20;
const useMovies = ( {selectedGenre, searchText} : Props  ) => {

    const fetchMovies = ({ pageParam = 0 }) =>
        apiClient
          .get<Response<Movies>>("/movie", {
            params: {
              query: searchText ? searchText : "",
              facets: "country,genre",
              filters: "is_active:1",
              facetFilters: selectedGenre
                ? "genre:" + selectedGenre?.name_fa
                : "",
              from: pageParam,
              size: pageSize,
              sorts: "publish_date<DESC>",
            },
          })
          .then((res) => res.data.entity);
    
      const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
        queryKey: ["movie", selectedGenre, searchText],
        queryFn: fetchMovies,
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.totalHits > allPages.length * pageSize
            ? allPages.length * pageSize
            : undefined;
        },
        staleTime: 24 * 60 * 60 * 1000, //24h
      });


      return {data, fetchNextPage, hasNextPage, isFetching}
    

}

export default useMovies;