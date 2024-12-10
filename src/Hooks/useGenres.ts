
import { Genres } from "@/entities/Genres";
import { Response } from "@/entities/Response";
import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";



const useGenres = () => {
    const fetchGenre = () =>
        apiClient
            .get<Response<Genres>>('/genre' , {
              params: {
              query: "",
              size: 50,
            }},)
            .then((res) => res.data.entity.results);
      
    
      const { data , error } = useQuery({
        queryKey: ["genre"],
        queryFn: fetchGenre ,
        staleTime: 24 * 60 * 60 * 1000, //24h
        
      });
      return {data, error};

}

export default useGenres;