import APIMovie from "@/services/apiMovie";
import { Series } from "../../entities/Tamashakhoneh/Series";
import { useQuery } from "@tanstack/react-query";

const apiTMovie = new APIMovie<Series>('/series');
const useTSeries = (id:number)=> useQuery({
    queryKey : ['series', id],
    queryFn : ()=>apiTMovie.get(id)
})

export default useTSeries; 