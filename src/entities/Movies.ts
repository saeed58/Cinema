import { Category } from "./category"

interface Items {
    id : number,
    title_fa : string,
    poster_path: string,
    publish_date : number,
    imdb_rank : number,
    
}

interface Movie {
    category : Category[],
    items : Items[]
}
interface CatMovie {
    data : Movie

}

export interface Movies{
    
    data : CatMovie[]
    
}