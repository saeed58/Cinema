import useTmovie from "@/Hooks/Tamashakhoneh/useTMovie";
import {
  Box,
  Flex,
  SimpleGrid,
  Spinner,
  StatLabel,
  StatRoot,
  StatValueText,
  Text,
} from "@chakra-ui/react";
import {  useParams } from "react-router";
import { AiFillStar, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";


const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, error, isFetching } = useTmovie(Number(id));

  if (isFetching) return <Spinner />;

  if (error) throw error;
  const cover = "url(" + movie?.cover_path + ")";
  return (
    <>
      <Box
        minH="30vh"
        bgColor={"gray.700"}
        bgSize="cover"
        bgImage={cover}
        backgroundPosition='center'
        color="white"
        shadow=""
      >
        <Box minH="30vh" p={7} backdropFilter= 'blur(50px)' bg='gray.800/70'  >
          <SimpleGrid minChildWidth="200px" gap="10px" mb={3}>
            <Box mb={2}>
              <Text
                fontSize={{ base: "18px", md: "52px" }}
                fontWeight="bold"
                fontFamily="iransans_rtl"
              >
                {movie?.title_fa}
              </Text>
            </Box>
            <Box>
              <Flex>
                <StatRoot>
                  <StatLabel color="white"> دوبله</StatLabel>
                  <StatValueText>
                    {movie?.is_double ? (
                      <AiOutlineCheck color='green' />
                    ) : (
                      <AiOutlineClose color="red" />
                    )}
                  </StatValueText>
                </StatRoot>

                <StatRoot>
                  <StatLabel color="white"> بازدید</StatLabel>
                  <StatValueText>{movie?.visit_count}</StatValueText>
                </StatRoot>

                <StatRoot>
                  <StatLabel color="white"> IMDB Rank</StatLabel>
                  <StatValueText>
                    {movie?.imdb_rank}
                    <AiFillStar color="orange" size="30px" />
                  </StatValueText>
                </StatRoot>
              </Flex>
            </Box>
          </SimpleGrid>
          <Text mt= {{base: '10', md: '20'}}>{movie?.description}</Text>
        </Box>
      </Box>
    </>
  );
};

export default MovieDetailPage;
