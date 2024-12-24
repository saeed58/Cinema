import { Casts } from "./Casts";

export interface Movie{
    id: number;
    title_fa : string;
    description : string;
    imdb_rank:number;
    visit_count: number,
    is_double:number;
    cover_path:string;
    screenshots : [];
    casts:Casts[]

}