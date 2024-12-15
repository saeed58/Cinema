import { Movie } from "@/entities/Tamashakhoneh/Movie";
import APIMovie from "@/services/apiMovie";
import { useQuery } from "@tanstack/react-query";

const apiTMovie = new APIMovie<Movie>('/movies');
const useTmovie = (id:number)=> useQuery({
    queryKey : ['movie', id],
    queryFn : ()=>apiTMovie.get(id)
})

export default useTmovie;
