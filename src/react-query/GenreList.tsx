import { apiQuery } from "@/entities/apiQuery";
import { Genre } from "@/entities/Genre";
import { Source } from "@/entities/Source";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const GenreList = () => {
  const fetchGenre = () =>
    axios
      .get<apiQuery>("https://searchia.ir/api/index/genre", {
        params: {
          query: "",
          size: 50,
        },
        headers: {
          apikey: "mLpqZlvuCXk1vypda5givd5GqgCyDi8u",
        },
      })
      .then((res) => res.data.entity.results);

  const { data } = useQuery({
    queryKey: ["genre"],
    queryFn: fetchGenre,
  });
  return (
    <ul>
    {data?.map((genre, index) => <li key={index}>{genre.source.name_fa}</li>)}
    </ul>
  );
};

export default GenreList;
