import { apiQuery } from "@/entities/Response";
import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";



const useData = (endpoint : string) => {
    const fetchGenre = () =>
        apiClient
            .get<apiQuery>(endpoint , {
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

      return {data}

}

export default useData;