import useTmovie from "@/Hooks/Tamashakhoneh/useTMovie";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, error, isFetching } = useTmovie(Number(id));

  if (isFetching) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading fontFamily='iransans_rtl'>{movie?.title_fa}</Heading>
      <Text>{movie?.description}</Text>
    </>
  );
};

export default MovieDetailPage;
