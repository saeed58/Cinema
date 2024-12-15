import useTSeries from "@/Hooks/Tamashakhoneh/useTSeries";
import { Heading, Spinner, Text } from "@chakra-ui/react";

import { useParams } from "react-router";

const SeriesDetail = () => {
  const { id } = useParams();
  const { data, error, isFetching } = useTSeries(Number(id));

  if (isFetching) return <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading fontFamily="iransans_rtl">سریال "{data?.title_fa}"</Heading>
      <Text>{data?.description}</Text>
    </>
  );
};

export default SeriesDetail;
